import OfertaItem from "./OfertaItem";

function OfertaList(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <OfertaItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </ul>
  );
}

export default OfertaList;
