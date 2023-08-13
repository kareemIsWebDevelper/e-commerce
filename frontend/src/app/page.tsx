"use client";
import { CategoryCard } from "@/components/CategoryCard";
import { CategoryScrollButtons } from "@/components/home/CategoryScrollButtons";
import { CategoryCarousel } from "@/components/carousel";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import kitchen from "@/assets/images/kitchen.jpeg";
import rice from "@/assets/images/rice.jpeg";
import clothes from "@/assets/images/clothes.jpeg";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const slides = [
    { id: 1, image: kitchen, text: "Deals", to: "/cards/kitchen" },
    { id: 2, image: rice, text: "Grocery", to: "/cards/rice" },
    { id: 3, image: clothes, text: "Clothes", to: "/cards/clothes" },
  ];

  const handleSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
      handleSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container component="main">
      <Grid container spacing={5} justifyContent="center" alignItems="flex-start">
        <CategoryScrollButtons isLoading={isLoading} />
        <CategoryCarousel
          isLoading={isLoading}
          handleSlide={handleSlide}
          currentIndex={currentIndex}
          slides={slides}
        />
        <CategoryCard isLoading={isLoading} />
      </Grid>
    </Container>
  );
};
