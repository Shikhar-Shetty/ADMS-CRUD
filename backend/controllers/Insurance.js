import Insurance from "../models/InsuranceModel.js";
export const getAllInsurances = async (req, res) => {
  try {
    const insurances = await Insurance.findAll();
    res.json(insurances);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getInsuranceById = async (req, res) => {
  try {
    const insurance = await Insurance.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(insurance[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createInsurance = async (req, res) => {
  try {
    await Insurance.create(req.body);
    res.json({
      message: "Insurance Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateInsurance = async (req, res) => {
  try {
    await Insurance.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Insurance Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteInsurance = async (req, res) => {
  try {
    await Insurance.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Insurance Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
