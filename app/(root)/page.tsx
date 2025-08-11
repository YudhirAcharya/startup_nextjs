import React from "react";
import SearchForm from "../../components/SearchForm";
import { title } from "process";
import StartupCard from "@/components/StartupCard";
interface Info {
  query: string;
}
type StartupCardType = {
  _createdAt: Date;
  views: number;
  author: { _id: number; name: string };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
};

const Home = async ({ searchParams }: { searchParams: Info }) => {
  const query = searchParams.query || "";
  const posts: StartupCardType[] = [
    {
      _createdAt: new Date(), //  _ => private
      views: 50,
      author: { _id: 1, name: "elon" },
      _id: 1,
      description: "abc",
      image:
        "https://cdn.pixabay.com/photo/2017/07/07/08/37/startup-2480722_640.jpg",
      category: "aa",
      title: "bb",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Build Startup <br /> Start Networking
          </h1>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Submit Ideas, Participate in Events, Win Sponsors
          </p>
          <div className="mt-8 flex justify-center">
            <SearchForm query={query} />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-6 py-12">
        <p className="text-lg font-medium mb-6 text-gray-700">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts?.length > 0 &&
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
