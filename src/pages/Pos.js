import React from "react";
import uuid from "react-uuid";
import PosItem from "../components/PosItem";
const Pos = ({ setCart, storageData, setStorageData }) => {
  return (
    <div className="col-span-4">
      <PosItem
        setCart={setCart}
        type="pipe"
        storageData={storageData}
        setStorageData={setStorageData}
      />
    </div>
  );
};

export default Pos;
