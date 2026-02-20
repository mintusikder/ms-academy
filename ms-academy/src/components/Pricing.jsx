import React from "react";

const pricingPlan = {
  title: "প্রো",
  price: "৳৫৫০০ ",
  features: [
    "সিগন্যাল নন রিপেন্ড",
    "লাইফটাইম অ্যাক্সেসের থাকবে, ফাইল সহ দেয়া হবে",
    " প্রতি দিন গোল্ড পেয়ারে ৮/৯ টা সিগন্যাল দিবে ১ মিনিট টাইম ফ্রেম ",
    "লাইফটাইম অ্যাক্সেস",
    "২৪/৭ সাপোর্ট",
  ],
};

const Pricing = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ইন্ডিকেটর প্রাইস
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            সমস্ত ট্রেডারের জন্য নমনীয় প্রাইসিং।
          </p>
        </div>

        {/* Full Width Card */}
        <div className="relative rounded-3xl p-12 shadow-xl border border-[#dc1414] bg-[#dc1414]/10 w-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#dc1414] text-white px-6 py-2 rounded-full text-sm font-semibold">
            শুরু করুন
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">{pricingPlan.title}</h3>
            <p className="text-5xl font-extrabold mb-8">{pricingPlan.price}</p>
          </div>

          <ul className="mb-10 space-y-4 text-gray-300 text-lg max-w-2xl mx-auto">
            {pricingPlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 justify-center">
                <span className="text-[#dc1414] text-xl">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="text-center">
            <button className="px-10 py-4 rounded-xl font-semibold text-xl bg-[#dc1414] text-white hover:bg-red-700 transition-all duration-300">
              👉 এখনই কিনুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
