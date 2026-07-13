import { useEffect, useState } from "react";
import axios from "axios";

const ViewDonors = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://host-demo-app.onrender.com/api/donors")
      .then((response) => {
        setDonors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to fetch donor data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow">

        <div className="card-header bg-danger text-white">
          <h3 className="text-center">View Blood Donors</h3>
        </div>

        <div className="card-body">

          {loading ? (
            <div className="text-center my-4">
              <div
                className="spinner-border text-danger"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger">
              {error}
            </div>
          ) : (
            <>
              <h5 className="mb-3">
                Total Donors : {donors.length}
              </h5>

              <div className="table-responsive">

                <table className="table table-bordered table-hover table-striped">

                  <thead className="table-danger">

                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Blood Group</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Weight (kg)</th>
                      <th>Last Donation</th>
                    </tr>

                  </thead>

                  <tbody>

                    {donors.map((donor, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
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
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default ViewDonors;