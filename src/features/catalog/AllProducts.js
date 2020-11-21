import { useState } from 'react';
import { useSelector } from 'react-redux';
// Components
import Product from './Product';
import SliderPagination from './SliderPagination';
// Styles
import { ProductsContainer } from './Globals.styled';

const AllProducts = () => {
  // State
  const [current, setCurrent] = useState(1);
  const products = useSelector((state) => state.catalog.products);
  const productsItems = [...products].map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <ProductsContainer>
      <div className="slider full">{productsItems}</div>

      <SliderPagination total={products.length} current={current} />
    </ProductsContainer>
  );
};

export default AllProducts;
