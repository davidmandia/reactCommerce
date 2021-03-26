import React from 'react';
import { Link } from 'react-router-dom';
import formatProductPrice from '../utils/formatProductPrice';


function ProductItem({product}) {
    const price = formatProductPrice(product)
    return (
      <div className=" col-md-4 col-sm-6">
        <div className="card">
        <Link to={`/${product.id}`}>
          <img
            className="card-img-top img-fluid"
            src={product.image}
            alt={product.name}
          />
          </Link>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <h6 className="card-subtitle">{product.category}</h6>
    <p className="card-text">{product.description}.</p>
    <div className="card-link"><div className="flex items-center flex-wrap ">
            <Link to={`/${product.id}`}>
              <span className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                See More
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg> */}
              </span>
              </Link>
              
            </div>
            <span className="text-white-500 font-bold">
                {price}
              </span>    
    
  </div>
</div>
</div>
</div>        
          
          
      
    );
  }

export default ProductItem
