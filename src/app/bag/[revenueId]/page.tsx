import { getRevenue } from "@/services/api";
import { Revenue } from "@/types/Revenue";
import { Params } from "next/dist/server/request/params";
import { notFound } from "next/navigation";

type Slug = {
  params: Promise<{ revenueId: string }>;
};

export default async function RevenuePage({ params }: Slug) {
  const { revenueId } = await params;
  const revenue: Revenue = await getRevenue(revenueId);
  if (!revenue) notFound();
  console.log(params);
  return <h1 className="text-red-200">Revenue {revenue.slug}</h1>;
}
