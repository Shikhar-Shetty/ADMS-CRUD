import InsurancesProvided from "../models/InsurancesProvidedModel.js";
export const getAllInsurancesProvided = async (req, res) => {
  try {
    const insurancesprovided = await InsurancesProvided.findAll();
    res.json(insurancesprovided);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getInsurancesProvidedById = async (req, res) => {
  try {
    const insurancesprovided = await InsurancesProvided.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(insurancesprovided[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createInsurancesProvided = async (req, res) => {
  try {
    await InsurancesProvided.create(req.body);
    res.json({
      message: "InsurancesProvided Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateInsurancesProvided = async (req, res) => {
  try {
    await InsurancesProvided.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "InsurancesProvided Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteInsurancesProvided = async (req, res) => {
  try {
    await InsurancesProvided.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "InsurancesProvided Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
