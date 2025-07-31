const SixStepCommitment = () => {
  const steps = [
    { number: 1, title: "Book Free Consultation" },
    { number: 2, title: "Health Concern Discussion" },
    { number: 3, title: "Sample Collection at Home" },
    { number: 4, title: "Lab Diagnosis by Experts" },
    { number: 5, title: "Report Delivery on WhatsApp" },
    { number: 6, title: "Follow-up & Doctor Guidance" },
  ];

  return (
    <div className="bg-[#0c2d48] text-white py-12 px-4">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10">
        Your Health, Our 6-Step Commitment
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Circle */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 bg-[#5b9dbd] dark:bg-[#0f3b60] rounded-full flex flex-col items-center justify-center text-center text-white shadow-lg text-sm sm:text-base">
              <div className="text-2xl font-bold mb-1">{step.number}</div>
              <div>{step.title}</div>
            </div>

            {/* Arrow */}
            {index !== steps.length - 1 && (
              <div className="hidden sm:block absolute top-1/2 right-[-40px] transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M4 12h16m0 0l-4-4m4 4l-4 4" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixStepCommitment;
