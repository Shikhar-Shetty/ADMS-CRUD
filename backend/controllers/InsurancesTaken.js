import InsurancesTaken from "../models/InsurancesTakenModel.js";
export const getAllInsurancesTaken = async (req, res) => {
  try {
    const insurancestaken = await InsurancesTaken.findAll();
    res.json(insurancestaken);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getInsurancesTakenById = async (req, res) => {
  try {
    const insurancestaken = await InsurancesTaken.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(insurancestaken[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createInsurancesTaken = async (req, res) => {
  try {
    await InsurancesTaken.create(req.body);
    res.json({
      message: "InsurancesTaken Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateInsurancesTaken = async (req, res) => {
  try {
    await InsurancesTaken.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "InsurancesTaken Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteInsurancesTaken = async (req, res) => {
  try {
    await InsurancesTaken.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "InsurancesTaken Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
