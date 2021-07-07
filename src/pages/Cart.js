import React, { useState } from "react";
import axios from "axios";
import PrintComponent from "../components/PrintComponent";
import Table from "./../components/Table";
import uuid from "react-uuid";
const Cart = ({ data, orders, setOrders, setData, types, setTypes }) => {
  const [cart, setCart] = useState({ name: "", phoneNumber: "" });
  const [toggle, setToggle] = useState(false);
  const handleChange = (e) => {
    setCart({ ...cart, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    let date = new Date();
    let formatedDate = `${
      date.getFullYear() +
      "-" +
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "-" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate())
    }`;

    let orderDate = { orderDate: formatedDate };
    setOrders({ ...cart, ...orderDate, ...data });

    const postedData = {
      name: orders.name,
      phoneNumber: parseInt(orders.phoneNumber),
      orderDate: orders.orderDate,
      orders: [
        ...data.orders.map((order) => {
          return {
            jsonOrder: {
              name: order.name,
              diameter: parseInt(order.diameter),
              pressure: order.pressure,
              type: order.type,
            },
            quantity: parseInt(order.quantity),
          };
        }),
      ],
    };
    setToggle(true);
    axios
      .post("http://localhost:1010/api/customer", postedData)
      .then((res) => {
        setData({ orders: [] });
        setCart({ name: "", phoneNumber: "" });
        setToggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-span-4 p-4 rounded-md">
      <div className=" border-b-2 border-gray-300 pb-8">
        <h2 className="font-bold mb-4">معلومات العميل</h2>
        <div className="inline-block ml-8">
          <label htmlFor="phoneno" className="block mb-2">
            رقم الهاتف
          </label>
          <input
            type="number"
            className="border-2 border-gray-400 rounded-xl text-right py-2 px-3"
            name="phoneNumber"
            id="phoneno"
            onChange={handleChange}
          />
        </div>
        <div className="inline-block">
          <label htmlFor="name" className="block mb-2">
            اسم العميل
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-xl text-right py-2 px-3"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>
      </div>
      {types?.Pipe ? (
        <div className="mt-8 space-y-8" key={uuid()}>
          {Object.keys(types).map((key) => {
            return (
              <Table
                cartData={data.orders}
                setData={setData}
                title={key}
                data={types[key]}
                key={uuid()}
                types={types}
                setTypes={setTypes}
              />
            );
          })}
        </div>
      ) : (
        <h2 className="text-center my-48">سلة المشتريات فارغة</h2>
      )}

      <h2
        id="print-button"
        className="cursor-pointer text-center py-3 px-6 rounded-md font-bold text-lg capitalize text-white bg-blue-600 hover:bg-blue-500"
        onClick={handleClick}
      >
        طباعة الفاتورة
      </h2>
      {toggle && <PrintComponent className="hidden" data={orders} />}
    </div>
  );
};

export default Cart;
