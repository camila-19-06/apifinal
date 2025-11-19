import prisma from "../prismaClient.js";
class Maquinas {
  static findAll(){ return prisma.maquinas.findMany(); }
  static findById(id){ return prisma.maquinas.findUnique({ where: { id_maquina: Number(id) } }); }
  static create(data){ return prisma.maquinas.create({ data }); }
  static update(id,data){ return prisma.maquinas.update({ where: { id_maquina: Number(id) }, data }); }
  static delete(id){ return prisma.maquinas.delete({ where: { id_maquina: Number(id) } }); }
}
export default Maquinas;
