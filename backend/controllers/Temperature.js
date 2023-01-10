import Temperature from "../models/TemperatureModel.js";
export const getAllTemperatures = async (req, res) => {
  try {
    const temperatures = await Temperature.findAll();
    res.json(temperatures);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getTemperatureById = async (req, res) => {
  try {
    const temperature = await Temperature.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(temperature[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createTemperature = async (req, res) => {
  try {
    await Temperature.create(req.body);
    res.json({
      message: "Temperature Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateTemperature = async (req, res) => {
  try {
    await Temperature.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Temperature Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteTemperature = async (req, res) => {
  try {
    await Temperature.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Temperature Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
