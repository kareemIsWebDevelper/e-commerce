"use client";
import { Grid, Stack, Skeleton } from "@mui/material";
import Link from "next/link";

export const CategoryScrollButtons = ({ isLoading }) => {
  return (
    <Grid item justifyContent="center" alignItems="center" className="w-full">
      <Stack
        direction="row"
        spacing={3}
        sx={{ justifyContent: { md: "center" } }}
        className="w-full overflow-x-scroll whitespace-nowrap">
        {isLoading
          ? // Render Skeleton components while loading
            Array.from({ length: categories.length }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={100}
                height={32}
              />
            ))
          : // Render actual links when not loading
            categories.map((category) => (
              <Link
                href={category.route}
                key={category.id}
                className="w-32 h-8 no-underline text-black font-bold uppercase">
                {category.name}
              </Link>
            ))}
      </Stack>
    </Grid>
  );
};

const categories = [
  { id: 1, name: "Best Deals", route: "/category/deals" },
  { id: 2, name: "Electronics", route: "/category/electronics" },
  { id: 3, name: "Grocery", route: "/category/grocery" },
  { id: 4, name: "Personal Care", route: "/category/personal-care" },
  { id: 5, name: "Clothes", route: "/category/clothes" },
  { id: 6, name: "Kitchen", route: "/category/kitchen" },
];
