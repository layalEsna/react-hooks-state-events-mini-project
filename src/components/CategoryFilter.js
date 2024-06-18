// import React from "react";

// function CategoryFilter() {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//     </div>
//   );
// }

//export default CategoryFilter;ORIGINAL CODE


import React from "react";
//import { CATEGORIES } from "../data";

function CategoryFilter({categories, handleFilter, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => (
        <button key={category}
        className={category === selectedCategory? 'selected': ''}
        onClick={()=> handleFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
