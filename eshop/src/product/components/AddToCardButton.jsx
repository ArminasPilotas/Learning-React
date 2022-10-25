import Button, { buttonTypes } from "../../common/components/Button";

function AddToCardButton({ isLoading, onClick }) {
  return (
    <Button type={buttonTypes.Primary} disabled={isLoading} onClick={onclick}>
      {isLoading ? "ADDING TO CARD" : "ADD TO CARD"}
    </Button>
  );
}

export default AddToCardButton;
