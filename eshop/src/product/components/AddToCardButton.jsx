import Button, { buttonTypes } from "../../common/components/Button";
import useLoadingDots from "../../common/hooks/useLoadingDots";

function Btn({ onClick }) {
  return (
    <Button type={buttonTypes.PRIMARY} onClick={onclick}>
      Add To Card
    </Button>
  );
}

function LoadingBtn() {
  const loadingDots = useLoadingDots();

  return (
    <Button type={buttonTypes.PRIMARY} disabled className="flex">
      <span>Adding To Card</span>
      <span className="w-3 text-left">{loadingDots}</span>
    </Button>
  );
}

function AddToCardButton({ isLoading, onClick }) {
  if (isLoading) {
    return <LoadingBtn />;
  }
  return <Btn onClick={onClick} />;
}

export default AddToCardButton;
