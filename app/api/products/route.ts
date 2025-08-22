import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/products
export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

// POST /api/products
export async function POST(req: NextRequest) {
  const body = await req.json();
  const product = await prisma.product.create({ data: body });
  return NextResponse.json(product);
}
