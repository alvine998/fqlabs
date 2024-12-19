const ServiceCard: React.FC = () => {
    const packages = [
      {
        title: "Basic",
        price: "$19/month",
        features: ["1 Website", "10 GB Storage", "Basic Support"],
      },
      {
        title: "Standard",
        price: "$49/month",
        features: ["5 Websites", "50 GB Storage", "Priority Support"],
      },
      {
        title: "Premium",
        price: "$99/month",
        features: ["Unlimited Websites", "200 GB Storage", "24/7 Support"],
      },
    ];
  
    return (
      <div className="container mx-auto py-8 grid gap-6 md:grid-cols-3 md:px-10">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-center text-blue-600">{pkg.title}</h2>
            <p className="text-center text-gray-700 text-2xl font-semibold mt-4">{pkg.price}</p>
            <ul className="mt-6 space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="text-gray-600 text-sm">
                  - {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ServiceCard;
  