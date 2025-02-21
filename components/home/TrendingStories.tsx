import Image from "next/image";
import Link from "next/link";

const TrendingStories = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Trending Stories</h2>
        <div className="flex overflow-x-scroll space-x-6">
          {/* Example Story Cards */}
          <div className="flex-shrink-0 w-64 bg-gray-200 rounded-lg shadow-lg">
            <Image src="https://fakeimg.pl/600x400" alt="Story Cover" width={100} height={100} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Story Title</h3>
              <p className="text-gray-600 text-sm">Short description of the story...</p>
              <Link href="/story/1" passHref>
                <button className="text-blue-600 mt-3">Read More</button>
              </Link>
            </div>
          </div>
            {/* Example Story Cards */}
            <div className="flex-shrink-0 w-64 bg-gray-200 rounded-lg shadow-lg">
            <Image src="https://fakeimg.pl/600x400" alt="Story Cover" width={100} height={100} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Story Title</h3>
              <p className="text-gray-600 text-sm">Short description of the story...</p>
              <Link href="/story/1" passHref>
                <button className="text-blue-600 mt-3">Read More</button>
              </Link>
            </div>
          </div>
            {/* Example Story Cards */}
            <div className="flex-shrink-0 w-64 bg-gray-200 rounded-lg shadow-lg">
            <Image src="https://fakeimg.pl/600x400" alt="Story Cover" width={100} height={100} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Story Title</h3>
              <p className="text-gray-600 text-sm">Short description of the story...</p>
              <Link href="/story/1" passHref>
                <button className="text-blue-600 mt-3">Read More</button>
              </Link>
            </div>
          </div>
            {/* Example Story Cards */}
            <div className="flex-shrink-0 w-64 bg-gray-200 rounded-lg shadow-lg">
            <Image src="https://fakeimg.pl/600x400" alt="Story Cover" width={100} height={100} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Story Title</h3>
              <p className="text-gray-600 text-sm">Short description of the story...</p>
              <Link href="/story/1" passHref>
                <button className="text-blue-600 mt-3">Read More</button>
              </Link>
            </div>
          </div>  {/* Example Story Cards */}
          <div className="flex-shrink-0 w-64 bg-gray-200 rounded-lg shadow-lg">
            <Image src="https://fakeimg.pl/600x400" alt="Story Cover" width={100} height={100} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Story Title</h3>
              <p className="text-gray-600 text-sm">Short description of the story...</p>
              <Link href="/story/1" passHref>
                <button className="text-blue-600 mt-3">Read More</button>
              </Link>
            </div>
          </div>  {/* Example Story Cards */}
          <div className="flex-shrink-0 w-64 bg-gray-200 rounded-lg shadow-lg">
            <Image src="https://fakeimg.pl/600x400" alt="Story Cover" width={100} height={100} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Story Title</h3>
              <p className="text-gray-600 text-sm">Short description of the story...</p>
              <Link href="/story/1" passHref>
                <button className="text-blue-600 mt-3">Read More</button>
              </Link>
            </div>
          </div>
          {/* Repeat above block for each trending story */}
        </div>
      </div>
    </section>
  );
};

export default TrendingStories;
