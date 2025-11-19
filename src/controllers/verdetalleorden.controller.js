import prisma from "../prismaClient.js";

export const getAll = async (req, res) => {
  try {
    const data = await prisma.verDetalleOrden.findMany();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await prisma.verDetalleOrden.findUnique({ where: { id_detalle: id } });
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const payload = req.body;
    const newItem = await prisma.verDetalleOrden.create({ data: payload });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const payload = req.body;
    const updated = await prisma.verDetalleOrden.update({ where: { id_detalle: id }, data: payload });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleted = await prisma.verDetalleOrden.delete({ where: { id_detalle: id } });
    res.json({ message: "Deleted", deleted });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
