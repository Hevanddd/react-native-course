import React from 'react';

import Search from '../../components/Search';
import ProductList from './components/ProductsList';

const ProductListScreen: React.FC = () => {
  return (
    <>
      <Search />
      <ProductList />
    </>
  );
};

export default ProductListScreen;
