import LeadTeam from "./../../data/MemberData/LeadTeam";

function Lead() {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Our Leading Team
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
          The dedicated individuals leading GDG ITER and driving our mission
          forward for 2025.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
        {LeadTeam.map((member) => (
          <div
            key={member.id}
            className="bg-indigo-200 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 hover:border-blue-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-28 h-28 mb-6 object-cover shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-blue-600">{member.role}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Lead;
