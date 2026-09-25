import { absoluteUrl } from "./seo";

interface PageSocialMetadataOptions {
  title: string;
  description: string;
  path: string;
  image: string;
  alt: string;
  width?: number;
  height?: number;
}

export function pageSocialMetadata({
  title,
  description,
  path,
  image,
  alt,
  width = 600,
  height = 450,
}: PageSocialMetadataOptions) {
  return {
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: "CMS Group",
      locale: "en_IN",
      type: "website" as const,
      images: [
        {
          url: image,
          width,
          height,
          alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [{ url: image, alt }],
    },
  };
}
