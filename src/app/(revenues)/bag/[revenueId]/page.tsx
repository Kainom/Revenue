import { getRevenue } from "@/services/api";
import { Revenue } from "@/types/Revenue";
import { notFound } from "next/navigation";
import TreasurePNG from "@/assets/treasure.png";
import CdbPNG from "@/assets/cdb.png";
import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
type Slug = {
  params: Promise<{ revenueId: string }>;
};

export default async function RevenuePage({
  params,
}: Slug): Promise<ReactElement> {
  const { revenueId } = await params;
  
    const revenue: Revenue | null  = await getRevenue(revenueId);


    if (!revenue) notFound();
    return (
      <React.Fragment>
        <main className="flex flex-col gap-10 z-0">
          
          <h1 className="text-primary-600 text-4xl">{revenue.nome}</h1>
          <p>Investimento: ${revenue.investimento}</p>
          <p>Rendimento: {revenue.rendimento}%</p>
          <p>Vencimento: {revenue.vencimento.toLocaleDateString()}</p>
        </main>
      </React.Fragment>
    );
}
{/* <div className="flex justify-center items-center">
            <Link
              className="cursor-pointer"  
              href={`/bag/${revenue.slug}/desc`}
            >
              {revenue.nome.includes("CDB") ? (
                <Image className="mb-2" src={CdbPNG} alt="cdb icon" />
              ) : (
                <Image className="mb-2" src={TreasurePNG} alt="Treasure icon" />
              )}
            </Link>
          </div> */}