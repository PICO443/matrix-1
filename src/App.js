import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router";
import uuid from "react-uuid";
import AsideNav from "./components/AsideNav";
import AuthError from "./components/AuthError";
import Cart from "./pages/Cart";
import AddEquipments from "./pages/AddEquipments";
import Storage from "./pages/Storage";
import Pos from "./pages/Pos";

//pages
import Login from "./pages/Login";

const App = () => {
  const [cartLenght, setCartLength] = useState(0);
  const [storageData, setStorageData] = useState([]);
  const [orders, setOrders] = useState({});
  useEffect(() => {
    axios.get("http://localhost:1010/api/equipment").then((res) => {
      setStorageData(res.data);
    });
  }, []);
  const [user, setUser] = useState();
  const [data, setData] = useState({
    orders: [],
  });
  const [types, setType] = useState();

  useEffect(() => {
    if (data.orders.length > 0) {
      data.orders.map((item) => {
        setType((items) => {
          return {
            ...items,
            [item.type]: data.orders.filter(
              (item2) => item2.type === item.type
            ),
          };
        });
      });
    } else {
      setType();
    }
  }, [data]);

  useEffect(() => {
    let length = 0;
    if (types) {
      Object.keys(types).map((type) => {
        length += types[type].length;
      });
    }
    setCartLength(length);
  }, [data, types]);

  return (
    <div className=" grid gap-4 grid-cols-5  mx-auto px-2 sm:px-3 md:p-4 lg:p-6">
      <Switch>
        <Route path="/" exact>
          <Login setUser={setUser} />
        </Route>
        <Route path="/home" exact>
          {user ? (
            <>
              <AsideNav length={cartLenght} />
              <Pos
                setCart={setData}
                storageData={storageData}
                setStorageData={setStorageData}
              />
            </>
          ) : (
            <AuthError />
          )}
        </Route>
        <Route path="/cart" exact>
          {user ? (
            <>
              <AsideNav length={cartLenght} />
              <Cart
                setCartLength={setCartLength}
                data={data}
                types={types}
                setTypes={setType}
                setData={setData}
                orders={orders}
                setOrders={setOrders}
              />
            </>
          ) : (
            <AuthError />
          )}

          {/* <Table /> */}
        </Route>
        <Route path="/add" exact>
          {user ? (
            <>
              {" "}
              <AsideNav length={cartLenght} />
              <AddEquipments />{" "}
            </>
          ) : (
            <AuthError />
          )}

          {/* <Table /> */}
        </Route>
        <Route path="/storage" exact>
          {user ? (
            <>
              <AsideNav length={cartLenght} />
              <Storage
                storageData={storageData}
                setStorageData={setStorageData}
              />
            </>
          ) : (
            <AuthError />
          )}

          {/* <Table /> */}
        </Route>
        <Route>
          <h2>error 404</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
