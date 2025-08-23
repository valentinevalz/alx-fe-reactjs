import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required!");
      return;
    }

    if (!email) {
      setErrors("Email is required!");
      return;
    }

    if (!password) {
      setErrors("Password is required!");
      return;
    }

    setErrors("");
    console.log({ username, email, password });
    alert("User registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>

      <button type="submit">Register</button>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
    </form>
  );
}

export default RegistrationForm;
