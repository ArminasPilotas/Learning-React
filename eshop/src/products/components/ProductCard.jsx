import Card from "../../common/components/Card";

function ProductCard({ image, title, price }) {
  return (
    <li className="p-2">
      <Card className="w-64 h-80" isRound>
        <div className="h-3/4 p-4">
          <img className="max-h-full m-auto" src={image} alt={title}></img>
        </div>

        <div className="text-center font-semibold truncate" title={title}>
          {title}
        </div>

        <div className="text-center">{price}$</div>
      </Card>
    </li>
  );
}

export default ProductCard;
