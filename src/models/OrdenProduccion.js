import prisma from "../prismaClient.js";
class OrdenProduccion {
  static findAll(){ return prisma.ordenProduccion.findMany(); }
  static findById(id){ return prisma.ordenProduccion.findUnique({ where: { id_orden: Number(id) } }); }
  static create(data){ return prisma.ordenProduccion.create({ data }); }
  static update(id,data){ return prisma.ordenProduccion.update({ where: { id_orden: Number(id) }, data }); }
  static delete(id){ return prisma.ordenProduccion.delete({ where: { id_orden: Number(id) } }); }
}
export default OrdenProduccion;
