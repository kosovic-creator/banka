import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const stanje = await prisma.stanje.findMany();
  return NextResponse.json(stanje);
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
      stanje: data.stanje,
      kredit: data.kredit,
      isplata: data.isplata,
      uplate: data.uplate,
    },
  });
  return NextResponse.json(stanje);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.stanje.delete({
    where: { id },
  });
  return NextResponse.json({ message: 'Deleted successfully' });
}