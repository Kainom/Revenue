import { NextApiRequest, NextApiResponse } from "next";

export function GET(res:Response) {
    return new Response(
        JSON.stringify({ message: "Hello, world!" }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
}
