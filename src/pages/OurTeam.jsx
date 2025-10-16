import Design from "../features/ourTeam/Design";
import Lead from "../features/ourTeam/Lead";
import Media from "../features/ourTeam/Media";
import PR from "../features/ourTeam/PR";
import Tech from "../features/ourTeam/Tech";

const OurTeam = () => {
  return (
    <section
      id="our-team"
      className="py-24 bg-gradient-to-br from-indigo-300 to-purple-700 via-indigo-500 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <Lead />
          <Tech />
          <Design />
          <PR />
          <Media />

          <div className="text-center mt-16">
            <div className="bg-indigo-200 rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Join Our Team
              </h3>
              <p className="text-gray-800 mb-6 text-lg">
                Want to be part of our amazing team? We're always looking for
                passionate individuals to help grow our community.
              </p>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-indigo-500/25">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
