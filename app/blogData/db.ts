type Article = {
  id: number;
  title: string;
  punchline: string;
  content: string;
  author: string;
  image: string;
  date: string;
  tags: string[];
  forHome: boolean;
  showAtHero: boolean;
  latestNews: boolean;
};

let blogDatabase: Article[] = [];

function addArticle(
  title: string,
  punchline: string,
  content: string,
  author: string,
  image: string,
  tags: string[] = [],
  forHome: boolean = false,
  showAtHero: boolean = false,
  latestNews: boolean = false
) {
    const newArticle = {
      id: blogDatabase.length + 1, // Auto-increment ID
      title,
      punchline,
      content,
      author,
      image,
      date: new Date().toISOString(), // Current date in ISO format
      tags,
      forHome,  
      showAtHero,
      latestNews,
    };
    blogDatabase.push(newArticle);
    console.log(`Article "${title}" added successfully!`);
  }

// Function to get an article by ID
/*
function getArticleById(id) {
    return blogDatabase.find(article => article.id === id);
}

function updateArticle(id, updatedFields) {
  const articleIndex = blogDatabase.findIndex(article => article.id === id);
  if (articleIndex !== -1) {
    blogDatabase[articleIndex] = { ...blogDatabase[articleIndex], ...updatedFields };
    console.log(`Article with ID ${id} updated successfully!`);
  } else {
    console.log(`Article with ID ${id} not found.`);
  }
}

function deleteArticle(id) {
    const initialLength = blogDatabase.length;
    blogDatabase = blogDatabase.filter(article => article.id !== id);
    if (blogDatabase.length < initialLength) {
      console.log(`Article with ID ${id} deleted successfully!`);
    } else {
      console.log(`Article with ID ${id} not found.`);
    }
}
**/
addArticle(
  "A deep dive into the influence of cultural movements on society",
  "Lorem ipsum dolor amet consecteur...","Chopper chopper chopper",
  "John Doe",
  "./public/hero.png",
  ["Culture"],
  true,
  true
);

addArticle(
  "Predicting the superpower of digital by 2030",
  "Lorem ipsum dolor amet consecteur...",
  "Chopper chopper chopper",
  "John Doe",
  "./public/Rectangle8.png",
   ["World News"],
   true,
   true
  );

addArticle(
  "The best phone with advanced chips",
  "Lorem ipsum dolor amet consecteur...",
  "Chippy ah chippy",
  "John Doe",
  "./public/Rectangle9.png",
   ["Technology"],
   true,
   true
  );

addArticle(
  "Best ways to make money online in 2025",
  "Lorem ipsum dolor amet consecteur...",
  "money making machine bitches",
  "John Doe",
  "./public/Rectangle10.png",
   ["Business"],
   true,
   true);

addArticle(
  "Is USAID funding insurgency in africa and middle east?",
  "Lorem ipsum dolor amet concreates",
  "BokoHaram, Isis, Alquedda",
  "Ebuka",
  "./public/Rectangle9.png",
  ["World News"],
  true,
  false,
  true
)


addArticle(
  "China is dominating AI technology with some advancements in robotics",
  "Lorem ipsum dolor amet concreates",
  "Deepseek and some cool robotics",
  "Ebuka",
  "./public/Rectangle8.png",
  ["Technology"],
  true,
  false,
  true
)


addArticle(
  "Tems wins her second Grammy, thanks to her album",
  "Lorem ipsum dolor amet concreates",
  "Nigeria is really dominating africa",
  "Ebuka",
  "./public/Rectangle10.png",
  ["Music"],
  false,
  false,
  true
)


addArticle(
  "Where to live for cheap in Italy",
  "Lorem ipsum dolor amet concreates",
  "Venice,Napoli,Rome",
  "Ebuka",
  "./public/Rectangle9.png",
  ["World News"],
  true,
  false,
  true
)


addArticle(
  "Is USAID funding insurgency in africa and middle east?",
  "Lorem ipsum dolor amet concreates",
  "BokoHaram, Isis, Alquedda",
  "Ebuka",
  "./public/Rectangle8.png",
  ["World News"],
  false,
  false,
  true
)

addArticle(
  "The war between OpenAi and Deepseek",
  "Lorem ipsum dolor amet concreates",
  "Deepseek advancement in LLMs",
  "Ebuka",
  "./public/Rectangle8.png",
  ["Technology"],
  true,
  false,
  true
)
export default blogDatabase;