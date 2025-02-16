import type { MetaFunction } from "@remix-run/node";
import HamburgerMenu from "~/components/HamburgerMenu"
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import { Link } from "@remix-run/react";
import blogDatabase from "~/blogData/db"


export const meta: MetaFunction = () => {
  return [
    { title: "Boxxed News" },
    { name: "description", content: "Welcome to Boxxed blog" },
  ];
};

export const loader = async () => {
  // Return the blog database as JSON
  return json(blogDatabase);
};

export default function Index() {
  const articles = useLoaderData<typeof loader>();
  const heroContent = articles.filter(article => article.showAtHero === true && article.tags[0] === 'Culture');
  const heroArticles = articles.filter(article=> article.showAtHero === true && article.tags[0] !== 'Culture');
  const latestNews = articles.filter(article=> article.latestNews === true);
  const worldNews = articles.filter(article=> article.forHome === true && article.tags[0] === 'World News');
  const technologyNews = articles.filter(article=>article.forHome === true && article.tags[0] === 'Technology')
  return (
    <div>
      <HamburgerMenu />
      <section className="pt-10 px-5">
        <div className="py-11">
          {
            heroContent.map((article) => (
              <div>
                <img src={article.image} alt="" className="block mb-3"/>
                <p className="mb-3 w-fit">{article.tags[0]}</p>
                <h1 className="mb-3 text-2xl font-bold">{article.title}</h1>
                <p>{article.punchline}</p>
              </div>
            ))
          }
        </div>
        <div>
          {
            heroArticles.map((article) => (
              <div className="mb-8">
                <p className="mb-1">{article.tags[0]}</p>
                <div className="flex gap-4">
                  <h3 className="text-lg font-bold">{article.title}</h3>
                  <img src={article.image} className="w-28 h-26" alt=""/>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <section>
        <div className="mb-8">
        <h2 className="px-6 py-3 text-lg font-semibold">Latest News</h2>
        {
          latestNews.map((article) => (
            <div className="py-3 border-t-2 border-b-2 px-5">
              <h3>{article.title}</h3>
            </div>
          ))
        }
        </div>
        
      </section>
      <section className="py-8">
        <div>
          <h2 className="px-6 py-3 text-lg font-semibold">World News</h2>
          {
            worldNews.map((article) =>(
              <div className="px-6">
                <div className="mb-8">
                  <p className="mb-1">{article.tags[0]}</p>
                <div className="flex gap-4">
                  <div>
                    <span className="block">{article.author} Feb 16,2025</span>
                    <h3 className="text-lg font-bold">{article.title}</h3>
                  </div>
                  <img src={article.image} alt="" className="w-22 h-20"/>
                </div>
              </div>
              </div>
            ))
          }
        </div>
      </section>
      <section className="py-8">
        <div>
          <h2 className="px-6 py-3 text-lg font-semibold">Technology</h2>
          {
          technologyNews.map((article) =>(
              <div className="px-6">
                <div className="mb-8">
                  <p className="mb-1">{article.tags[0]}</p>
                <div className="flex gap-4">
                  <div>
                    <span className="block">{article.author} Feb 16,2025</span>
                    <h3 className="text-lg font-bold">{article.title}</h3>
                  </div>
                  <img src={article.image} alt="" className="w-22 h-20"/>
                </div>
              </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}


