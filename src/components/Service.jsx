import { useState, useEffect } from 'react';
import dateFormat from "dateformat";

import axios from 'axios';


const Service = () => {

	const [services, setServices] = useState([]);

	const URL = "https://eyes-hospital.cleverapps.io/api/";

	const fetchServices = () => {

		axios.get(URL + 'services')
		.then(res => setServices(res.data))
		.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchServices()

	}, []);



	return(
		<>
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Created At</th>
				</tr>
			</thead>
			<tbody>
				{services.map((service, index) => {
					return (
						<tr key={service.id}>
							<td>{service.id}</td>
							<td>{service.service_name}</td>
							<td>{dateFormat(service.createdAt,  "dddd, mmmm dS, yyyy")}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
		</>
	);
}


export default Service;