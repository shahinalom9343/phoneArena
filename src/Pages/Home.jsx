import React, { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [product, setProduct] = useState([]);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const [productsPerPage, setProductsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await axiosPublic.get("/products");
      return result.data;
    },
  });

  const numberofPages = Math.ceil(products.length / productsPerPage);
  const pages = [...Array(numberofPages).keys()];

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?pages=${currentPage}&size=${productsPerPage}&search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [currentPage, productsPerPage, search, asc]);

  const handleProductsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setProductsPerPage(value);
    setCurrentPage(0);
  };
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };
  return (
    <div>
      <div className=" py-4 flex gap-8">
        <div>
          <span className="font-semibold text-green-400 ml-1">
            Search the Products:
          </span>
          <form onSubmit={handleSearch}>
            <label htmlFor="">
              <input
                type="text"
                name="search"
                className="py-3 rounded-lg px-1 border-2 border-amber-600"
                placeholder="Search in PhoneArena"
              />
              <input
                type="submit"
                value="search"
                className="btn bg-amber-600 text-white"
              />
            </label>
          </form>
        </div>
        <div>
          <span className="font-semibold text-green-400 ml-1">Sort By ::</span>
          <button onClick={() => setAsc(!asc)} className="btn btn-primary">
            {asc ? "Price: High to Low" : "Price: Low to High"}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {product.map((singleProduct) => (
          <div
            key={singleProduct._id}
            className="card bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img
                src={singleProduct.ProductImage}
                alt={singleProduct.ProductName}
                className="h-64 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {singleProduct.ProductName}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{singleProduct.Description}</p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">
                  Price: {singleProduct.Price}$
                </div>
                <div className="badge badge-outline">
                  Category: {singleProduct.Category}
                </div>
              </div>
              <div>
                <div className="font-semibold">
                  <span className="text-orange-500">
                    Product Creation Date:{" "}
                  </span>
                  {singleProduct.ProductCreationDateTime}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-4 flex justify-center items-center">
        <p>
          <button className="btn mr-1" onClick={handlePrevious}>
            Previous
          </button>
        </p>
        {pages.map((page) => (
          <button
            className={
              (currentPage === page && "btn bg-purple-800 text-white") ||
              "btn mr-1"
            }
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}

        <p>
          <button className="btn ml-1" onClick={handleNext}>
            Next
          </button>
        </p>
        <label htmlFor="" className="ml-2">
          Product Per Page:
          <select
            name=""
            value={productsPerPage}
            onChange={handleProductsPerPage}
            id=""
            className="btn bg-orange-400 text-white"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Home;
