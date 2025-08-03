import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  try {
    const stanje = await prisma.stanje.findUnique({
      where: { id: Number(id) },
    });
    if (!stanje) {
      return new Response(JSON.stringify({ message: 'Stanje not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(stanje), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error retrieving stanje' }), { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  try {
    await prisma.stanje.delete({
      where: { id: Number(id) },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting stanje' }), { status: 500 });
  }
}