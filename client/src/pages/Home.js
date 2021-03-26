import ProductList from "../components/ProductList";
import React from "react";
 

export default function Home() {
  
  return (
    <section className="text-gray-400  body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray mb-4">
            E-Commerce App with Complete Shopping Cart
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
            A full-stack ecommerce app made with a Create-React-App client and
            Node API, using Stripe to process payments.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap ">
          <ProductList />
        </div>
      </div>
    </section>
  );
}
