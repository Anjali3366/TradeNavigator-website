import Holding from "../models/holding.model.js";
import Position from "../models/position.model.js";
import Order from "../models/order.model.js";
export const allHoldings = async (req, res) => {
  try {
    let allHoldings = await Holding.find({});
    res.send(allHoldings);
  } catch (error) {
    console.log("Error in allHoldings controller: ", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error " });
  }
};

export const allPositions = async (req, res) => {
  try {
    let allPositions = await Position.find({});
    res.send(allPositions);
  } catch (error) {
    console.log("Error in allPositions controller: ", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error " });
  }
};

export const allOrders = async (req, res) => {
  try {
    let allOrders = await Order.find({});
    res.send(allOrders);
  } catch (error) {
    console.log("Error in allOrders controller: ", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error " });
  }
};
export const newOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    let newOrder = new Order({
      name,
      qty,
      price,
      mode,
    });

    newOrder.save();
    res.send("Order Saved ! ");
  } catch (error) {
    console.log("Error in newOrder controller: ", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error " });
  }
};
