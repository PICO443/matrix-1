import React from "react";

const AddItem = ({ setData, setInputData, inputData }) => {
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <h3 className="font-bold text-gray-700 mb-3">المواسير</h3>
      <div className="flex justify-start gap-8 mb-16">
        <div className="">
          <label htmlFor="name" className="block mb-4 ">
            اسم الماسورة
          </label>
          <input
            className="border-gray-200 h-12 border-2 py-2 px-2"
            type="text"
            name="name"
            required
            id="name"
            value={inputData["name"]}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="name" className="block  mb-4 ">
            قطر الماسورة
          </label>
          <select
            name="diameter"
            required
            className="w-28 border-gray-200 h-12 border-2 py-2 px-2"
            onChange={handleChange}
            value={inputData["diameter"]}
            defaultValue=""
            required
          >
            <option value="" className=""></option>
            <option value="8">8ml</option>
            <option value="10">10ml</option>
            <option value="8-10">8-10ml</option>
            <option value="12">12ml</option>
            <option value="15">15ml</option>
            <option value="22">22ml</option>
            <option value="28">28ml</option>
            <option value="35">35ml</option>
            <option value="42">42ml</option>
            <option value="54">54ml</option>
            <option value="76">76ml</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="name" className="block  mb-4 ">
            ضفط الماسورة
          </label>
          <select
            name="pressure"
            required
            className="w-28 border-gray-200 h-12  border-2 py-2 px-2"
            onChange={handleChange}
            value={inputData["pressure"]}
            defaultValue=""
          >
            <option value="" className=""></option>

            <option value="8" className="w-full">
              8high
            </option>
            <option value="10">10high</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="location" className="block mb-4 ">
            المكان
          </label>
          <input
            className="border-gray-200 h-12 border-2 py-2 px-2"
            type="text"
            name="location"
            required
            value={inputData["location"]}
            id="location"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="number" className="block  mb-4 ">
            الكمية
          </label>
          <input
            className="border-gray-200 h-12 border-2 py-2 px-2"
            type="number"
            name="quantity"
            required
            value={inputData["quantity"]}
            id="number"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AddItem;
