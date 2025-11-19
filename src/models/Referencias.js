import prisma from "../prismaClient.js";
class Referencias {
  static findAll(){ return prisma.referencias.findMany(); }
  static findById(id){ return prisma.referencias.findUnique({ where: { id_referencia: Number(id) } }); }
  static create(data){ return prisma.referencias.create({ data }); }
  static update(id,data){ return prisma.referencias.update({ where: { id_referencia: Number(id) }, data }); }
  static delete(id){ return prisma.referencias.delete({ where: { id_referencia: Number(id) } }); }
}
export default Referencias;
