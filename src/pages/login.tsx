import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { TextField, Button, Grid, Link, Typography, Avatar, Container, CssBaseline, Box } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

function Login() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const dispatch = useDispatch();

    type AuthType ={
        username: string;
        password: string;
    }

    const [form, setForm] = useState<AuthType>({ username: "", password: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formContent: AuthType = {
            username: form.username,
            password: form.password
        };

        try {
            const apiUrl = "http://127.0.0.1:5000/login";
            const response = await axios.post(apiUrl, formContent, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log("Done: ", response);

            console.log("Done.", response)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoFocus
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
