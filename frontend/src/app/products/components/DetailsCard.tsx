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

export const DetailsCard = () => {
  return (
    <>
      <Grid item justifyContent="center">
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
                className="line-through"
              >
                ${product.price}
              </Typography>
            </Stack>
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
              {product.name}
            </Typography>
          </CardContent>
          <CardActions className="-mt-4">
            <Link href={`products/${product.id}`}>
              <Button variant="text" color="primary">
                See more
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

const product = {
  id: 1,
  name: "Samsung",
  price: 20.99,
  discount: 19.99,
};

