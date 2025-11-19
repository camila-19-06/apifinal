import prisma from "../prismaClient.js";
class Operarias {
  static findAll(){ return prisma.operarias.findMany(); }
  static findById(id){ return prisma.operarias.findUnique({ where: { id_operaria: Number(id) } }); }
  static create(data){ return prisma.operarias.create({ data }); }
  static update(id,data){ return prisma.operarias.update({ where: { id_operaria: Number(id) }, data }); }
  static delete(id){ return prisma.operarias.delete({ where: { id_operaria: Number(id) } }); }
}
export default Operarias;
