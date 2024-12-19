import Link from "next/link";

const Portfolio: React.FC = () => {
    const projects = [
      {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with user-friendly design and secure payment integration.",
        image: "/images/ecommerce.jpg",
      },
      {
        title: "Mobile Banking App",
        description: "A sleek mobile app providing seamless banking services for users on-the-go.",
        image: "/images/mobile-banking.jpg",
      },
      {
        title: "Corporate Website",
        description: "A responsive and visually appealing website for a leading corporate client.",
        image: "/images/corporate-website.jpg",
      },
      {
        title: "Social Media Dashboard",
        description: "A robust analytics dashboard for managing and tracking social media performance.",
        image: "/images/social-dashboard.jpg",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Portfolio</h1>
          <p className="text-gray-700 text-center mb-12">
            Beberapa project yang telah kami buat untuk client kami
          </p>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                href={"/"}
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-blue-600 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  