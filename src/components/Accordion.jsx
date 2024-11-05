import React, { useState, useEffect } from 'react';
import '../styles/Accordion.css';
import { fetchProducts } from '../services/api';

const Accordion = ({ data, query, pageNumber, size, sort }) => {
  const [accordionItems, setAccordionItems] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  useEffect(() => {
    const accordion = data.map((item) => ({
      title: item.title,
      content: item.content,
      open: false,
    }));
    setAccordionItems(accordion);
  }, [data]);

  const handleClick = (index) => {
    const newAccordionItems = accordionItems.map((item, i) => {
      if (i === index) {
        return { ...item, open: !item.open };
      }
      return item;
    });
    setAccordionItems(newAccordionItems);
  };

  const handlePriceChange = (range) => {
    setSelectedPriceRanges((prevRanges) => {
      const isSelected = prevRanges.some((r) => r === range);
      if (isSelected) {
        return prevRanges.filter((r) => r !== range);
      } else {
        return [...prevRanges, range];
      }
    });
  };

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const prices = {
        prices: selectedPriceRanges.map((range) => ({
          value: { gte: range[0], lte: range[1] },
        })),
      };
      await fetchProducts({ query, pageNumber, size, sort, prices });
    };
    if (selectedPriceRanges.length > 0) {
      fetchFilteredProducts();
    }
  }, [selectedPriceRanges, query, pageNumber, size, sort]);

  const priceOptions = [
    { label: '£100 - £150', range: [100, 150] },
    { label: '£150 - £200', range: [150, 200] },
    { label: '£200 - £300', range: [200, 300] },
    { label: '£300 - £400', range: [300, 400] },
    { label: '£400 - £500', range: [400, 500] },
    { label: '£500 - £600', range: [500, 600] },
  ];

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <div key={index}>
          <div className="title" onClick={() => handleClick(index)}>
            <div className="arrow-wrapper"></div>
            <span className="title-text">{item.title}</span>
          </div>
          <div className={item.open ? 'content content-open' : 'content'}>
            <div className={item.open ? 'content-text content-text-open' : 'content-text'}>
              {item.title === "Price" && (
                <div className="price-filter-wrapper">
                  {priceOptions.map((option, idx) => (
                    <label key={idx}>
                      <input
                        type="checkbox"
                        checked={selectedPriceRanges.some(
                          (range) => range[0] === option.range[0] && range[1] === option.range[1]
                        )}
                        onChange={() => handlePriceChange(option.range)}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
