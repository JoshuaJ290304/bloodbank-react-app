import React from 'react'

const ViewDonors = () => {
  return (
    <div className="container mt-5">
      <div className="card-body">

        <table className="table table-bordered table-hover">

        <thead className="table-danger">

        <tr>

        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Blood Group</th>
        <th>Phone</th>
        <th>Email</th>
        <th>City</th>
        <th>Weight</th>
        <th>Last Donation</th>

        </tr>

        </thead>

        <tbody>

        {donors.map((donor,index)=>(

        <tr key={index}>

        <td>{donor.donor_name}</td>
        <td>{donor.age}</td>
        <td>{donor.gender}</td>
        <td>{donor.blood_group}</td>
        <td>{donor.phone}</td>
        <td>{donor.email}</td>
        <td>{donor.city}</td>
        <td>{donor.weight_kg}</td>
        <td>{donor.last_donation_date}</td>

        </tr>

        ))}

        </tbody>

        </table>

        </div>
    </div>
  );
};

export default ViewDonors;