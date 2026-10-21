const origin = 'https://kuroiwafarm.co.jp';

export const assetUrl = (filename: string) =>
  `${origin}/wp-content/uploads/2026/08/${filename}`;

export const navigation = [
  { label: 'ホーム', href: '/' },
  { label: '会社情報', href: '/company/' },
  { label: '事業紹介', href: '/business/' },
  { label: '採用情報', href: '/recruit/' },
  { label: 'オンラインショップ', href: '/online-shop/' },
  { label: 'お知らせ', href: '/news/' },
  { label: 'お問い合わせ', href: '/contact/' },
];

export const businesses = [
  {
    number: '01',
    english: 'AGRICULTURE',
    title: '農業',
    image: 'b01.png',
    alt: '広大な農地を耕す大型トラクター',
    description:
      '北海道・美深町と音威子府村。昼夜の寒暖差が育む豊かな大地で、土づくりから収穫まで、一つひとつの仕事に丁寧に向き合っています。土地の力と、積み重ねてきた技術を、そばの美味しさにつなげていきます。',
  },
  {
    number: '02',
    english: 'TECHNOLOGY',
    title: 'ドローン農薬防除',
    image: 'b02.png',
    alt: '農薬防除を行う農業用ドローン',
    description:
      '広大な圃場を、空から支える。農業用ドローンを活用した農薬防除を受託しています。日々の経験に新しいテクノロジーを掛け合わせ、効率的な作業で地域の農業を支えます。',
  },
  {
    number: '03',
    english: 'PROCESSING',
    title: '加工',
    image: 'b03.png',
    alt: '加工前のそばの実',
    description:
      '畑で育てたそばを、札幌の製麺所へ。石臼による製粉から製麺まで、自分たちの手で取り組みます。伝統の技と新しい設備を生かし、そば本来の香りと風味を大切に仕上げます。',
  },
  {
    number: '04',
    english: 'PRODUCTS',
    title: '商品',
    image: 'b0004.png',
    alt: 'そばの盛り付けと商品パッケージ',
    description:
      '北海道の畑から、ご家庭の食卓へ。丹精込めて育てたそばを、生そばや冷凍麺としてお届けしています。暮らしに合わせた楽しみ方で、素材の豊かな味わいをお楽しみください。',
  },
  {
    number: '05',
    english: 'BENTO',
    title: 'お弁当',
    image: 'b05.png',
    alt: '店頭で販売するお弁当',
    description:
      '毎日の食事を、もっと豊かに。地域の皆様に寄り添い、旬の食材を生かしたお弁当事業を準備しています。そばづくりで培った食への想いを、新しいかたちでお届けします。',
  },
  {
    number: '06',
    english: 'RESTAURANT',
    title: '飲食店',
    image: 'b06.png',
    alt: '飲食店の店内',
    description:
      '北海道の恵みを、五感で味わう場所へ。自社産のそばをはじめ、食材の魅力を生かした料理と、心地よい時間をお届けする飲食店の開業を準備しています。',
  },
] as const;

export const news = [
  {
    date: '2026.08.16',
    dateTime: '2026-08-16',
    href: '/urgent-recruit/',
    title: '【急募】製麺スタッフ・お弁当調理スタッフを募集します',
  },
  {
    date: '2026.08.14',
    dateTime: '2026-08-14',
    href: '/agrifood-expo-tokyo-2026/',
    title: '「アグリフードEXPO東京2026」出展のお知らせ',
  },
  {
    date: '2026.07.20',
    dateTime: '2026-07-20',
    href: '/instagram-open/',
    title: 'Instagramアカウントを開設しました',
  },
  {
    date: '2026.07.18',
    dateTime: '2026-07-18',
    href: '/official-homepage-launched/',
    title: '公式ホームページを公開しました',
  },
];

export const officialSite = origin;
