import { useEffect } from 'react';

/**
 * SEO / LLMO / MEO 対策コンポーネント
 * - メタタグ（title, description, keywords, canonical, OGP, Twitter Cards）
 * - 構造化データ（Organization, LocalBusiness, JobPosting, BreadcrumbList, FAQPage, WebSite）
 */

const SITE_URL = 'https://hrg-llc.com';
const SITE_NAME = '合同会社HRG';
const SITE_NAME_EN = 'HRG CO., LTD.';
const DESCRIPTION =
  '合同会社HRG（石川県金沢市）は、通信キャリア販売支援・携帯販売イベント運営を手がける企業です。北陸三県（石川・富山・福井）を中心に、携帯販売イベントスタッフや通信キャリア特別販売員を募集中。未経験歓迎、交通費支給、宿泊費全額支給など充実の待遇でお待ちしています。';
const KEYWORDS =
  '合同会社HRG,HRG,石川県,金沢市,通信キャリア,携帯販売,イベントスタッフ,販売員,求人,採用,北陸,富山県,福井県,アルバイト,業務委託,未経験歓迎';

// --- 構造化データ定義 ---

// 1. Organization（LLMO: 企業情報を明確化）
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_NAME_EN,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: DESCRIPTION,
  founder: {
    '@type': 'Person',
    name: '梅澤 浩二',
    jobTitle: '代表社員',
  },
  address: {
    '@type': 'PostalAddress',
    postalCode: '920-0901',
    addressRegion: '石川県',
    addressLocality: '金沢市',
    streetAddress: '彦三町1-2-1 アソルティ金沢彦三1F',
    addressCountry: 'JP',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+81-76-255-7662',
    contactType: 'customer service',
    availableLanguage: ['Japanese'],
  },
  sameAs: [],
  areaServed: [
    { '@type': 'State', name: '石川県' },
    { '@type': 'State', name: '富山県' },
    { '@type': 'State', name: '福井県' },
  ],
};

// 2. LocalBusiness（MEO: Googleマップ・ローカル検索対策）
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  alternateName: SITE_NAME_EN,
  description:
    '通信キャリア販売支援・携帯販売イベント運営を手がける合同会社HRG。北陸三県を中心に事業展開。',
  url: SITE_URL,
  telephone: '076-255-7662',
  email: 'info@hrg-llc.com',
  address: {
    '@type': 'PostalAddress',
    postalCode: '920-0901',
    addressRegion: '石川県',
    addressLocality: '金沢市',
    streetAddress: '彦三町1-2-1 アソルティ金沢彦三1F',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.5685,
    longitude: 136.6598,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '10:00',
    closes: '19:00',
  },
  areaServed: [
    { '@type': 'State', name: '石川県' },
    { '@type': 'State', name: '富山県' },
    { '@type': 'State', name: '福井県' },
  ],
  priceRange: '$$',
  hasMap: 'https://www.google.com/maps?cid=YOUR_GOOGLE_CID',
};

// 3. JobPosting × 2（SEO + LLMO: 求人情報を構造化）
const jobPostingEventStaff = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: '携帯販売イベントスタッフ',
  description:
    '土日祝に石川県内で開催される携帯販売イベントでの接客・販売業務。未経験者歓迎。時給1,300円〜、交通費手当あり。',
  datePosted: '2026-01-01',
  validThrough: '2026-12-31',
  employmentType: 'PART_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: SITE_NAME,
    sameAs: SITE_URL,
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressRegion: '石川県',
      addressCountry: 'JP',
    },
  },
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'JPY',
    value: {
      '@type': 'QuantitativeValue',
      value: 1300,
      minValue: 1300,
      unitText: 'HOUR',
    },
  },
  workHours: '10:00-18:00（休憩1時間/実労7時間）',
  jobBenefits: '交通費手当あり（当社規定）',
};

const jobPostingCarrierSales = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: '通信キャリア特別販売員',
  description:
    '通信キャリアの特別販売員として、石川県・富山県・福井県の店舗にて勤務。未経験月給220,000円〜、経験者250,000円〜。週休2日完全固定、交通費全額支給、宿泊費全額支給。業務委託・アルバイト・社員から選択可能。',
  datePosted: '2026-01-01',
  validThrough: '2026-12-31',
  employmentType: ['FULL_TIME', 'PART_TIME', 'CONTRACTOR'],
  hiringOrganization: {
    '@type': 'Organization',
    name: SITE_NAME,
    sameAs: SITE_URL,
  },
  jobLocation: [
    {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressRegion: '石川県', addressCountry: 'JP' },
    },
    {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressRegion: '富山県', addressCountry: 'JP' },
    },
    {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressRegion: '福井県', addressCountry: 'JP' },
    },
  ],
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'JPY',
    value: {
      '@type': 'QuantitativeValue',
      minValue: 220000,
      maxValue: 250000,
      unitText: 'MONTH',
    },
  },
  workHours: '10:00-19:00（休憩1時間/実労8時間）',
  jobBenefits: '交通費全額支給、宿泊費全額支給、車通勤可（ガソリン代当社規定）、週休2日完全固定',
};

