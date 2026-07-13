import { useState } from "react";
import axios from "axios";

const AddDonor = () => {
  const [input, setInput] = useState({
    donor_name: "",
    age: "",
    gender: "",
    blood_group: "",
    phone: "",
    email: "",
    city: "",
    weight_kg: "",
    last_donation_date: ""
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = () => {
    axios
      .post("https://host-demo-app.onrender.com/api/add-donor", {
        donor_name: input.donor_name,
        age: Number(input.age),
        gender: input.gender,
        blood_group: input.blood_group,
        phone: input.phone,
        email: input.email,
        city: input.city,
        weight_kg: Number(input.weight_kg),
        last_donation_date: input.last_donation_date,
      })
      .then((response) => {
        setMessage(response.data.message);
        setMessageType("success");

        setInput({
          donor_name: "",
          age: "",
          gender: "",
          blood_group: "",
          phone: "",
          email: "",
          city: "",
          weight_kg: "",
          last_donation_date: "",
        });
      })
      .catch((error) => {
        setMessage(
          error.response?.data?.message || "Something went wrong"
        );
        setMessageType("danger");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">

        <div className="card-header bg-danger text-white">
          <h3 className="text-center">Add Blood Donor</h3>
        </div>

        <div className="card-body">

          {message && (
            <div className={`alert alert-${messageType}`}>
              {message}
            </div>
          )}

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Donor Name</label>
              <input
                type="text"
                className="form-control"
                name="donor_name"
                value={input.donor_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={input.age}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                name="gender"
                value={input.gender}
                onChange={inputHandler}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Blood Group</label>
              <select
                className="form-select"
                name="blood_group"
                value={input.blood_group}
                onChange={inputHandler}
              >
                <option value="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={input.phone}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={input.email}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={input.city}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Weight (kg)</label>
              <input
                type="number"
                className="form-control"
                name="weight_kg"
                value={input.weight_kg}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Last Donation Date
              </label>
              <input
                type="date"
                className="form-control"
                name="last_donation_date"
                value={input.last_donation_date}
                onChange={inputHandler}
              />
            </div>

          </div>

          <div className="d-grid">
            <button
              className="btn btn-danger"
              onClick={submitHandler}
            >
              Add Donor
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddDonor;