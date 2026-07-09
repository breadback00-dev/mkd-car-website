import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { STOCK_CACHE_TAG } from "@/app/data/stock";

function requestSecret(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");
  const bearer = authHeader?.startsWith("Bearer ") ? authHeader.slice("Bearer ".length) : null;

  return (
    request.headers.get("x-webhook-secret") ??
    request.headers.get("x-autotrader-webhook-secret") ??
    bearer ??
    request.nextUrl.searchParams.get("secret")
  );
}

export async function POST(request: NextRequest) {
  const configuredSecret = process.env.AUTOTRADER_WEBHOOK_SECRET;

  if (!configuredSecret) {
    return NextResponse.json(
      { error: "AUTOTRADER_WEBHOOK_SECRET is not configured." },
      { status: 500 }
    );
  }

  if (requestSecret(request) !== configuredSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag(STOCK_CACHE_TAG, "max");

  return NextResponse.json({ revalidated: true, tag: STOCK_CACHE_TAG });
}
