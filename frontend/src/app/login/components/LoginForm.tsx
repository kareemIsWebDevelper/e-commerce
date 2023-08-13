import { useState } from "react";
import { TextField, Button, FormGroup, Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { userSignIn } from "@/store/auth/userSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isDisabled, loading, error, message } = useSelector(
    (state: RootState) => state.user
  );

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange =
    (setState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setState(event.target.value);
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(userSignIn(username, password) as any);
    setUsername("");
    setPassword("");
  };

  return (
    <Card component="form" onSubmit={handleSubmit} sx={{ p: 2, mt: 4 }}>
      {message && <p>{message}</p>}
      <Typography
        align="center"
        variant="h4"
        component="h4"
        className="font-extrabold mb-8">
        Login to Shop
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
        {error && (
          <Typography variant="body2" color="error">
            This field cannot be blank!
          </Typography>
        )}
        <TextField
          variant="outlined"
          size="small"
          required
          fullWidth
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={handleChange(setPassword)}
        />
        {error && (
          <Typography variant="body1" color="error">
            This field cannot be blank!
          </Typography>
        )}
      </FormGroup>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isDisabled}>
        {loading ? "Logging..." : "login"}
      </Button>
    </Card>
  );
};
