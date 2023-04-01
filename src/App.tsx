import Articles from "./components/articles";
import Layout from "./components/layout";
import SearchArticlesForm from "./components/search-articles-form";

function App() {
  return (
    <Layout>
      <SearchArticlesForm />
      <Articles />
    </Layout>
  );
}

export default App;
