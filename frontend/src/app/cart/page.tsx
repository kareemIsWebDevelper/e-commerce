"use client";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Cart() {
  return (
    <Container component="main">
      <Grid container justifyContent="flex-start" spacing={5}>
        <Grid item>
          <Typography variant="h1">Your Cart Is Empty!</Typography>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={3}>
            <Link href="/">
              <Button
                variant="contained"
                color="primary"
                className="font-bold capitalize">
                Shop Now
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
