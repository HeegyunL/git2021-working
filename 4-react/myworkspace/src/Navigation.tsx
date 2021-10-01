import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Todo">Todo</Link>
      </li>
      <li>
        <Link to="/FeedRe">FeedRe</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navigation;