import React, { useState } from "react"; // Import useState
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected category

  // Function to handle category change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter items based on the selected category
  const filteredItems = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
