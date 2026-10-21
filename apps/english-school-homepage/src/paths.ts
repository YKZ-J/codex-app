export function withBase(path: string): string {
  return path.startsWith('/') && !path.startsWith('//')
    ? `${import.meta.env.BASE_URL}${path.slice(1)}`
    : path;
}

export function withoutBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return path.startsWith(base) ? `/${path.slice(base.length)}` : path;
}
