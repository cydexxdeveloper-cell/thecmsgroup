import SeoJsonLd from "@/components/SeoJsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

interface SeoBreadcrumbsProps {
  currentName: string;
  path: string;
}

export default function SeoBreadcrumbs({ currentName, path }: SeoBreadcrumbsProps) {
  return (
    <SeoJsonLd
      data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: currentName, path },
      ])}
    />
  );
}
