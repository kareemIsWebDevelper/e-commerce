import {useState } from "react";
import { Button, Card, FormGroup, Input, TextField, Typography } from "@mui/material";

export const ProductForm = () => {
    const [productName, setProductName] = useState<string>('');
    const [productDescription, setProductDescription] = useState<string>('');
    const [productImage, setProductImage] = useState<File | null>(null);

    const handleChange = (setState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    };

    const handleProductImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setProductImage(event.target.files[0]);
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(productName);
        console.log(productDescription);
        console.log(productImage);
    }

    return (
        <Card component="form" onSubmit={handleSubmit} sx={{p: 2, mt: 8}}>
            <Typography variant="h4" component="legend" align="center" sx={{mb: 4}} className="font-extrabold">
                New Product
            </Typography>
            <FormGroup sx={{gap: 3, mb: 3}}>
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    label="Product Name"
                    autoComplete="productName"
                    value={productName}
                    onChange={handleChange(setProductName)}
                />
                <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    label="Product Description"
                    autoComplete="productDescription"
                    value={productDescription}
                    onChange={handleChange(setProductDescription)}
                />
                <Input 
                    type="file"
                    inputProps={{accept: "image/*"}}
                    onChange={handleProductImage}
                />
            </FormGroup>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Save
            </Button>
        </Card>
    );
};