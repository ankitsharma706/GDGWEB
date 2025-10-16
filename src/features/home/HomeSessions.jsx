function HomeSessions() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 md:py-24">
      <div className="container mx-auto px-12 md:px-20 lg:px-32 xl:px-40">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Events Hosted</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold text-yellow-400 mb-2">20+</div>
              <div className="text-gray-300">Workshops</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">Years Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSessions
