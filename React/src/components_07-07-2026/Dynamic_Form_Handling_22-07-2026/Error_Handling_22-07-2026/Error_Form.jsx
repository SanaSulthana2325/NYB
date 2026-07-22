import { useState } from "react";

function Error_Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });


  const [errors, setErrors] = useState({});


  // Single Change Handler
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  // Validation
  const validateForm = () => {

    let newErrors = {};


    if(formData.name.trim() === ""){

      newErrors.name = "Name is required";

    }


    if(formData.email.trim() === ""){

      newErrors.email = "Email is required";

    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){

      newErrors.email = "Enter a valid email";

    }


    if(formData.password.length < 8){

      newErrors.password =
      "Password must contain 8 characters";

    }


    setErrors(newErrors);


    return Object.keys(newErrors).length === 0;

  };


  const handleSubmit = (e) => {

    e.preventDefault();


    if(validateForm()){

      alert("Form Submitted Successfully");

    }

  };


  return (

    <div>

      <h2>Registration Form</h2>


      <form onSubmit={handleSubmit}>


        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
         className="border border-black p-2 rounded w-64"

        />


        {/* Dynamic Error */}
        <p style={{color:"red"}}
        className="border border-black p-2 rounded w-64"
        >
          {errors.name}

        </p>



        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        className="border border-black p-2 rounded w-64"
          

        />


        <p style={{color:"red"}}
        className="border border-black p-2 rounded w-64"
        >
          {errors.email}
        </p>



        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />


        <p style={{color:"red"}}
           className="border border-black p-2 rounded w-64"
        >
          {errors.password}
        </p>


        <button
             className="border border-black p-2 rounded w-64"
        >
          Submit
        </button>


      </form>

    </div>

  );

}

export default Error_Form;