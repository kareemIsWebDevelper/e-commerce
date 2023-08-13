import {
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import image from "@/assets/images/hero1.jpeg";

export const ProductCard = () => {
  return (
    <Grid container spacing={5} justifyContent="center" sx={{ pt: 2 }}>
      {products.map((product) => (
        <Grid item justifyContent="center" key={product.id}>
          <Card>
            <CardContent>
              <Image
                src={image}
                alt="product"
                width={275}
                height={200}
                className="mb-4"
              />
              <Stack direction="row" spacing={2}>
                <Typography variant="body1" fontWeight="bold" fontSize={22}>
                  ${product.discount}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "gray" }}
                  className="line-through">
                  ${product.price}
                </Typography>
              </Stack>
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                {product.name}
              </Typography>
            </CardContent>
            <CardActions className="-mt-4">
              <Link href={`/products/${product.id}`}>
                <Button variant="text" color="primary" className="capitalize">
                  See more
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const products = [
  { id: 1, name: "Samsung Tv", price: 20.99, discount: 19.99 },
  { id: 2, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 3, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 4, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 5, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 6, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 7, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 8, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 9, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 10, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 11, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 12, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 13, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 14, name: "Samsung", price: 20.99, discount: 19.99 },
  { id: 15, name: "Samsung", price: 20.99, discount: 19.99 },
];
