import InsuranceCompany from "../models/InsuranceCompanyModel.js";
export const getAllInsuranceCompanies = async (req, res) => {
  try {
    const insurancecompanies = await InsuranceCompany.findAll();
    res.json(insurancecompanies);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getInsuranceCompanyById = async (req, res) => {
  try {
    const insurancecompany = await InsuranceCompany.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(insurancecompany[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createInsuranceCompany = async (req, res) => {
  try {
    await InsuranceCompany.create(req.body);
    res.json({
      message: "InsuranceCompany Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateInsuranceCompany = async (req, res) => {
  try {
    await InsuranceCompany.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "InsuranceCompany Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteInsuranceCompany = async (req, res) => {
  try {
    await InsuranceCompany.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "InsuranceCompany Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
