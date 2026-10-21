#!/usr/bin/env bash
set -euo pipefail

: "${ENGLISH_DEPLOY_KEY:?ENGLISH_DEPLOY_KEY is required}"
: "${RUNNER_TEMP:?RUNNER_TEMP is required}"
: "${GITHUB_WORKSPACE:?GITHUB_WORKSPACE is required}"
: "${GITHUB_SHA:?GITHUB_SHA is required}"

site_directory="$GITHUB_WORKSPACE/apps/english-school-homepage/dist"
test -f "$site_directory/index.html"
test -f "$site_directory/p/2/index.html"
test -f "$site_directory/p/3/index.html"
touch "$site_directory/.nojekyll"

# Keep credentials and the publishing repository outside the build output.
umask 077
deploy_directory=$(mktemp -d "$RUNNER_TEMP/english-deploy.XXXXXX")
trap 'rm -rf "$deploy_directory"' EXIT
printf '%s\n' "$ENGLISH_DEPLOY_KEY" > "$deploy_directory/key"
unset ENGLISH_DEPLOY_KEY
cp "$GITHUB_WORKSPACE/.github/github_known_hosts" "$deploy_directory/known_hosts"
export GIT_SSH_COMMAND="ssh -F /dev/null -i '$deploy_directory/key' -o IdentitiesOnly=yes -o BatchMode=yes -o StrictHostKeyChecking=yes -o UserKnownHostsFile='$deploy_directory/known_hosts' -o GlobalKnownHostsFile=/dev/null -o HostKeyAlgorithms=ssh-ed25519"

publish_directory="$deploy_directory/repository"
git init "$publish_directory"
cd "$publish_directory"
git remote add origin git@github.com:YKZ-J/english-school-homepage.git
# A successful, empty result means the branch does not exist yet.
# Authentication and network errors stop deployment instead of creating a branch.
git ls-remote --heads origin refs/heads/gh-pages > "$deploy_directory/remote-head"
if test -s "$deploy_directory/remote-head"; then
  git fetch --depth=1 origin refs/heads/gh-pages
  git checkout -b gh-pages FETCH_HEAD
else
  git checkout --orphan gh-pages
fi

rsync -a --delete --exclude='.git' "$site_directory/" "$publish_directory/"
git config user.name 'github-actions[bot]'
git config user.email '41898282+github-actions[bot]@users.noreply.github.com'
git add --all
if git diff --cached --quiet; then
  echo 'The published site is already up to date.'
  exit 0
fi
git commit -m "deploy: English school from $GITHUB_SHA"
# A normal push preserves history and fails if another writer changed the branch.
git push origin HEAD:refs/heads/gh-pages
