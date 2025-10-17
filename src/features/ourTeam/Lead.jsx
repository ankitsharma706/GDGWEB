import LeadTeam from "./../../data/MemberData/LeadTeam";
import Logo from './../../assets/logo.png'
function Lead() {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          Our Leading Team
        </h2>
        <p className="text-lg sm:text-xl  max-w-3xl mx-auto">
          The dedicated individuals leading GDG ITER and driving our mission
          forward for 2025.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
        {LeadTeam.map((member) => (
          <div
            key={member.id}
            className="home-sessions home-margin home-margin  shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 hover:border-blue-300"
          >
            <div className="relative w-[220px] h-[250px] flex items-center justify-center bg-transparent">
              {/* Image inside the frame */}
              <img
                src={member.image}
                alt="Member"
                className="w-[220px] h-[250px] object-cover"
              />

              {/* Frame Shape */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="h-[20%] w-[20%] absolute left-0 top-0">
                  <img src={Logo} alt={Logo} className="h-[100%]" />
                </div>
                <div className="h-[20%] w-[27%] bg-gray-100 bottom-0 absolute right-0">
                <p className=" h-[100%] w-[100%] text-amber-100">
                    🌐
                  </p>
                </div>
                {/* Top line */}
                <div className="absolute top-0 ml-11.5 left-0 w-[80%] h-[2px] bg-blue-400"></div>
                <div className="absolute top-[20%] left-0 w-[45px] h-[2px] bg-blue-400"></div>

                {/* Left line */}

                <div className="absolute top-0 left-0 mt-12 h-[80%] w-[2px] bg-blue-400"></div>

                <div className="absolute bottom-[43%] right-0 w-[2px]  h-[140px] bg-blue-400"></div>
                {/* Bottom left line */}
                <div className="absolute bottom-0 left-0 w-[73%] h-[2px] bg-blue-400"></div>

                {/* Bottom-right short horizontal */}
                <div className="absolute bottom-[20%] right-0 w-[60px] h-[2px] bg-blue-400"></div>

                {/* Right short vertical */}
                <div className="absolute top-0 left-[20%] w-[2px] h-[52px] bg-blue-400"></div>
                <div className="absolute bottom-0 right-[27%] w-[2px] h-[52px] bg-blue-400"></div>
                <div className="absolute bottom-[20%] right-0 w-[2px] h-[60px] bg-blue-400"></div>
              </div>
            </div>

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