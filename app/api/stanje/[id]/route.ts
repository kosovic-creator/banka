import { NextRequest } from 'next/server';
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