import CropRequirements from "../models/CropRequirementsModel.js";
export const getAllCropRequirements = async (req, res) => {
  try {
    const croprequirements = await CropRequirements.findAll();
    res.json(croprequirements);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getCropRequirementsById = async (req, res) => {
  try {
    const croprequirements = await CropRequirements.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(croprequirements[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createCropRequirements = async (req, res) => {
  try {
    await CropRequirements.create(req.body);
    res.json({
      message: "CropRequirements Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateCropRequirements = async (req, res) => {
  try {
    await CropRequirements.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "CropRequirements Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteCropRequirements = async (req, res) => {
  try {
    await CropRequirements.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "CropRequirements Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
