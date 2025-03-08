import prisma from '../config/db';
import Joi from 'joi';

export const getTasks = async (_, res) => {
  try {
    const users = await prisma.tasks.findMany({
      where: { is_deleted: false },
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getTask = async (req, res) => {
  try {
    const user = await prisma.tasks.findUnique({
      where: { id: req.params.id },
    });
    if (!user) return res.status(404).json({ error: `Task was't found` });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  color: Joi.string().required(),
});

export const createTask = async (req, res) => {
  try {
    const { error } = createTaskSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const newUser = await prisma.tasks.create({
      data: req.body,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const updateTaskSchema = Joi.object({
  title: Joi.string(),
  color: Joi.string(),
  is_deleted: Joi.boolean(),
  completed: Joi.boolean(),
});

export const updateTask = async (req, res) => {
  try {
    const { error } = updateTaskSchema.validate(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }

    const user = await prisma.tasks.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
