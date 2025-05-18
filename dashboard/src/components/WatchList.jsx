import React, { useState, useContext } from "react";
import{Tooltip,Grow} from '@mui/material';

import { watchlist } from "../data/data";

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const WatchList = () => {


  // export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  // datasets: [
  //   {
  //     label: "# of Votes",
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       "rgba(255, 99, 132, 0.2)",
  //       "rgba(54, 162, 235, 0.2)",
  //       "rgba(255, 206, 86, 0.2)",
  //       "rgba(75, 192, 192, 0.2)",
  //       "rgba(153, 102, 255, 0.2)",
  //       "rgba(255, 159, 64, 0.2)",
  //     ],
  //     borderColor: [
  //       "rgba(255, 99, 132, 1)",
  //       "rgba(54, 162, 235, 1)",
  //       "rgba(255, 206, 86, 1)",
  //       "rgba(75, 192, 192, 1)",
  //       "rgba(153, 102, 255, 1)",
  //       "rgba(255, 159, 64, 1)",
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // };

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
      
{
  watchlist.map((stock, index)=>{
return( <WatchListItem key ={index} stock = {stock}></WatchListItem>);
  })
}

      </ul>

   
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock, key})=>{

  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e)=>{

    setShowWatchListAction(true);
  }


const handleMouseExit = (e)=>{

  setShowWatchListAction(false);
}

return(
  <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>

<div className="item">
  <p className={stock.isDown ? "down":"up"}>{stock.name}</p>

  <div className="itemInfo">

<span className="percent">{stock.percent}</span>
{stock.isDown? (<ExpandLessIcon className ="down"/>):(<ExpandMoreIcon className="up"/>)}

<span className="price">
  {stock.price}
</span>
  </div>
</div> 

{showWatchListAction && <WatchlistActions uid = {stock.name}/>}

  </li>
)

};

const WatchlistActions = ({uid})=>{
  return(
    <span className="actions">
<span>
  <Tooltip title ="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
    <button className="buy">Buy</button>
  </Tooltip>


  
  <Tooltip title ="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
    <button className="sell">Sell</button>
  </Tooltip>

  <Tooltip title ="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
 <button className="action" > <InsightsOutlinedIcon className="chart"/></button>
  </Tooltip>


  <Tooltip title ="More" placement="top" arrow TransitionComponent={Grow}>
    <button className="action" ><MoreHorizIcon className="icon" /></button>
  </Tooltip>
</span>



    </span>
  )
}