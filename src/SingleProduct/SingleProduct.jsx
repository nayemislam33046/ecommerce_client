import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Dynaminimage from "./dynmicimage";
import { ThemeContext } from "../Context/Context";
const SingleProduct = () => {
  const { id } = useParams();
  const [getData, setGetData] = useState([]);
  const {
    state: { product },
    dispatch,
  } = useContext(ThemeContext);
  useEffect(() => {
    axios
      .get("https://ecommerce-server-one-lake.vercel.app/singledata/" + id)
      .then((res) => {
        setGetData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {getData.map((data) => {
        const thePrice = data.price;
        const Preprices = data?.preprice;
        const formattedNumber = thePrice.toLocaleString("en-US");
        const FormatePreprice = Preprices?.toLocaleString("en-US");
        return (
          <div key={data.id}>
            <div className="flex items-center m-5">
              <Link to={"/"} className="text-blue-500">
                /Home
              </Link>
              <p>/singleproduct</p>
            </div>
            <div className="m-10 flex flex-col md:flex-row md:justify-evenly justify-start md:items-start md:gap-10">
              <div>
                <Dynaminimage imgs={data.images} />
              </div>
              <div className="mt-10 md:w-[400px]">
                <p className="text-2xl font-bold my-5">Name : {data.name}</p>
                <p className="my-2 text-gray-700 font-bold">
                  category : {data.category}
                </p>
                <p className="my-3">
                  <span className="font-bold">description :</span>{" "}
                  {data.description}
                </p>
                <div className="flex items-center gap-4">
                  <p className="text-orange-500 text-2xl">
                    <span className="font-bold">Price :</span> {formattedNumber}{" "}
                    TK
                  </p>
                  <del className="text-gray-600">
                    {FormatePreprice} {data.preprice && "TK"}
                  </del>
                </div>
                {product.some((cart) => cart.id === data.id) ? (
                  <button
                    className="bg-red-500 px-3 py-1 text-white rounded mt-2"
                    onClick={() =>
                      dispatch({ type: "REMOVETOCART", payload: data.id })
                    }
                  >
                    Remove To Cart
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 px-3 py-1 text-white rounded mt-2"
                    onClick={() =>
                      dispatch({ type: "ADDTOCART", payload: data })
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
  );
};
export default SingleProduct;