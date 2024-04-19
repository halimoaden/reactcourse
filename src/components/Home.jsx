import axios from 'axios';
import dateFormat from "dateformat";

import { useState, useEffect } from 'react';

function Home() {

  const [patientServices, setPatientServices] = useState([]);

  const URL = "https://eyes-hospital.cleverapps.io/api/";

  const fetchPatientServices = () => {
		axios.get(URL + 'patientservices')
		.then(res => setPatientServices(res.data))
		.catch(err => console.log(err))
	}

  useEffect(() => {
		fetchPatientServices()
	}, []);


  return (
    <>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>#</th>
          <th>Patient Name</th>
          <th>Phone</th>
          <th>Service</th>
          <th>District</th>
          <th>Village</th>
          <th>Amount</th>
          <th>User Name</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
          {patientServices.map((patientservice, index) => {
            return (
              <tr key={patientservice.id}>
                <td>{patientservice.id}</td>
                <td>{patientservice.patient.name}</td>
                <td>{patientservice.patient.phone}</td>
                <td>{patientservice.service.service_name}</td>
                <td>{patientservice.patient.village.district.district_name}</td>
                <td>{patientservice.patient.village.village_name}</td>
                <td>$ {patientservice.due_amount}</td>
                <td>{patientservice.user.user_name}</td>
                <td>{dateFormat(patientservice.createdAt,  "dddd, mmmm dS, yyyy")}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
    </>
    
  )

}

export default Home;
