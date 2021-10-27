import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article, key) => (
        <li key={key}>
          <Link to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
          </Link>
          <p>{article.content[0].substring(0, 150)}...</p>
        </li>
      ))}
    </>
  );
};

export default ArticleList;
