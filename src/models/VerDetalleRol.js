import prisma from "../prismaClient.js";
class VerDetalleRol {
  static findAll(){ return prisma.verDetalleRol.findMany(); }
  static findById(id){ return prisma.verDetalleRol.findUnique({ where: { id_detalle: Number(id) } }); }
  static create(data){ return prisma.verDetalleRol.create({ data }); }
  static update(id,data){ return prisma.verDetalleRol.update({ where: { id_detalle: Number(id) }, data }); }
  static delete(id){ return prisma.verDetalleRol.delete({ where: { id_detalle: Number(id) } }); }
}
export default VerDetalleRol;
