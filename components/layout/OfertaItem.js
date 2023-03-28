// import { useRouter } from "next/router";

function OfertaItem(props) {
  // const router = useRouter();
  // const showDetailHandler = () => {
  //   router.push("/" + props.id); // navigate programatically (troche gorszy zamiennik <Link>)
  // };
  return (
    <li>
      {/* <div>
        <img src={props.image} alt={props.title} />
      </div> */}
      <div>
        <h3>{props.title}</h3>
        <h4>{props.price}</h4>
      </div>
      {/* <div className={classes.actions}>
        <button onClick={showDetailHandler}>Show Details</button>
      </div> */}
    </li>
  );
}

export default OfertaItem;
