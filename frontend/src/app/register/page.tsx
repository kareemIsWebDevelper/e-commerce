import { Container } from "@mui/material";
import { RegisterForm } from "./components/RegisterForm";
import { LoadingSpinner } from "@/utils/LoadingSpinner";

export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      <RegisterForm />
    </Container>
  );
}
