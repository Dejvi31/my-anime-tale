const HowItWorks = () => {
    return (
      <section className="bg-gray-100 p-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <span className="text-2xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-gray-600">Create your account and join the community.</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-24 h-24 bg-green-600 text-white rounded-full flex items-center justify-center">
                <span className="text-2xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Create Your Story</h3>
                <p className="text-gray-600">Start writing your anime-inspired story!</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-24 h-24 bg-orange-600 text-white rounded-full flex items-center justify-center">
                <span className="text-2xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Share & Get Feedback</h3>
                <p className="text-gray-600">Publish your story and engage with readers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  