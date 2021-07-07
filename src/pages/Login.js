import React, { useState } from "react";
import { useLocation } from "react-router";

const Login = ({ setUser }) => {
  const [inputData, setInputData] = useState({});
  let location = useLocation();
  const [alert, setAlert] = useState();
  const [adminData, setAdminData] = useState({
    email: "ex@foo.com",
    password: "spider",
  });
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputData.email === adminData.email &&
      inputData.password === adminData.password
    ) {
      setUser({ name: "foo brand", email: "ex@foo.com", password: "spider" });
      location.pathname = "/home";
    } else {
      setAlert("password or email is wrong");
    }
  };
  return (
    <div className=" col-span-5 h-screen">
      <div className="mx-auto max-w-md space-y-4 rounded p-4 border-2 border-gray-300 mt-24">
        <h2 className="capitalize text-center font-bold text-blue-500 text-lg">
          matrix
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="">
            <label className="block capitalize mb-2" htmlFor="user-email">
              البريد الإلكتروني
            </label>
            <input
              className="border-2 px-4 py-2 rounded-md border-gray-300 w-full"
              placeholder="matrix@ex.com"
              type="email"
              name="email"
              id="user-email"
              onChange={handleChange}
            />
          </div>

          <div className="">
            <label className="block capitalize mb-2" htmlFor="user-password">
              كلمة السر
            </label>
            <input
              className="border-2  px-4 py-2 rounded-md sborder-gray-300 w-full"
              placeholder="******"
              type="password"
              name="password"
              id="user-password"
              onChange={handleChange}
            />
          </div>
          {alert && <p className="text-red-400">*{alert}</p>}

          <div className="">
            <button className="block text-center mx-auto w-full rounded-md capitalize text-md text-white bg-blue-500 transition hover:bg-blue-400 py-3 px-4">
              تسجبل دحول
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
