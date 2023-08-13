import { Grid, Card, Box, Skeleton, CardActions, Button } from "@mui/material";
import { categories } from "@/components/home/index";

export const CategoryCardSkeleton = () => {
  return Array.from({ length: categories.length }).map((_, index) => (
    <Grid
      key={index}
      item
      justifyContent="center"
      className="w-[375px] flex-wrap">
      <Card className="shadow-xl">
        <Box display="grid" justifyContent="center">
          <Skeleton width={200} height={20} sx={{ my: 2 }} />
          <Skeleton variant="rectangular" width={290} height={200} />
          <CardActions>
            <Button variant="text" color="primary" disabled>
              <Skeleton width={80} />
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  ));
};
