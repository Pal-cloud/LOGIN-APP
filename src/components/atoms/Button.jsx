const Button = ({ children, ...props }) => (
  <button
    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
    {...props}
  >
    {children}
  </button>
);
export default Button;
