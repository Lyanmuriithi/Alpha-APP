import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Contact: React.FC = () => {
    const [testState, setTestState] = useState([
        {
            name: 'some name'
        }
    ]);
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

  

    return (
        <div>
            <h1>Contact Us</h1>
            <p>Welcome to the contact us page!</p>
        </div>
       
    );
};

export default Contact;