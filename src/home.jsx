import { useState, useEffect } from "react";
import HeroImage from "./component/heroImage";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=3");
        const data = await res.json();
        setProducts(data.products);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch products.");
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <h1>Loading Data ...</h1>;

  if (error) return <h1 className="text-red-500">{error}</h1>;

  return (
    <>
      <div className="md:flex md:justify-between flex flex-col justify-center items-center py-10 w-full h-100 bg-gray-500 space-y-5">
        <div className="md:w-1/2  ">
          <HeroImage
            src={products[0]?.images[0]} // Dinamis dengan produk pertama
            customStyle={"w-[90vw] h-[500px]"}
            customText={"absolute inset-0 self-end ml-10"}
          />
        </div>

        <div className="md:flex-col md:items-end">
          {products.slice(1).map((product, index) => (
            <HeroImage
              key={product.id}
              src={product.images[0]}
              customStyle={`w-[90vw] h-[300px] ${index > 0 ? "mt-10" : ""}`}
              customText={"absolute inset-0 self-end ml-10"}
            />
          ))}
        </div>
      </div>

      <div
        className="h-auto w-full  bg-slate-600 py-5 space-x-5 space-y-5"
        id="Men"
      >
        <h1 className="font-Poppins font-extrabold text-2xl indent-8">
          Men Product
        </h1>
        <div className="flex space-x-5">
          {products.map((produk) => (
            <div
              className="w-48 h-48 bg-gradient-to-br from-gray-50  to-gray-500 rounded-lg shadow-md shadow-gray-500 px-2 flex items-stretch flex-col justify-between "
              key={produk.id}
            >
              <img
                src={produk.images[0]}
                className="w-auto h-28 object-cover self-start"
                alt={produk.title}
              />
              <p className="text-xs  ">{produk.title}</p>
              <p className="my-2 text-center rounded-lg ">{produk.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
