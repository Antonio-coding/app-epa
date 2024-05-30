import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch('https://api.example.com/...')
    const data = await res.json();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return NextResponse.json({
        data
    });
}

export async function POST(request: Request) {
    // const data =
    // return NextResponse.json({
    //     status: 200,
    // })

}