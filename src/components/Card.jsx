import { Link } from "react-router-dom";
const Card = ({ id, src, w, h }) => {
  return (
    <Link to={`photoDetail/${id}`}>
      <article className="card hover:scale-90 transition linear duration-500 hover:drop-shadow-lg ">
        <img className="object-cover hover:rounded" src={src} />
      </article>
    </Link>
  );
};

export default Card;
