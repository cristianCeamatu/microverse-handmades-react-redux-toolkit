import { useState } from 'react';
import { useSelector } from 'react-redux';
// Components
import Loading from '../Loading';
import Error from '../Error';
import Product from './Product';
import SliderPagination from './SliderPagination';
// Styles
import { ProductsContainer } from './Globals.styled';

const AllProducts = () => {
  // State
  const loading = useSelector((state) => state.catalog.loaders.loadingProducts);
  const error = useSelector((state) => state.catalog.errors.loadingProducts);
  const products = useSelector((state) => state.catalog.products);
  const [current, setCurrent] = useState(1);

  // Utils
  const productsItems = [...products].map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <ProductsContainer>
      <div className="slider full">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error errors={error} />
        ) : (
          productsItems
        )}
      </div>

      <SliderPagination total={products.length} current={current} />
    </ProductsContainer>
  );
};

export default AllProducts;
