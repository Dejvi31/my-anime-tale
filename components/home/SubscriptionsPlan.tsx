const SubscriptionPlans = () => {
    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Subscription Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
              <p className="text-xl font-bold mb-4">FREE</p>
              <ul className="text-left text-gray-600 mb-6">
                <li>✅ Write Short Stories (single entry, like a movie)</li>
                <li>✅ Publish Stories (others can read, like & comment)</li>
                <li>✅ Read and Comment on Other Stories</li>
                <li>✅ Private Drafts (write but keep unpublished until ready)</li>
                <li>✅ No Ads</li>
                <li>❌ Write Anime Story Series (Episode 1, Episode 2, etc.)</li>
                <li>❌ Basic AI Suggestions (character ideas, plot ideas)</li>
                <li>❌ Featured Stories Section (premium users get more visibility)</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
  
            {/* Plan 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
              <p className="text-xl font-bold mb-4">$2.99 / month</p>
              <ul className="text-left text-gray-600 mb-6">
                <li>✅ Write Short Stories (single entry, like a movie)</li>
                <li>✅ Publish Stories (others can read, like & comment)</li>
                <li>✅ Read and Comment on Other Stories</li>
                <li>✅ Private Drafts (write but keep unpublished until ready)</li>
                <li>✅ No Ads</li>
                <li>✅ Write Anime Story Series (Episode 1, Episode 2, etc.)</li>
                <li>✅ Basic AI Suggestions (character ideas, plot ideas)</li>
                <li>✅ Featured Stories Section (premium users get more visibility)</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
  
            {/* Plan 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Ultimate Plan</h3>
              <p className="text-xl font-bold mb-4">Comming Soon</p>       
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SubscriptionPlans;
  