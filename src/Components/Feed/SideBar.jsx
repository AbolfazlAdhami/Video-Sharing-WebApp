import React from "react";

import { categories } from "../../util/conestants";
import { Stack } from "@mui/material";

function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack direction="row" sx={{ flexDirection: { md: "column" }, overflowY: "auto", height: { sx: "auto", md: "90vh" } }}>
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span style={{ color: category.name === selectedCategory ? "#fff" : "#fc1503", marginRight: "15px" }}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
