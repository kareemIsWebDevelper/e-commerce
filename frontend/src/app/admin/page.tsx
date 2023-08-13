import {
  Container,
  Typography,
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import Link from "next/link";
import category from "@/assets/images/category.svg";
import product from "@/assets/images/product.svg";
import user from "@/assets/images/user.svg";
import order from "@/assets/images/order.svg";
import Image from "next/image";

const Admin = () => {
  return (
    <main>
      <Container component="main">
        <Typography
          variant="h3"
          color="initial"
          align="center"
          className="font-extrabold mb-8 text-4xl md:text-6xl">
          Welcome To <br /> Your Dashboard
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          {adminRoutes.map((route) => (
            <Grid item key={route.id}>
              <Card className="w-72 grid place-items-center shadow-xl">
                <CardHeader title={route.title} align="center" />
                <CardMedia>
                  <Image src={route.img} alt="image" className="w-28 h-28" />
                </CardMedia>
                <CardActions>
                  <Link
                    key={route.id}
                    href={route.form}
                    className={
                      route.id === 3 || route.id === 4 ? "hidden" : "block"
                    }>
                    <Button size="large" variant="contained" color="primary">
                      New One
                    </Button>
                  </Link>
                  <Link href={route.path}>
                    <Button size="large" variant="contained" color="primary">
                      See All
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Admin;

const adminRoutes = [
  {
    id: 1,
    title: "Products",
    path: "product",
    form: "admin/create-product",
    img: product,
  },
  {
    id: 2,
    title: "Categories",
    path: "category",
    form: "admin/create-category",
    img: category,
  },
  { id: 3, title: "Orders", path: "order", form: "", img: order },
  { id: 4, title: "Users", path: "user", form: "", img: user },
];
