import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>Page does not exist...</h1>
      <Link to="/">Back to Home...</Link>
    </>
  );
};

export default NotFoundPage;
