import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const CarouselSlides = ({ currentIndex, slides }) => {

  return (
    <Box justifyContent="center" alignItems="center">
      {slides.map((slide, index) => (
        <Link href={slide.to} key={slide.id} className="cursor-pointer">
          <Image
            src={slide.image}
            alt="category-slide"
            className="w-[330px] med:w-[600px] lg:w-[1090px] h-44 rounded cursor-pointer"
            style={{ display: index !== currentIndex ? "none" : "block" }}
          />
        </Link>
      ))}
    </Box>
  );
};