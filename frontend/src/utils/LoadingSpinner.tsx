"use client";
import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";

interface LoadingSpinnerProps {
  children: React.ReactNode;
}

export const LoadingSpinner = ({ children }: LoadingSpinnerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => setIsLoading(false), 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {isLoading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh" }}>
          <CircularProgress size={50} />
        </Grid>
      ) : (
        children
      )}
    </>
  );
};
