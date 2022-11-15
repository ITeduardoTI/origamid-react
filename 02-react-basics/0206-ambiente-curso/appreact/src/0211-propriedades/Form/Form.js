import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <form>
      <Input id="email" label="E-mail" required />
      <Input id="password" type="password" label="Password" />
      <Button />
    </form>
  );
}

export default Form;