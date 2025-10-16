import Events from "../data/WeeklyCadence/Events";

const WeeklyCadenceSection = () => {
 
  return (
    <section
      id="weekly-cadence"
      className="py-20 bg-gradient-to-br from-indigo-300 to-purple-700 via-indigo-500  text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
            Weekly Cadence
          </h2>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-300 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl text-gray-100 font-semibold mb-6">
                  Regular Activities
                </h3>
                <div className="space-y-4">
                  {Events.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium w-23 text-center">
                        {item.day}
                      </div>
                      <span className="text-gray-100">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">
                  Special Events
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-indigo-200 to-purple-700 border-l-4 border-yellow-400 p-4">
                    <h4 className="font-semibold text-gray-100">
                      Monthly Hackathons
                    </h4>
                    <p className="text-sm text-gray-100">
                      First Saturday of every month
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-200 to-purple-700 border-l-4 border-green-400 p-4">
                    <h4 className="font-semibold text-gray-100">
                      Guest Speaker Sessions
                    </h4>
                    <p className="text-sm text-gray-100 ">
                      Third Wednesday of every month
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-200 to-purple-700 border-l-4 border-purple-400 p-4">
                    <h4 className="font-semibold text-gray-100 ">
                      Project Demos
                    </h4>
                    <p className="text-sm text-gray-100">
                      Last Friday of every month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyCadenceSection;
