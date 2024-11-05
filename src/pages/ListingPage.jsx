import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SortDropdown from '../components/SortDropdown';
import { fetchProducts } from '../services/api';
import FilterPanel from '../components/FilterPanel';

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const pageSize = 10;
        const data = await fetchProducts({
          query: 'toilets',
          size: pageSize,
          sort,
        });
        setProducts(data.products || []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [sort]);


  return (
    <div className="listing-page">
      <div className='filter-wrapper'>
      <FilterPanel />
      </div>
     
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='sort-product-wrapper'>
        <SortDropdown selectedSort={sort} onChangeSort={setSort} />
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={{product}} />
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default ListingPage;
