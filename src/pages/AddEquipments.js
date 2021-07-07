import React, { useState, useEffect } from "react";
import AddItem from "../components/AddItem";
import axios from "axios";
const Equipment = () => {
  const [addedData, setAddData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    pressure: "",
    type: "Pipe",
    diameter: "",
    location: "",
    quantity: "",
  });

  useEffect(() => {
    if (addedData.length > 0) {
      axios
        .post("http://localhost:1010/api/pipe", addedData)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  }, [addedData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddData([...addedData, inputData]);

    setInputData({
      name: "",
      pressure: "",
      type: "Pipe",
      diameter: "",
      location: "",
      quantity: "",
    });
  };

  return (
    <div className="col-span-4 p-4 bg-gray-50 rounded-md">
      <form action="" onSubmit={handleSubmit}>
        <h2 className="font-bold text-lg mb-6">الطلبيات</h2>
        <div className="w-full">
          <AddItem
            setData={setAddData}
            data={addedData}
            toggle={toggle}
            setInputData={setInputData}
            inputData={inputData}
            key={1}
          />
        </div>
        <button className="block mx-auto bg-blue-400  text-white py-2 px-8 text-lg  rounded-md capitalize">
          submit
        </button>
      </form>
    </div>
  );
};

export default Equipment;
