import prisma from "../prismaClient.js";
class VerDetalleDesempeno {
  static findAll(){ return prisma.verDetalleDesempeno.findMany(); }
  static findById(id){ return prisma.verDetalleDesempeno.findUnique({ where: { id_detalle: Number(id) } }); }
  static create(data){ return prisma.verDetalleDesempeno.create({ data }); }
  static update(id,data){ return prisma.verDetalleDesempeno.update({ where: { id_detalle: Number(id) }, data }); }
  static delete(id){ return prisma.verDetalleDesempeno.delete({ where: { id_detalle: Number(id) } }); }
}
export default VerDetalleDesempeno;
