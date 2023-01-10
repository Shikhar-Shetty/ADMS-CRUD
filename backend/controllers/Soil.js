import Soil from "../models/SoilModel.js";
export const getAllSoil = async (req, res) => {
  try {
    const soil = await Soil.findAll();
    res.json(soil);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSoilById = async (req, res) => {
  try {
    const soil = await Soil.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(soil[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createSoil = async (req, res) => {
  try {
    await Soil.create(req.body);
    res.json({
      message: "Soil Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateSoil = async (req, res) => {
  try {
    await Soil.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Soil Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteSoil = async (req, res) => {
  try {
    await Soil.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Soil Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
