import React, { useState } from "react";

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState("বিকাশ");

  const plans = {
    বিকাশ: "৳ ৫৫০০",
  };

  return (
    <section className="bg-black text-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE - Billing Form */}
        <div className="bg-gray-900 p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Billing Details</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-gray-400">পূর্ণ নাম</label>
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full p-3 rounded-xl bg-black border border-gray-700 focus:border-[#dc1414] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">ফোন নম্বর</label>
              <input
                type="text"
                placeholder="আপনার ফোন নম্বর"
                className="w-full p-3 rounded-xl bg-black border border-gray-700 focus:border-[#dc1414] outline-none"
              />
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - Order Summary */}
        <div className="bg-gray-900 p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Your Order</h2>

          {/* Plan Selection */}
          <div className="space-y-4 mb-6">
            {Object.keys(plans).map((plan) => (
              <div
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`p-4 rounded-xl cursor-pointer border transition-all duration-300
                  ${
                    selectedPlan === plan
                      ? "border-[#dc1414] bg-[#dc1414]/10"
                      : "border-gray-700 hover:border-[#dc1414]"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{plan}</span>
                  <span className="text-[#dc1414] font-bold">
                    {plans[plan]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-gray-700 pt-6 flex justify-between text-xl font-bold">
            <span>মোট</span>
            <span className="text-[#dc1414]">{plans[selectedPlan]}</span>
          </div>

          {/* Payment Button */}
          <button className="mt-8 w-full bg-[#dc1414] hover:bg-red-700 transition-all duration-300 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-[#dc1414]/40">
            অর্ডার কনফার্ম করুন
          </button>

          <p className="text-gray-500 text-sm mt-4 text-center">
            🔒 নিরাপদ পেমেন্ট • লাইফটাইম অ্যাক্সেস
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
