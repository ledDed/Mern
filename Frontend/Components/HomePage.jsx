import React, { useEffect } from 'react'
import { useProductStore } from "../Store/product"
import MediaCard from './MediaCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // or Grid2 in newer MUI versions
import Typography from '@mui/material/Typography';

const HomePage = () => {
    // 1. Select the function AND the state from the store
    const { getProducts, products } = useProductStore();

    // 2. Fetch data ONLY when the component mounts
    useEffect(() => {
        getProducts();
    }, [getProducts]);

    // 3. Handle empty state
    if (!products) {
        return <div>Loading...</div>
    }

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
                Current Products
            </Typography>

            <Grid container spacing={4}>
                {/* 4. Loop through the products array */}
                {products.map((product) => (
                    <Grid item key={product._id} xs={12} sm={6} md={4}>
                        {/* Pass the individual product data to the card */}
                        <MediaCard product={product} />
                    </Grid>
                ))}

                {products.length === 0 && (
                    <Typography>No products found.</Typography>
                )}
            </Grid>
        </Container>
    )
}

export default HomePage