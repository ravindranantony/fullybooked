import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create booking
router.post('/', async (req, res) => {
  try {
    const { restaurantId, date, time, guests, specialRequests } = req.body;
    const userId = req.user.id;

    const booking = await prisma.booking.create({
      data: {
        restaurantId,
        userId,
        date: new Date(date),
        time,
        guests,
        specialRequests,
      },
    });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error creating booking' });
  }
});

// Get user's bookings
router.get('/user', async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.user.id },
      include: { restaurant: true },
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
});

// Update booking status
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
    });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error updating booking' });
  }
});

export default router;