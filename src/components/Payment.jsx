import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import axios from 'axios';

const Payment = () => {
	const URL = "https://eyes-hospital.cleverapps.io/api/";

    const [payments, setPayments] = useState([]);


	const fetchPayments = () => {
		axios.get(URL + 'payments')
		.then(res => setPayments(res.data))
		.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchPayments()
	}, []);

  return (
    <>
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Phone</th>
					<th>Service</th>
					<th>Amount</th>
					<th>User Name</th>
					<th>Created At</th>
				</tr>
			</thead>
			<tbody>
				{payments.map((payment, index) => {
					return (
						<tr key={payment.id}>
							<td>{payment.id}</td>
							<td>{payment.patientservice.patient.name}</td>
							<td>{payment.patientservice.patient.phone}</td>
							<td>{payment.patientservice.service.service_name}</td>
							<td>$ {payment.patientservice.due_amount}</td>
							<td>{payment.user.user_name}</td>
							<td>{dateFormat(payment.createdAt,  "dddd, mmmm dS, yyyy")}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
    </>
  )
}

export default Payment