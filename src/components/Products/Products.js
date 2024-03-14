import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader.js';
import './Products.css';

const Products = ({ isUserLoggedIn, isLoading, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const result = await response.json();
        if (result && typeof result === 'object') {
          const flattenedProducts = Object.values(result).flat();
          setProducts(flattenedProducts);
        } else {
          console.error("Invalid data format for products:", result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setErrorMessage('Please enter the text you want to search.');
      setFilteredProducts([]);
      return; 
    } else {
      setErrorMessage('');
    }

    if (searchQuery.toLowerCase() === "garden" || searchQuery.toLowerCase() === "room" || searchQuery.toLowerCase() === "living room" || searchQuery.toLowerCase() === "kitchen") {
      const filtered = products.filter(product =>
        product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      // Filter products based on category
      const filtered = products.filter(product =>
        product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filtered.length === 0) {
        setErrorMessage('No products found.');
      } else {
        setErrorMessage('');
      }

      setFilteredProducts(filtered);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="content">
      {isLoading ? (
        <Loader component="Products" />
      ) : (
        <>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}

          <div className="products">
          {(filteredProducts.length > 0 ? filteredProducts : errorMessage ? [] : products).map(product => (
    <div key={product.id}>
                <img src={product.image} alt={product.name} />
                <p style={{ textAlign: 'center' }}>{product.name}</p>
                <p style={{ textAlign: 'center' }}>{product.price}</p>
                <p>{product.desc}</p>
                {isUserLoggedIn && (
                  <button onClick={() => addToCart(product.name,product.image)}>Add to Cart</button>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
