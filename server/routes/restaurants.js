import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create restaurant (SuperAdmin only)
router.post('/', async (req, res) => {
  try {
    if (req.user.role !== 'SuperAdmin') {
      return res.status(403).json({ error: 'Not authorized' });
    }

    const { name, location, adminId } = req.body;
    const bookingLink = `${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;

    const restaurant = await prisma.restaurant.create({
      data: {
        name,
        location,
        adminId,
        bookingLink,
      },
    });

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Error creating restaurant' });
  }
});

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await prisma.restaurant.findMany({
      include: { admin: true },
    });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching restaurants' });
  }
});

// Get restaurant by booking link
router.get('/:bookingLink', async (req, res) => {
  try {
    const { bookingLink } = req.params;
    const restaurant = await prisma.restaurant.findUnique({
      where: { bookingLink },
      include: { admin: true },
    });

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching restaurant' });
  }
});

export default router;