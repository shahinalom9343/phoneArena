import React from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await axiosPublic.get("/products");
      return result.data;
    },
  });
  return (
    <div>
      <div className="p-4 md:p-8 font-bold text-3xl text-center">
        Products : {products.length}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
