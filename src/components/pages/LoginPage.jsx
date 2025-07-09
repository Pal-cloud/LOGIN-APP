import AuthTemplate from "../templates/AuthTemplate";
import LoginForm from "../organisms/LoginForm";

const LoginPage = () => {
  const handleLogin = (formData) => {
    alert(`Email: ${formData.email}, Password: ${formData.password}`);
  };

  return (
    <AuthTemplate>
      <h1 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h1>
      <LoginForm onLogin={handleLogin} />
    </AuthTemplate>
  );
};

export default LoginPage;
