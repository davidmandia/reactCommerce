import React from "react";
import axios from 'axios';
import ProductItem from './ProductItem';
import { useQuery } from "react-query";
import LoadingSpinner from "./LoadingSpinner";


//no useeffect setState but usequery makes the request but serve all data in the cache
export default function ProductList() {
  const { data: products, isLoading } = useQuery('Products', () => axios('/api/products')
                            .then((res) => res.data.products))

  // React.useEffect(() => {
  //   axios.get('/api/products')
  //   .then(res => res.data.products)
  //   .then(products => setProducts(products))
  // }, [])
  // console.log(products);

  if(isLoading) return <LoadingSpinner />

  return (<div>{products.map(product => (
    <ProductItem key={product.id} product={product} />
  ))}
  </div>);
}


