import React, { useState, useEffect } from "react";
import StorageTable from "../components/StorageTable";
import { Link } from "react-router-dom";
import axios from "axios";
import uuid from "react-uuid";
const Storage = ({ storageData, setStorageData }) => {
  const [types, setType] = useState();
  useEffect(() => {
    axios.get("http://localhost:1010/api/equipment").then((res) => {
      setStorageData(res.data);
    });
  }, []);

  useEffect(() => {
    storageData.map((item) => {
      setType((items) => {
        return {
          ...items,
          [item.type]: storageData.filter((item2) => item2.type === item.type),
        };
      });
    });
  }, [storageData]);
  return (
    <div className="col-span-4 p-4">
      <button className="text-white bg-blue-500 py-2 px-4 rounded-md">
        <Link to="/add">اضافة عنصر</Link>
      </button>
      {storageData.length > 0 ? (
        <div>
          {types && (
            <div className="mt-8 space-y-8">
              {Object.keys(types).map((key, idx) => {
                return (
                  <StorageTable
                    title={key}
                    key={uuid()}
                    storageData={types[key]}
                  />
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <h2 className="text-center py-36">المخزن فارغ....</h2>
      )}
    </div>
  );
};

export default Storage;
