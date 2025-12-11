import prisma from "../prismaClient.js";

export const getAll = async (req, res) => {
  try {
    const data = await prisma.operaciones.findMany();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await prisma.operaciones.findUnique({
      where: { id_operacion: id }
    });
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const payload = {
      nombre: req.body.nombre,
      estado: req.body.estado,
      id_referencia: req.body.id_referencia,
      id_maquina: req.body.id_maquina,
      cantidad_estimada: req.body.cantidad_estimada // 👈 CORRECTO
    };

    const newItem = await prisma.operaciones.create({ data: payload });
    res.status(201).json(newItem);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const payload = {
      nombre: req.body.nombre,
      estado: req.body.estado,
      id_referencia: req.body.id_referencia,
      id_maquina: req.body.id_maquina,
      cantidad_estimada: req.body.cantidad_estimada // 👈 CORRECTO
    };

    const updated = await prisma.operaciones.update({
      where: { id_operacion: id },
      data: payload
    });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleted = await prisma.operaciones.delete({
      where: { id_operacion: id }
    });
    res.json({ message: "Deleted", deleted });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
