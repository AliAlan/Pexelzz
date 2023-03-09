import { Link } from "react-router-dom";
import Loading from "./Loading";
const Card = ({ id, src, w, h }) => {
  return (
    <Link to={`photoDetail/${id}`}>
      <article className="card hover:scale-90 transition linear duration-500 hover:drop-shadow-lg ">
        {src ? (
          <img className="object-cover hover:rounded" src={src} />
        ) : (
          <Loading />
        )}
      </article>
    </Link>
  );
};

export default Card;
