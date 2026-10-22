import React, { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const gotoHome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();

    const register_url = window.location.origin + "/djangoapp/register";

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });

    const json = await res.json();
    if (json.status) {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin;
    }
  };

  const boxStyle = {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "24px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };
  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    boxSizing: "border-box",
  };

  return (
    <div style={boxStyle}>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <form onSubmit={register}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          style={inputStyle}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          style={inputStyle}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          style={inputStyle}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={inputStyle}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="psw"
          placeholder="Password"
          style={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={{ padding: "8px 16px", marginRight: "8px" }}>
          Register
        </button>
        <button type="button" style={{ padding: "8px 16px" }} onClick={gotoHome}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Register;
