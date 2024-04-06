import { useState } from "react";
import axios from 'axios';

// Define the type for authentication payload
interface AuthType {
    username: string;
    password: string;
}

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

   
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formContent: AuthType = {
            username: username,
            password: password
        };
        try {
            const apiUrl = "http://127.0.0.1:5000/login";
            const response = await axios.post(apiUrl, formContent, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Done.", response.data);

           
            setIsLoggedIn(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            {isLoggedIn && <p>Welcome, {username}!</p>}
        </div>
    );
}

export default Login;