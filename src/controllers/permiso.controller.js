import prisma from "../prismaClient.js";

export const getAll = async (req, res) => {
  try {
    const data = await prisma.permisos.findMany();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await prisma.permisos.findUnique({ where: { id_permiso: id } });
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const payload = req.body;
    const newItem = await prisma.permisos.create({ data: payload });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const payload = req.body;
    const updated = await prisma.permisos.update({ where: { id_permiso: id }, data: payload });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleted = await prisma.permisos.delete({ where: { id_permiso: id } });
    res.json({ message: "Deleted", deleted });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
