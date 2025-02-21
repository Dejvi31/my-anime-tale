import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Unleash Your Inner Storyteller!</h1>
        <p className="text-xl mb-6">Create, share, and explore anime-inspired stories with MyAnimeTale.</p>
        <Link href="/create" passHref>
          <button className="bg-yellow-400 text-black px-6 py-3 text-lg rounded-lg hover:bg-yellow-500 transition">
            Start Creating
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
