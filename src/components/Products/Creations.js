import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import UserProducts from './UserProducts';
import MobileLayout from '../Layout/MobileLayout';
// Actions
import { getProducts } from '../../features/catalog/catalogSlice';
// Styles
import { MobileContainer } from '../Styles.styled';

const Products = () => {
  // State
  const products = useSelector((state) => state.catalog.products);
  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) dispatch(getProducts());
  }, [dispatch, products]);

  return (
    <MobileLayout title={'My creations'} productPage={false}>
      <MobileContainer>
        <UserProducts />
      </MobileContainer>
    </MobileLayout>
  );
};

export default Products;
