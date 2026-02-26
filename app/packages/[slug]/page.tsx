import { packages, categoryGradients } from "@/data/packages";
import { notFound } from "next/navigation";
import PackageDetailClient from "./PackageDetailClient";

export function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const gradient = categoryGradients[pkg.category] || "from-gray-700 to-gray-500";

  return <PackageDetailClient pkg={pkg} gradient={gradient} />;
}
