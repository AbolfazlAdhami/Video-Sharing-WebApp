import React, { useState } from "react";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchFeed/${search}`);
    setSearch("");
  };

  return (
    <Paper component={"form"} elevation={0} sx={{ borderRadius: 20, border: "1px solid #e3e3e3", pl: 1, boxShadow: "none", mr: { sm: 5 } }} onSubmit={handelSubmit}>
      <input type="text" className="search-bar" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
      <IconButton type="submit" aria-label="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
