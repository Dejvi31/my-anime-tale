import { SignUpButton } from "@clerk/nextjs";

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Join thousands of anime fans in crafting incredible stories!</h2>
        
        <SignUpButton mode="modal">
          <button className="bg-black text-yellow-400 px-8 py-4 text-lg rounded-lg hover:bg-gray-900 transition">
            Sign Up Now
          </button>
        </SignUpButton>
      </div>
    </section>
  );
};

export default FinalCTA;
