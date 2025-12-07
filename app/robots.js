export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://catalyst-labs.vercel.app/sitemap.xml",
  };
}
