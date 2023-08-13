"use client";
import { Container, Grid } from "@mui/material";
import { ProductCard } from "./components/ProductCard";

export default function Products() {
  return (
    <Container component="main">
      <ProductCard />
    </Container>
  );
}
