import { Grid } from "@mui/material";
import { CarouselSlides } from "@/components/carousel/CarouselSlides";
import { CarouselBalls } from "@/components/carousel/CarouselBalls";
import { CarouselArrows } from "@/components/carousel/CarouselArrows";
import { CarouselSkeleton } from "@/components/carousel/CarouselSkeleton";

export const CategoryCarousel = ({
  isLoading,
  handleSlide,
  currentIndex,
  slides,
}) => {
  return (
    <Grid
      item
      position="relative"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: -2.5 }}
    >
      {isLoading ? (
        <CarouselSkeleton />
      ) : (
        <>
          <CarouselSlides currentIndex={currentIndex} slides={slides} />
          <CarouselBalls currentIndex={currentIndex} slides={slides} />
          <CarouselArrows handleSlide={handleSlide} />
        </>
      )}
    </Grid>
  );
};
