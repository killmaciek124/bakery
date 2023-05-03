function OfertaItem(props) {
  return (
    <li>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.price}</h4>
      </div>
    </li>
  );
}

export default OfertaItem;
