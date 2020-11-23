import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import UserFavorites from './UserFavorites';
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
    <MobileLayout title={'My favorites'} productPage={false}>
      <MobileContainer>
        <UserFavorites />
      </MobileContainer>
    </MobileLayout>
  );
};

export default Products;
