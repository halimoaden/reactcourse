import { useState, useEffect } from 'react';
import dateFormat from "dateformat";


import axios from 'axios';


const District = () => {

	const [districts, setDistricts] = useState([]);

	const URL = "https://eyes-hospital.cleverapps.io/api/";

	const fetchDistricts = () => {
		axios.get(URL + 'districts')
		.then(res => setDistricts(res.data))
		.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchDistricts()

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
				{districts.map((district, index) => {
					return (
						<tr key={district.id}>
							<td>{district.id}</td>
							<td>{district.district_name}</td>
							<td>{dateFormat(district.createdAt,  "dddd, mmmm dS, yyyy")}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
		</>
	);
}


export default District;