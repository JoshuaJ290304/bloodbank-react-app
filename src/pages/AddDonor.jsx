import { useState } from "react";

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

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-danger text-white">
          <h3>Add Blood Donor</h3>
        </div>

        <div className="card-body">

          {/* Form fields will be added here */}

        </div>

      </div>

    </div>
  );
};

export default AddDonor;