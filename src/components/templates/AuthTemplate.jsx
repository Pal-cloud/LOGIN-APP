const AuthTemplate = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96">{children}</div>
  </div>
);

export default AuthTemplate;
