import { Box, Stack } from "@mui/material";

export const CarouselBalls = ({ currentIndex, slides }) => {
  return (
    <Box justifyContent="center" alignItems="center">
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        sx={{ mt: -3 }}
      >
        {slides.map((_, ballIndex) => (
          <Box
            key={ballIndex}
            className="w-3 h-3 rounded-full bg-white"
            sx={{ opacity: ballIndex !== currentIndex ? 0.5 : 1 }}
          />
        ))}
      </Stack>
    </Box>
  );
};
