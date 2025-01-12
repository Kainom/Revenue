import { Params } from "next/dist/server/request/params";

type Slug = {
    params: Promise<{ revenueId: string }>;
};

export default async function Revenue({ params }: Slug) {
  const {revenueId} = await params;
  // const fetch api = getData(revenueId);
  //if(!fetch)
  // notFound();
  console.log(params);
  return <h1 className="text-red-200">Revenue {revenueId}</h1>;
}
