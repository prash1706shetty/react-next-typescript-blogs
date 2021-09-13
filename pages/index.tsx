import Head from "next/head";
import ArticleList from "../components/ArtilceList";

interface Article {
  id: string,
  title:string,
  excerpt:string,
  body: string
}

interface ArticleListPrpos {
  articles:Article[]
}
export default function Home({articles}:ArticleListPrpos) {
  return (
    <div>
      {/* <Head>
        <title>Prashanth blog</title>
        <meta
          name="keywords"
          content="fashion spray, fashionspray, designer collections, designer wear"
        ></meta>
      </Head> */}

      <ArticleList  articles={articles}/>    
    </div>
  );
}

export const getStaticProps = async () => {
  const res =  await fetch(
    `http://localhost:3000/api/articles`
  )
const articles = await res.json()

return {
  props:{
    articles
  }
}
};

// export const getStaticProps = async () => {
//   const res =  await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   )
// const articles = await res.json()

// return {
//   props:{
//     articles
//   }
// }
// };
