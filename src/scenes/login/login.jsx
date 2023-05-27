import { Button, Typography, TextField } from "@mui/material";

const Login = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Don't have an account? <Button variant="contained" color="primary">Register</Button>
      </Typography>
      <div>
        <TextField label="Email" type="email" variant="outlined" />
      </div>
      <div>
        <TextField label="Password" type="password" variant="outlined" />
      </div>
      <Button variant="contained" color="primary">Continue</Button>
    </div>
  );
};

export default Login;
