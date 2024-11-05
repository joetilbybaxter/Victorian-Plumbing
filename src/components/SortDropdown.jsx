import React from 'react';

const SortDropdown = ({ selectedSort, onChangeSort }) => (
  <select className='sort-panel' value={selectedSort} onChange={e => onChangeSort(e.target.value)}>
    <option value="1">Recommended</option>
    <option value="2">Price: Low to High</option>
    <option value="3">Price: High to Low</option>
    <option value="4">Largest Discount</option>
  </select>
);

export default SortDropdown;
