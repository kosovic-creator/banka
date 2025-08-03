import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const stanje = await prisma.stanje.findUnique({
          where: { id: Number(id) },
        });
        if (!stanje) {
          return res.status(404).json({ message: 'Stanje not found' });
        }
        return res.status(200).json(stanje);
      } catch (error) {
        return res.status(500).json({ message: 'Error retrieving stanje' });
      }

    case 'PUT':
      try {
        const updatedStanje = await prisma.stanje.update({
          where: { id: Number(id) },
          data: req.body,
        });
        return res.status(200).json(updatedStanje);
      } catch (error) {
        return res.status(500).json({ message: 'Error updating stanje' });
      }

    case 'DELETE':
      try {
        await prisma.stanje.delete({
          where: { id: Number(id) },
        });
        return res.status(204).end();
      } catch (error) {
        return res.status(500).json({ message: 'Error deleting stanje' });
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}