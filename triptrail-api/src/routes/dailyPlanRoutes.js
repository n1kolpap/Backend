import express from 'express';
import { viewDailyPlan } from '../controllers/dailyPlanController.js';

const router = express.Router();

/**
 * @swagger
 * /user/{userId}/tripPlan/{tripId}/dailyPlan:
 *   get:
 *     tags:
 *       - DailyPlan
 *     summary: View daily plan
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *       - name: tripId
 *         in: path
 *         required: true
 *         description: ID of the trip plan
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Daily plan found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyPlan'
 *       404:
 *         description: Failed to find requested daily plan
 */

router.get('/:userId/tripPlan/:tripId/dailyPlan', viewDailyPlan);

export default router;