// 4. BreadcrumbList（SEO: パンくずリスト）
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'トップ', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: '事業内容', item: `${SITE_URL}/#recruit` },
    { '@type': 'ListItem', position: 3, name: '会社概要', item: `${SITE_URL}/#profile` },
    { '@type': 'ListItem', position: 4, name: '採用情報', item: `${SITE_URL}/#jobs` },
    { '@type': 'ListItem', position: 5, name: 'お問い合わせ', item: `${SITE_URL}/#contact` },
  ],
};

// 5. FAQPage（LLMO: LLMが引用しやすいQ&A形式）
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '合同会社HRGはどのような会社ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '合同会社HRGは石川県金沢市に本社を置き、通信キャリアの販売支援事業や携帯販売イベントの運営を行う企業です。北陸三県（石川・富山・福井）を中心に事業を展開しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'HRGではどのような求人がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '現在、①携帯販売イベントスタッフ（アルバイト/土日祝/時給1,300円〜/石川県内）と②通信キャリア特別販売員（業務委託・アルバイト・社員/月給220,000円〜/石川・富山・福井）の2職種を募集中です。いずれも未経験歓迎で交通費支給があります。',
      },
    },
    {
      '@type': 'Question',
      name: 'HRGの所在地はどこですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '〒920-0901 石川県金沢市彦三町1-2-1 アソルティ金沢彦三1Fに所在しています。',
      },
    },
    {
      '@type': 'Question',
      name: '未経験でも応募できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、未経験の方も歓迎しています。通信キャリア特別販売員は未経験でも月給220,000円からスタートでき、充実したサポート体制を整えています。',
      },
    },
    {
      '@type': 'Question',
      name: '交通費や宿泊費は支給されますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '通信キャリア特別販売員は交通費全額支給（車通勤の場合はガソリン代を当社規定で支給）、宿泊費も全額支給です。携帯販売イベントスタッフは交通費手当が当社規定で支給されます。',
      },
    },
  ],
};

// 6. WebSite（SEO + LLMO: サイト全体の情報）
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: `${SITE_NAME}（${SITE_NAME_EN}）公式サイト`,
  url: SITE_URL,
  description: DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'ja',
};

// メタタグ設定
const META_TAGS: Record<string, string> = {
  description: DESCRIPTION,
  keywords: KEYWORDS,
  author: SITE_NAME,
  'format-detection': 'telephone=no',
  // OGP
  'og:title': `${SITE_NAME}｜通信キャリア販売支援・携帯販売イベント運営【石川県金沢市】`,
  'og:description': DESCRIPTION,
  'og:type': 'website',
  'og:url': SITE_URL,
  'og:site_name': `${SITE_NAME} 公式サイト`,
  'og:locale': 'ja_JP',
  'og:image': `${SITE_URL}/ogp.png`,
  // Twitter Card
  'twitter:card': 'summary_large_image',
  'twitter:title': `${SITE_NAME}｜通信キャリア販売支援・携帯販売イベント運営`,
  'twitter:description': DESCRIPTION,
  'twitter:image': `${SITE_URL}/ogp.png`,
  // Robots
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};

const ALL_SCHEMAS = [
  organizationSchema,
  localBusinessSchema,
  jobPostingEventStaff,
  jobPostingCarrierSales,
  breadcrumbSchema,
  faqSchema,
  webSiteSchema,
];

export const SeoHead = () => {
  useEffect(() => {
    // --- Title ---
    document.title = `${SITE_NAME}（${SITE_NAME_EN}）｜通信キャリア販売支援・携帯販売イベント運営【石川県金沢市】`;

    // --- html lang ---
    document.documentElement.lang = 'ja';

    // --- Meta Tags ---
    const createdMetas: HTMLMetaElement[] = [];
    Object.entries(META_TAGS).forEach(([key, value]) => {
      const isOg = key.startsWith('og:');
      const isTwitter = key.startsWith('twitter:');
      const attr = isOg || isTwitter ? 'property' : 'name';

      // 既存のタグを検索
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        createdMetas.push(el);
      }
      el.setAttribute('content', value);
    });

    // --- Canonical ---
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL;

    // --- JSON-LD Structured Data ---
    const scripts: HTMLScriptElement[] = ALL_SCHEMAS.map((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    // Cleanup
    return () => {
      createdMetas.forEach((el) => el.remove());
      if (createdCanonical && canonical) canonical.remove();
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return null;
};
