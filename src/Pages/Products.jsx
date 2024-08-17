import React from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
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
        All Products : {products.length}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                className="h-64 w-11/12"
                src={product.ProductImage}
                alt={product.ProductName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.ProductName}
                <div className="badge badge-secondary">{product.Ratings}</div>
              </h2>
              <p>{product.Description}</p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">
                  Price: {product.Price}$
                </div>
                <div className="badge badge-outline">
                  Category: {product.Category}
                </div>
              </div>
              <div>
                <div className="font-semibold">
                  <span className="text-orange-500">
                    Product Creation Date:{" "}
                  </span>
                  {product.ProductCreationDateTime}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
