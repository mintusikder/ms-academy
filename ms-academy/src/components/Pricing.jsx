import React from "react";

const pricingPlans = [
  {
    title: "স্টার্টার",
    price: "$৯৯",
    features: [
      "একটি মুদ্রা জোড়া",
      "বেসিক সিগন্যাল",
      "ইমেইল সাপোর্ট",
      "লাইফটাইম অ্যাক্সেস",
    ],
    popular: false,
  },
  {
    title: "প্রো",
    price: "$২৯৯",
    features: [
      "সকল মুদ্রা জোড়া",
      "উচ্চ সঠিকতার সিগন্যাল",
      "২৪/৭ সাপোর্ট",
      "স্বয়ংক্রিয় স্টপ লস ও টেক প্রফিট",
      "লাইফটাইম অ্যাক্সেস",
    ],
    popular: true, // Highlight this plan
  },
  {
    title: "এন্টারপ্রাইজ",
    price: "$৪৯৯",
    features: [
      "সকল মুদ্রা জোড়া + ক্রিপ্টো",
      "উন্নত সিগন্যাল",
      "প্রায়োরিটি সাপোর্ট",
      "কাস্টম সেটিংস",
      "লাইফটাইম অ্যাক্সেস",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            সঠিক পরিকল্পনা বেছে নিন <span className="text-[#dc1414]">আপনার জন্য</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            সমস্ত ট্রেডারের জন্য নমনীয় প্রাইসিং বিকল্প। আপনার ট্রেডিং স্টাইল এবং বাজেট অনুযায়ী একটি পরিকল্পনা বেছে নিন।
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col items-center text-center shadow-lg border border-gray-800 transition-all duration-300
                ${plan.popular ? "bg-[#dc1414]/10 border-[#dc1414] scale-105" : "hover:bg-[#dc1414]/5"}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 bg-[#dc1414] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  সবচেয়ে জনপ্রিয়
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>

              <ul className="mb-6 space-y-3 text-gray-400">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#dc1414]">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button className={`mt-auto px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300
                ${plan.popular ? "bg-[#dc1414] text-white hover:bg-red-700" : "border border-[#dc1414] text-[#dc1414] hover:bg-[#dc1414] hover:text-white"}
              `}>
                শুরু করুন
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
