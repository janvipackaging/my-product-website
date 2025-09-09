// This function generates a custom title and description for SEO.
export async function generateMetadata({ params }: { params: { city: string } }) {
  // Capitalize the city name (e.g., "mumbai" becomes "Mumbai")
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return {
    title: `BOPP Film Supplier in ${cityName} | Janvi Packaging`,
    description: `Get high-quality, reliable BOPP film in ${cityName}. We offer competitive pricing and fast delivery. Contact Janvi Packaging today!`,
  };
}

// This is the main component for your page.
export default function CityProductPage({ params }: { params: { city: string } }) {
  // Capitalize the city name again for use in the page content.
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* The styled heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          High-Quality BOPP Film in {cityName}
        </h1>

        {/* The styled content */}
        <p className="mt-4 text-lg text-gray-700">
          Janvi Packaging is the leading provider of premium BOPP film
          solutions in <strong>{cityName}</strong>. Whether you are in packaging,
          labeling, or industrial applications, we have the right film for your needs.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          Contact us today to get a custom quote for your business in {cityName}.
        </p>

        {/* A styled button */}
        <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Get a Quote
        </button>
      </div>
    </main>
  );
}