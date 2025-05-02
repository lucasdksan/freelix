import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json(
        {
            data: "Pong",
            timestamp: new Date().toISOString(),
            status: "healthy"
        },
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        }
    );
}