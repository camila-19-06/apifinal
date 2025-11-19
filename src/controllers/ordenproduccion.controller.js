import prisma from "../prismaClient.js";

export const getAll = async (req, res) => {
  try {
    const data = await prisma.ordenProduccion.findMany();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await prisma.ordenProduccion.findUnique({ where: { id_orden: id } });
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const payload = req.body;
    const newItem = await prisma.ordenProduccion.create({ data: payload });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const payload = req.body;
    const updated = await prisma.ordenProduccion.update({ where: { id_orden: id }, data: payload });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleted = await prisma.ordenProduccion.delete({ where: { id_orden: id } });
    res.json({ message: "Deleted", deleted });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
