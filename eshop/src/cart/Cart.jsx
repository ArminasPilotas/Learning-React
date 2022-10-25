import FormControl from "../common/components/FormControl";
import Input from "../common/components/Input";

function Cart() {
  return (
    <div className="m-auto" style={{ maxWidth: 500 }}>
      <FormControl htmlFor="full-name" label="Full Name">
        <Input id="full-name" shouldFocus />
      </FormControl>

      <FormControl htmlFor="address" label="Address">
        <Input id="address" />
      </FormControl>
    </div>
  );
}

export default Cart;
