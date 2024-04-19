import { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {

	const [users, setUsers] = useState([]);

	const URL = "https://eyes-hospital.cleverapps.io/api/";

	const fetchUsers = () => {

		axios.get(URL + 'users')
		.then(res => setUsers(res.data))
		.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchUsers()
	}, []);

	return(
		<>
		<table className='table table-bordered'>
				<thead>
				<tr>
					<th> # </th>
					<th> Username </th>
					<th> Email </th>
					<th> Is Admin </th>
				</tr>
				</thead>
				<tbody>
			{users.map((user, index) => {
			return (
				
				<tr>
					<td> {user.id} </td>
					<td> {user.user_name} </td>
					<td> {user.email} </td>
					<td> {(user.is_admin) ? "Yes" : "Nop"} </td>
				</tr>
				
			)
		})}
		</tbody>
				</table>
		</>
	);
}


export default User;