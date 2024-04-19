import { useState, useEffect } from 'react';
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
						<tr>
							<td>{service.id}</td>
							<td>{service.name}</td>
							<td>{service.createdAt}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
		</>
	);
}


export default Service;