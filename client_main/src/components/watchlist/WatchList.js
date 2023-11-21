import React from "react";
import { useSelector } from "react-redux";

function WatchList() {
  const watchlist = useSelector((store) => store.watch);
  console.log(watchlist);
  return <div className="mt-[100px]">WatchList</div>;
}

export default WatchList;
