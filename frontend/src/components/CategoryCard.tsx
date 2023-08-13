import {
  Grid,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { categories } from "./home";
import { CategoryCardSkeleton } from "@/utils/CategoryCardSkeleton";

export const CategoryCard = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <CategoryCardSkeleton />
      ) : (
        categories.map((category) => (
          <Grid
            key={category.id}
            item
            justifyContent="center"
            className="w-[375px] flex-wrap"
            id="categories"
          >
            <Card className="shadow-xl">
              <Box display="grid" justifyContent="center">
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h1"
                    className="font-extrabold mb-2">
                    {category.name}
                  </Typography>
                  <CardMedia>
                    <Image
                      src={category.image}
                      alt="category"
                      className="w-[290px]"
                      height={200}
                    />
                  </CardMedia>
                </CardContent>
                <CardActions>
                  <Link href="/category/1">
                    <Button variant="text" color="primary">
                      Shop Now
                    </Button>
                  </Link>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))
      )}
    </>
  );
};
