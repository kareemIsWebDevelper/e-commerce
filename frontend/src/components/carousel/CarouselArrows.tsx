import { Box, Stack } from "@mui/material";

export const CarouselArrows = ({ handleSlide }) => {
  return (
    <Stack
      position="absolute"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        left: "50%",
        top: "50%",
        translate: "-50% 50%",
        width: '100%',
      }}
    >
      <Box
        component="button"
        onClick={handleSlide}
        className="font-bold bg-zinc-200 opacity-50 p-2 rounded border-none cursor-pointer"
        sx={{ ml: 5 }}
      >
        {"<"}
      </Box>
      <Box
        component="button"
        onClick={handleSlide}
        className="font-bold bg-zinc-200 opacity-50 p-2 rounded border-none cursor-pointer"
      >
        {">"}
      </Box>
    </Stack>
  );
};
