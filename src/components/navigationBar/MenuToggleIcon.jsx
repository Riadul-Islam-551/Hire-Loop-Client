"use client";

import React, { useState } from "react";
import { Xmark } from "@gravity-ui/icons";
import { Bars } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Navlinks from "./Navlinks";

const MenuToggleIcon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="lg:hidden relative">
      <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <Xmark /> : <Bars />}
      </Button>
      <div
        className={`absolute top-14 ${isMenuOpen ? "block" : "hidden"} -right-10 min-w-75 bg-white dark:bg-gray-800 rounded shadow-lg`}
      >
        <Navlinks></Navlinks>
      </div>
    </div>
  );
};

export default MenuToggleIcon;
