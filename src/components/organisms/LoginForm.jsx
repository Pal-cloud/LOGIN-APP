import InputWithLabel from "../molecules/InputWithLabel";
import Button from "../atoms/Button";
import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        label="Email"
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <InputWithLabel
        label="Password"
        id="password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <Button type="submit">Iniciar sesión</Button>
    </form>
  );
};

export default LoginForm;
