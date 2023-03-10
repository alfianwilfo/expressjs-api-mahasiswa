let { RencanaStudi, Mahasiswa, Matkul } = require("../models/");
class ControllerStudi {
  static async getAll(req, res, next) {
    try {
      let data = await RencanaStudi.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          {
            model: Mahasiswa,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
          {
            model: Matkul,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
      });
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
  static async createRencanaStudi(req, res) {
    try {
      let IdMahasiswa = +req.body.IdMahasiswa;
      let IdMatkul = +req.body.IdMatkul;

      let createdRencanaStudi = await RencanaStudi.create({
        IdMahasiswa,
        IdMatkul,
      });
      res.status(201).json({ message: `Success create new rencana studi` });
    } catch (error) {
      next(error);
    }
  }

  static async updateRencanaMatkul(req, res, next) {
    try {
      let { id } = req.params;
      let IdMahasiswa = +req.body.IdMahasiswa;

      let IdMatkul = +req.body.IdMatkul;
      let updatedRencanaMatkul = await RencanaStudi.update(
        { IdMatkul, IdMahasiswa },
        { where: { id } }
      );
      res.json({ message: "Success update rencana studi" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteRencanaStudi(req, res) {
    try {
      let { id } = req.params;
      let deletedRencanaStudi = await RencanaStudi.destroy({ where: { id } });
      res.json({ message: "Success delete rencana studi" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = ControllerStudi;
