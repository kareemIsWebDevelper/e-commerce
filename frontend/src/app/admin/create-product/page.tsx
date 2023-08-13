"use client";
import { Container } from "@mui/material";
import { ProductForm } from "../components/ProductForm";

export default function CreateProduct() {
   
    return (    
        <Container component="main" maxWidth="xs">
            <ProductForm />
        </Container>
    )
}