import prisma from "../prismaClient.js";
class Avances {
  static findAll(){ return prisma.avances.findMany(); }
  static findById(id){ return prisma.avances.findUnique({ where: { id_avance: Number(id) } }); }
  static create(data){ return prisma.avances.create({ data }); }
  static update(id,data){ return prisma.avances.update({ where: { id_avance: Number(id) }, data }); }
  static delete(id){ return prisma.avances.delete({ where: { id_avance: Number(id) } }); }
}
export default Avances;
