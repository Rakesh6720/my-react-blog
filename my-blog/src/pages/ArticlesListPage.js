import articleContent from "./article-content";
import ArticlesList from "../components/ArticleList";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles List</h1>
      <ArticlesList articles={articleContent} />
    </>
  );
};

export default ArticlesListPage;
