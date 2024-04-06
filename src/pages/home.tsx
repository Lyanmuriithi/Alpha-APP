import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [testState, setTestState] = useState([
        {
            name: 'some name'
        }
    ]);
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="mb-4">Home Page</h1>
                    <p>Welcome to the home page!</p>
                    <div className="mt-3">
                        <button className="btn btn-primary mr-2" onClick={handleAboutClick}>About</button>
                        <button className="btn btn-primary" onClick={handleContactClick}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;