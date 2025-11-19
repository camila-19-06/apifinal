import prisma from "../prismaClient.js";
class ReportesDesempeno {
  static findAll(){ return prisma.reportesDesempeno.findMany(); }
  static findById(id){ return prisma.reportesDesempeno.findUnique({ where: { id_reporte: Number(id) } }); }
  static create(data){ return prisma.reportesDesempeno.create({ data }); }
  static update(id,data){ return prisma.reportesDesempeno.update({ where: { id_reporte: Number(id) }, data }); }
  static delete(id){ return prisma.reportesDesempeno.delete({ where: { id_reporte: Number(id) } }); }
}
export default ReportesDesempeno;
