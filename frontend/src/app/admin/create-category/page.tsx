import { Container } from "@mui/material";
import { CategoryForm } from "../components/CategoryForm";

export default function CreateCategory() {
    return (
        <Container component="main" maxWidth="xs">
            <CategoryForm />
        </Container>
    );
};