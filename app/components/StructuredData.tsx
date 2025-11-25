import Script from "next/script";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Alfian Dwi Fantara",
    alternateName: "Muhammad Alfian",
    url: "https://alfiandf-portfolio.vercel.app/",
    image: "https://alfiandf-portfolio.vercel.app/images/portrait.png",
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "PT. Smooets Teknologi Outsourcing",
    },
    sameAs: [
      "https://github.com/alfiandf9",
      "https://www.linkedin.com/in/malfiandf/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Frontend Development",
      "Web Development",
      "React Query",
      "Zustand",
    ],
    email: "alfian.fantara@gmail.com",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Alfian Portfolio",
    url: "https://alfiandf-portfolio.vercel.app/",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript",
    author: {
      "@type": "Person",
      name: "Muhammad Alfian Dwi Fantara",
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <meta
        name="google-site-verification"
        content="w3Nt-N-xWU6C6olbI2lKW_Grgr0J5lD8O2AdPZVklNE"
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
