import express from 'express';
import * as tripController from '../controllers/tripController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', tripController.getAllTrips);
router.post('/', requireAuth, tripController.createTrip);
router.post('/:id/join', requireAuth, tripController.joinTrip);

export default router;

