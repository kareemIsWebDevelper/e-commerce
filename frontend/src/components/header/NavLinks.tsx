import React from "react";
import {
  Settings as SettingsIcon,
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  Category as CategoryIcon,
  Person as PersonIcon,
  Lock as LockIcon,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

export const NavLinks = () => {
  const { userData } = useSelector((state: RootState) => state.user);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    if (userData && userData.user.isAdmin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  const navLinks = [
    {
      id: 1,
      path: "/admin",
      text: isAdmin ? "Admin" : "",
      icon: <SettingsIcon />,
    },
    { id: 2, path: "/", text: "Home", icon: <HomeIcon /> },
    { id: 3, path: "/cart", text: "Cart", icon: <ShoppingCartIcon /> },
    {
      id: 4,
      path: "/category/electronics",
      text: "Electronics",
      icon: <CategoryIcon />,
    },
    {
      id: 5,
      path: "/category/grocery",
      text: "Grocery",
      icon: <CategoryIcon />,
    },
    {
      id: 6,
      path: "/category/personal-care",
      text: "Personal Care",
      icon: <CategoryIcon />,
    },
    {
      id: 7,
      path: "/category/clothes",
      text: "Clothes",
      icon: <CategoryIcon />,
    },
    { id: 8, path: "/login", text: "Login", icon: <PersonIcon /> },
    { id: 9, path: "/register", text: "Register", icon: <LockIcon /> },
  ];

  return { navLinks, isAdmin };
};