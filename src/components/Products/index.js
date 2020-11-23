import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import AllProducts from './AllProducts';
import MobileLayout from '../Layout/MobileLayout';
// Actions
import { getProducts } from '../../features/catalog/catalogSlice';
// Styles
import { MobileContainer } from '../Styles.styled';

const Products = () => {
  // State
  const products = useSelector(state => state.catalog.products);
  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) dispatch(getProducts());
  }, [dispatch, products]);

  return (
    <MobileLayout title="Crafts" productPage={false}>
      <MobileContainer>
        <AllProducts />
      </MobileContainer>
    </MobileLayout>
  );
};

export default Products;
