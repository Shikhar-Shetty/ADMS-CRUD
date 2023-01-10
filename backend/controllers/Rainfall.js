import Rainfall from "../models/RainfallModel.js";
export const getAllRainfalls = async (req, res) => {
  try {
    const rainfalls = await Rainfall.findAll();
    res.json(rainfalls);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getRainfallById = async (req, res) => {
  try {
    const rainfall = await Rainfall.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(rainfall[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createRainfall = async (req, res) => {
  try {
    await Rainfall.create(req.body);
    res.json({
      message: "Rainfall Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateRainfall = async (req, res) => {
  try {
    await Rainfall.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Rainfall Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteRainfall = async (req, res) => {
  try {
    await Rainfall.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Rainfall Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
