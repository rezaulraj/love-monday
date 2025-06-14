import React from "react";

const SubHeroHome = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-indigo-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Icon/Logo */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 ">
            <span className="text-secondary font-merriweather tracking-wider">
              Love
            </span>{" "}
            <span className="text-primary"> Monday</span> is your trusted
            international staffing agency
          </h2>

          {/* Main paragraph */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Connecting companies in{" "}
            <span className="font-medium text-indigo-500 font-merriweather tracking-wider">
              Romania
            </span>
            ,{" "}
            <span className="font-medium text-indigo-500 font-merriweather tracking-wider">
              Malta
            </span>
            , and{" "}
            <span className="font-medium text-indigo-500 font-merriweather tracking-wider">
              Sharjah
            </span>{" "}
            with highly skilled workers.
          </p>

          {/* Highlighted secondary paragraph */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <p className="text-gray-700 italic font-light">
              "We don't just fill positions, we support your growth with{" "}
              <span className="font-medium text-orange-500">
                ethical hiring
              </span>
              ,{" "}
              <span className="font-medium text-orange-500">
                smooth processes
              </span>
              , and{" "}
              <span className="font-medium text-orange-500">
                exceptional service
              </span>{" "}
              from start to finish."
            </p>
          </div>

          {/* Stats/Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Countries Served",
                value: "3+",
                desc: "Romania, Malta, Sharjah",
              },
              {
                title: "Focus Area",
                value: "Ethical",
                desc: "Responsible hiring practices",
              },
              {
                title: "Service",
                value: "End-to-End",
                desc: "From recruitment to onboarding",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xs hover:shadow-sm transition-shadow"
              >
                <p className="text-3xl font-bold text-indigo-600 mb-2 font-merriweather tracking-wider">
                  {item.value}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 font-merriweather tracking-wider">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-lato">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeroHome;
