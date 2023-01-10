import Crop from "../models/CropModel.js";
export const getAllCrop = async (req, res) => {
  try {
    const crop = await Crop.findAll();
    res.json(crop);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(crop[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createCrop = async (req, res) => {
  try {
    await Crop.create(req.body);
    res.json({
      message: "Crop Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateCrop = async (req, res) => {
  try {
    await Crop.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Crop Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteCrop = async (req, res) => {
  try {
    await Crop.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Crop Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
