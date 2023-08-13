"use client";
import { Box, Button, Card, Grid, TextField, Typography, Input } from "@mui/material";
import { useState } from "react";

export const CategoryForm = () => {
    const [categoryName, setCategoryName] = useState<string>('');
    const [categoryDescription, setCategoryDescription] = useState<string>('');
    const [categoryImage, setCategoryImage] = useState<File | null>(null);

    const handleChange = (setState) => (event) => {
        setState(event.target.value);
    };

    const handleFileSelect = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setCategoryImage(event.target.files[0]);
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(categoryName);
        console.log(categoryDescription);
        console.log(categoryImage);
    }

    return (
        <Card component="form" onSubmit={handleSubmit} sx={{mt: 8}}>
            <Box p={4}>
                <Grid container spacing={2}>
                    <Typography variant="h4" component="h4" align="center" className="font-extrabold w-full">
                        New Category
                    </Typography>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            label="Category Name"
                            autoComplete="categoryName"
                            value={categoryName}
                            onChange={handleChange(setCategoryName)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            label="Category Description"
                            autoComplete="categoryDescription"
                            value={categoryDescription}
                            onChange={handleChange(setCategoryDescription)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input 
                            type="file"
                            onChange={handleFileSelect}
                            inputProps={{ accept: 'image/*' }}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt: 2}}>
                    Save
                </Button>
            </Box>
        </Card>
    )
}