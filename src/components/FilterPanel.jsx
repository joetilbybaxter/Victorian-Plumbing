import React from 'react';
import Accordion from './Accordion'

const FilterPanel = ({ onApplyFilters }) => {

    let data = [
        {
        title: "Price", 
        content: ``
      }, {
        title: "Style", 
        content: ``
      },{
        title: "Flush Type", 
        content: ``
      }
    ]
 

  return (
    <div className="filter-panel">
      <h2>Filter By</h2>
     
      <div>Price:</div>
      <Accordion data={data}/>
    </div>
  );
};

export default FilterPanel;