import { useState, useEffect } from 'react';
import dateFormat from "dateformat";

import axios from 'axios';


const Patient = () => {

	const [patients, setPatients] = useState([]);

	const URL = "https://eyes-hospital.cleverapps.io/api/";

	const fetchPatients = () => {

		axios.get(URL + 'patients')
		.then(res => setPatients(res.data))
		.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchPatients()

	}, []);

	return(
		<>
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Phone</th>
					<th>Email</th>
					<th>District</th>
					<th>Village</th>
					<th>Created At</th>
				</tr>
			</thead>
			<tbody>
				{patients.map((patient, index) => {
					return (
						<tr key={patient.id}>
							<td>{patient.id}</td>
							<td>{patient.name}</td>
							<td>{patient.phone}</td>
							<td>{patient.email}</td>
							<td>{patient.village.district.district_name}</td>
							<td>{patient.village.village_name}</td>
							<td>{dateFormat(patient.createdAt,  "dddd, mmmm dS, yyyy")}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
		</>
	);
}


export default Patient;