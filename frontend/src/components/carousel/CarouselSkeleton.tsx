import { Box, Skeleton, Stack } from "@mui/material";

export const CarouselSkeleton = () => (
  <Box>
    <Skeleton
      variant="rounded"
      className="w-[330px] med:w-[600px] lg:w-[1090px] h-44 rounded cursor-pointer"
    />
    <Stack
      direction="row"
      spacing={1}
      sx={{
        position: "absolute",
        bottom: 18,
        left: "50%",
        transform: "translateX(-50%)",
        ml: 3,
      }}
    >
      {[0, 1, 2].map((ballIndex) => (
        <Skeleton key={ballIndex} className={`w-3 h-3 rounded-full bg-white`} />
      ))}
    </Stack>
  </Box>
);
