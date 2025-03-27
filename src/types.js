const LinkProps = {
  id: 1,
  text: "Click here",
  href: "https://example.com",
  isExternal: true,
};

const ImageProps = {
  id: 1,
  documentId: "doc123",
  url: "https://example.com/image.jpg",
  alternativeText: "Sample image",
};

const LogoProps = {
  logoText: "My Logo",
  image: ImageProps,
};

const HeroSectionProps = {
  id: 1,
  __component: "blocks.hero-section",
  documentId: "hero123",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  publishedAt: new Date().toISOString(),
  theme: "turquoise",
  heading: "Welcome to our website",
  image: ImageProps,
  cta: LinkProps,
  logo: LogoProps,
  author: "John Doe",
  darken: true,
};

const InfoBlockProps = {
  id: 2,
  __component: "blocks.info-block",
  documentId: "info123",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  publishedAt: new Date().toISOString(),
  theme: "orange",
  reversed: false,
  headline: "About Us",
  content: "This is an information block.",
  image: ImageProps,
  cta: LinkProps,
};

// Example usage
console.log(HeroSectionProps);
console.log(InfoBlockProps);
