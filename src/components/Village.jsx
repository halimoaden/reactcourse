import { useState, useEffect } from 'react';
import axios from 'axios';


const Village = () => {

	const [villages, setVillages] = useState([]);

	const URL = "https://eyes-hospital.cleverapps.io/api/";

	const fetchVillages = () => {

		axios.get(URL + 'villages')
		.then(res => setVillages(res.data))
		.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchVillages()

	}, []);

	return(
		<>
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th>#</th>
					<th>District</th>
					<th>Village</th>
					<th>Created At</th>
				</tr>
			</thead>
			<tbody>
				{villages.map((village, index) => {
					return (
						<tr>
							<td>{village.id}</td>
							<td>{village.district.district_name}</td>
							<td>{village.village_name}</td>
							<td>{village.createdAt}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
		</>
	);
}


export default Village;