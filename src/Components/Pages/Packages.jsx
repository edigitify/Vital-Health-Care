import React from 'react';

const Packages = () => {
  const packages = [
    {
      name: "Basic Health Checkup",
      price: "$99",
      description: "Essential health screening for general wellness",
      features: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting)",
        "Cholesterol Profile",
        "Liver Function Tests",
        "Kidney Function Tests",
        "Urine Analysis"
      ],
      popular: false
    },
    {
      name: "Comprehensive Health Package",
      price: "$199",
      description: "Complete health assessment with detailed analysis",
      features: [
        "All Basic Health Checkup tests",
        "Thyroid Function Tests",
        "Cardiac Markers",
        "Vitamin D & B12",
        "Iron Studies",
        "ESR & CRP",
        "ECG",
        "Chest X-Ray"
      ],
      popular: true
    },
    {
      name: "Executive Health Package",
      price: "$399",
      description: "Premium health screening for executives",
      features: [
        "All Comprehensive Health Package tests",
        "Cancer Markers",
        "Hormone Profile",
        "Bone Density Test",
        "Stress Test",
        "Ultrasound Abdomen",
        "Consultation with Specialist"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health Checkup Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of health checkup packages designed to meet your specific needs.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                  <span className="text-gray-500">/package</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 ${
                  pkg.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Home Collection</h3>
              <p className="text-gray-600 text-sm">Free sample collection at your doorstep</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Online Reports</h3>
              <p className="text-gray-600 text-sm">Get your reports online within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Consultation</h3>
              <p className="text-gray-600 text-sm">Free consultation with our medical experts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Express Service</h3>
              <p className="text-gray-600 text-sm">Same day reports for urgent cases</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Book Your Health Checkup?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to schedule your appointment or learn more about our packages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
              Book Appointment
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;