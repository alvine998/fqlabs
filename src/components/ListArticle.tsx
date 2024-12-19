import React from "react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Pentingnya Teknologi Informasi (IT) dalam Era Digital",
    excerpt:
      "Di era digital yang serba cepat ini, teknologi informasi (IT) telah menjadi tulang punggung utama dalam berbagai aspek kehidupan.",
    author: "Alvine Yoga Pratama",
    date: "19 Desember 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDvpiNtfeIiiFjMHRcBrsFYkHmqZufI6lMQ&s",
  },
//   {
//     id: 2,
//     title: "Mobile Apps: A Comprehensive Guide",
//     excerpt:
//       "Learn about the best practices and tools for creating mobile apps that stand out.",
//     author: "Jane Smith",
//     date: "December 18, 2024",
//     image: "https://via.placeholder.com/600x300",
//   },
//   {
//     id: 3,
//     title: "10 Tips for Better UI/UX Design",
//     excerpt:
//       "Discover how to improve the user experience and interface of your applications.",
//     author: "Alex Johnson",
//     date: "December 17, 2024",
//     image: "https://via.placeholder.com/600x300",
//   },
];

const ListArticlePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Articles</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Article Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              {/* Article Details */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <div className="text-gray-500 text-xs flex justify-between items-center">
                  <span>By {article.author}</span>
                  <span>{article.date}</span>
                </div>
                <a
                  href={`/article/${article.id}`}
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListArticlePage;
