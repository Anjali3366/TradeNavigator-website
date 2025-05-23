import { useState, useEffect } from "react";
import axios from "axios";
import { LineChart } from "./LineChart.jsx";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/positions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);
  const labels = allPositions.map((product) => product.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Qty",
        data: allPositions.map((product) => product.qty),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Price",
        data: allPositions.map((product) => product.price),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      <h3 className="title">Positions ({allPositions.length}) </h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;

            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayChange = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>

                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>

                <td className={dayChange}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <LineChart data={data} />
    </>
  );
};

export default Positions;
