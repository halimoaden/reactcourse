import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



const Login = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState('');

	const URL = "https://eyes-hospital.cleverapps.io/api/";

	const makeLogin = (e) => {
		e.preventDefault();


		axios.post(URL + 'login', {
			email: username,
			password: password
		}, {
			headers: {
				'x-auth-token': localStorage.setItem('x-auth-token', token)
			}
		})
		.then(response => console.log(setToken(response.data)))
		.catch(err => console.log(err));
	}

	return(
		 <Form>
	      <Form.Group className="mb-3" controlId="formBasicEmail">
	        <Form.Label>Email address</Form.Label>
	        <Form.Control value={username} onChange={username => setUsername(username.target.value)} type="email" placeholder="Enter email" />
	      </Form.Group>

	      <Form.Group className="mb-3" controlId="formBasicPassword">
	        <Form.Label>Password</Form.Label>
	        <Form.Control value={password} onChange={password => setPassword(password.target.value)} type="password" placeholder="Password" />
	      </Form.Group>
	      
	      <Button onClick={makeLogin} variant="primary" type="submit">
	        Submit
	      </Button>
	    </Form>
	);
}


export default Login;