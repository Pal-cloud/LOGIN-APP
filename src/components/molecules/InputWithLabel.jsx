import Label from "../atoms/Label";
import Input from "../atoms/Input";

const InputWithLabel = ({ label, id, ...inputProps }) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...inputProps} />
  </div>
);

export default InputWithLabel;
