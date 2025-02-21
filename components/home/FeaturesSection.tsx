const FeaturesSection = () => {
    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Use MyAnimeTale?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Create Stories</h3>
              <p className="text-gray-600">Write & share your anime-inspired tales.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Read & Explore</h3>
              <p className="text-gray-600">Discover stories written by anime lovers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Customize Characters</h3>
              <p className="text-gray-600">Bring your anime OCs to life!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Engage with the Community</h3>
              <p className="text-gray-600">Comment, like, and interact with other creators.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  