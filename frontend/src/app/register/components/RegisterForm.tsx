"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const RegisterForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange =
    (setState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setState(event.target.value);
    };

  const handleSubmit = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <Card component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <CardContent>
        <Typography
          variant="h4"
          component="h4"
          align="center"
          className="font-extrabold mb-4">
          Register to Shop
        </Typography>
        <FormGroup sx={{ gap: 3, mb: 3 }}>
          <TextField
            variant="outlined"
            size="small"
            required
            fullWidth
            label="Username"
            autoComplete="username"
            value={username}
            onChange={handleChange(setUsername)}
          />
          <TextField
            variant="outlined"
            size="small"
            required
            fullWidth
            label="password"
            autoComplete="password"
            value={password}
            onChange={handleChange(setPassword)}
          />
        </FormGroup>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </CardContent>
    </Card>
  );
};
