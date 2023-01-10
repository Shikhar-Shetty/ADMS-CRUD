import Customer from "../models/CustomerModel.js";
export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(customer[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    res.json({
      message: "Customer Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    await Customer.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Customer Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    await Customer.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Customer Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
