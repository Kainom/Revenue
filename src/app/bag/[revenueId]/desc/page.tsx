import { CardMonth } from "@/components/expense/CardMonth";
import Image from "next/image";
import React, { ReactElement } from "react";
import TreasurePNG from "@/assets/treasure.png";
import CdbPNG from "@/assets/cdb.png";
type Slug = {
  params: Promise<{ revenueId: string }>;
};

export default async function BigImage({
  params,
}: Slug): Promise<ReactElement> {
  const { revenueId } = await params;
  console.log(revenueId);
  return (
    <React.Fragment>
      <main className="opacity-25">
          {revenueId === "Selic" ? (
            <Image src={TreasurePNG} width={100} alt="Treasure icon" />
          ) : (
            <Image src={CdbPNG} width={100} alt="Treasure icon" />
          )}
      </main>
    </React.Fragment>
  );
}
