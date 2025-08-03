import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  const stanje = await prisma.stanje.findUnique({
    where: { id: Number(id) },
  });
  if (!stanje) {
    return new Response(JSON.stringify({ message: 'Stanje not found' }), { status: 404 });
  }
  return new Response(JSON.stringify(stanje), { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  await prisma.stanje.delete({
    where: { id: Number(id) },
  });
  return new Response(null, { status: 204 });
}

export async function POST(request: Request) {
  const data = await request.json();
  const stanje = await prisma.stanje.create({
    data: {
      korisnik: data.korisnik,
      stanje: Number(data.stanje),
      kredit: Number(data.kredit),
      isplata: Number(data.isplata),
      uplate: Number(data.uplate),
    },
  });
  return NextResponse.json(stanje, { status: 201 });
}

export async function PUT(request: Request) {
  const data = await request.json();
  const stanje = await prisma.stanje.update({
    where: { id: data.id },
    data: {
      korisnik: data.korisnik,
      stanje: Number(data.stanje),
      kredit: Number(data.kredit),
      isplata: Number(data.isplata),
      uplate: Number(data.uplate),
    },
  });
  return NextResponse.json(stanje);
}