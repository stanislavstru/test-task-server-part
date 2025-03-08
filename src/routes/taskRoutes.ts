/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - color
 *         - completed
 *         - is_deleted
 *         - created_at
 *         - updated_at
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         color:
 *           type: string
 *           enum: ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#007AFF", "#5856D6", "#AF52DE", "#FF2D55", "#A2845E"]
 *         completed:
 *           type: boolean
 *         is_deleted:
 *           type: boolean
 *         created_at:
 *           type: string
 *         updated_at:
 *           type: string
 *     TaskCreate:
 *       type: object
 *       required:
 *         - title
 *         - color
 *         - completed
 *       properties:
 *         title:
 *           type: string
 *         color:
 *           type: string
 *           enum: ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#007AFF", "#5856D6", "#AF52DE", "#FF2D55", "#A2845E"]
 *         completed:
 *           type: boolean
 *     TaskUpdate:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         color:
 *           type: string
 *           enum: ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#007AFF", "#5856D6", "#AF52DE", "#FF2D55", "#A2845E"]
 *         completed:
 *           type: boolean
 *         id_deleted:
 *           type: boolean
 *
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: List of all tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Server Error
 *   post:
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskCreate'
 *     responses:
 *       201:
 *         description: Created task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Server Error
 *
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found
 *       500:
 *         description: Server Error
 *   patch:
 *     summary: Update a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskUpdate'
 *     responses:
 *       200:
 *         description: Task updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found
 *       500:
 *         description: Server Error
 */

import express from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
} from '../controllers/taskController';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);

export default router;
