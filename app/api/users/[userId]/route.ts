import { NextResponse } from "next/server";
import data from "@/data.json";

export async function GET(request: Request, context: any) {
    const { params } = context;
    const user = data.filter((x) => params.userId === x.id.toString())

    // const data = await request.json();
    return NextResponse.json({
        user,
    })
}