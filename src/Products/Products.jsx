import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/Context";
import Search from "../Search/Search";
const Products = () => {
  const [getData, setGetData] = useState([]);
  const [items, setItems] = useState([]);
  const {
    state: { product },
    dispatch,
  } = useContext(ThemeContext);
  useEffect(() => {
    axios
      .get("https://ecommerce-server-one-lake.vercel.app/product")
      .then((res) => {
        setGetData(res.data);
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const filterFood = (curFood) => {
    if (curFood === "ALL") {
      setItems(getData);
    } else {
      const updateFood = getData.filter(
        (product) => product.category === curFood
      );
      setItems(updateFood);
    }
  };
  const SearchData = (search) => {
    const value = search.toLowerCase();
    const foodData = getData.filter((foodnames) => {
      const foodName = foodnames.name.toLowerCase();
      return foodName.startsWith(value);
    });
    setItems(foodData);
  };
  return (
    <div className="mt-16">
      <p className="text-center text-2xl font-bold font-[cursive] text-orange-400">
        Shop Here
      </p>
      <Search getSearch={SearchData} />
      <div className="my-3 flex flex-wrap gap-1 items-center justify-center mt-10">
        <button
          className="bg-orange-500 shadow-lg text-sm py-1 mx-2 px-2 rounded text-white"
          onClick={() => filterFood("ALL")}
        >
          ALL
        </button>
        <button
          className="bg-orange-500 shadow-lg text-sm py-1 mx-2 px-2 rounded text-white"
          onClick={() => filterFood("tech")}
        >
          Tech
        </button>
        <button
          className="bg-orange-500 shadow-lg text-sm py-1 mx-2 px-2 rounded text-white"
          onClick={() => filterFood("t-shirt")}
        >
          T-Shirt
        </button>
        <button
          className="bg-orange-500 shadow-lg text-sm py-1 mx-2 px-2 rounded text-white"
          onClick={() => filterFood("shoes")}
        >
          Shoes
        </button>
        <button
          className="bg-orange-500 shadow-lg text-sm py-1 mx-2 px-2 rounded text-white"
          onClick={() => filterFood("jacket")}
        >
          Jacket
        </button>
        <button
          className="bg-orange-500 shadow-lg text-sm py-1 mx-2 px-2 rounded text-white"
          onClick={() => filterFood("shirt")}
        >
          Shirt
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 lg:px-32 md:px-16 py-5 gap-5 mt-10">
          {items?.map((mydata) => {
            const number = mydata.price;
            const preprice = mydata?.preprice;
            const formattedNumber = number.toLocaleString("en-US");
            const formatPreprice = preprice?.toLocaleString("en-US");
            const myname = mydata.name;
            const datas = myname.substring(0, 15);
            return (
              <div key={mydata.id}>
                <div className="lg:w-[250px] w-[300px] border border-orange-500 rounded p-3">
                  <Link to={`/singleproduct/${mydata.id}`}>
                    <img
                      src={mydata?.images[0]}
                      alt={mydata.name}
                      className="h-40 block mx-auto"
                    />
                    <p className="text-2xl mt-4">
                      {datas.length >= 15 ? datas + "..." : datas}
                    </p>
                    <p className="text-sm mt-2">Category: {mydata.category}</p>
                    <div className="flex items-center gap-2">
                      <p className="mt-2 font-bold text-orange-500">
                        Price: {formattedNumber} TK
                      </p>
                      <del className="text-[12px] mt-2 text-gray-500">
                        {formatPreprice} {mydata.preprice && "TK"}
                      </del>
                    </div>
                  </Link>
                  <div className="z-50">
                    {product.some((cart) => cart.id === mydata.id) ? (
                      <button
                        className="bg-red-500 px-3 py-1 text-white rounded mt-2 w-full"
                        onClick={() =>
                          dispatch({ type: "REMOVETOCART", payload: mydata.id })
                        }
                      >
                        Remove To Cart
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 px-3 py-1 text-white rounded mt-2 w-full"
                        onClick={() =>
                          dispatch({ type: "ADDTOCART", payload: mydata })
                        }
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Products;
