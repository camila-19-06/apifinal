import prisma from "../prismaClient.js";
class Desempeno {
  static findAll(){ return prisma.desempeno.findMany(); }
  static findById(id){ return prisma.desempeno.findUnique({ where: { id_desempeno: Number(id) } }); }
  static create(data){ return prisma.desempeno.create({ data }); }
  static update(id,data){ return prisma.desempeno.update({ where: { id_desempeno: Number(id) }, data }); }
  static delete(id){ return prisma.desempeno.delete({ where: { id_desempeno: Number(id) } }); }
}
export default Desempeno;
