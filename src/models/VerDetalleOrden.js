import prisma from "../prismaClient.js";
class VerDetalleOrden {
  static findAll(){ return prisma.verDetalleOrden.findMany(); }
  static findById(id){ return prisma.verDetalleOrden.findUnique({ where: { id_detalle: Number(id) } }); }
  static create(data){ return prisma.verDetalleOrden.create({ data }); }
  static update(id,data){ return prisma.verDetalleOrden.update({ where: { id_detalle: Number(id) }, data }); }
  static delete(id){ return prisma.verDetalleOrden.delete({ where: { id_detalle: Number(id) } }); }
}
export default VerDetalleOrden;
