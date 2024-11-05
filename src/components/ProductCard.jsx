import '../styles/ProductCard.css'
import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    
     <div className="product-image-wrapper">
    <img src={product.product.image.url} alt={product.product.image.attributes.imageAltText} className="product-image" />
    {product.product.attributes.isBestSeller && <div className='best-seller'>BEST SELLER</div>}
    </div>
    <h3 className="product-name">{product.product.productName}</h3>
    <p className="product-price">Price: £{product.product.price.priceIncTax}</p>
  </div>
);

export default ProductCard;