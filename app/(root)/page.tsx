import React from "react";
import SearchForm from "../components/SearchForm";
interface Info {
  query: string;
}
const Home = async ({ searchParams }: { searchParams: Info }) => {
  const query = searchParams.query || "";
  return (
    <>
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="heading text-white text-4xl font-extrabold mb-4 ml-50 mr-50">
            Build Startup <br></br> Start Networking
          </div>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Submit Ideas, Participate in Events, Win Sponsors
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <SearchForm query={query} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
