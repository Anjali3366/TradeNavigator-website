import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { VerticalBarChart } from "./VerticalBarChart";
const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      });
  }, []);
  const labels = allOrders.map((order) => order["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Order",
        data: allOrders.map((order) => order.qty),
        backgroundColor: "rgba(249, 15, 15, 0.5)",
      },
    ],
  };
  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length}) </h3>
      {allOrders.length == 0 && (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      )}
      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>

            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <VerticalBarChart data={data} />
    </div>
  );
};

export default Orders;
