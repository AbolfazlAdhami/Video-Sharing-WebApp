import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../util/conestants";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <Stack display={"flex"} p={1} bgcolor={"#2f3640"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <Link to="/">
        <img src={logo} alt="Logo" height={45} />
      </Link>
      <SearchInput />
    </Stack>
  );
};

export default Navbar;
