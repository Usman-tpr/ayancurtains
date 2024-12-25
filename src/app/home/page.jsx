'use client';
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Product from "../Components/Product";

// Ensure this component is rendered client-side
export default function Home() {

  return (
    <>
      <Hero />
      <Categories />
      <div className="mt-20 text-gray-800 text-2xl tracking-widest   text-center font-medium">
        All Products
      </div>
      <div className="bg-gray-700 w-[15%] h-[1px] mt-2 mx-auto"></div>
      <div className="mx-auto sm:mx-20 flex flex-wrap justify-center sm:justify-between items-center space-y-14  mt-10">
        {
          ["1", "2", "3", '4', '5', '6', '7', '8', '9', '10'].map((item) => (
            <Product item={item}/>
          ))
        }
      </div>
      <Footer />
    </>
  );
}
