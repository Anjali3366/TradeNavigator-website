import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";

import { watchlist } from "../data/data";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GeneralContext from "./GeneralContext";
import DoughNutChart from "./DoughNutChart";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock) => {
          return (
            <WatchListItem key={stock.price} stock={stock}></WatchListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, key }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListAction(true);
  };

  const handleMouseExit = (e) => {
    setShowWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <ExpandLessIcon className="down" />
          ) : (
            <ExpandMoreIcon className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchListAction && <WatchlistActions uid={stock.name} />}
    </li>
  );
};

const WatchlistActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  const handleBuyWindow = () => {
    openBuyWindow(uid);
  };
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={handleBuyWindow}>
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            {" "}
            <InsightsOutlinedIcon className="chart" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
