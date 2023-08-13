"use client";
import { Container } from "@mui/material";
import { LoginForm } from "./components/LoginForm";
import { LoadingSpinner } from "@/utils/LoadingSpinner";

export default function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <LoginForm />
    </Container>
  );
}
