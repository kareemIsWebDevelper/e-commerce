import type { Metadata } from "next";
import NavBar from "@/components/header/Navbar";
import { Footer } from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ThemeProvider, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { useState } from "react";


export {
    Metadata,
    NavBar,
    Footer,
    Provider,
    store,
    ThemeProvider,
    CacheProvider,
    createTheme,
    createCache,
    LoadingSpinner,
    useState,
}