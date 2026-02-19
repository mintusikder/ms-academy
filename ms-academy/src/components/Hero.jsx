import React from "react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#dc1414] font-semibold mb-4 tracking-wider uppercase">
            প্রিমিয়াম ফরেক্স ট্রেডিং টুল
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            ৮০%+ সঠিক <span className="text-[#dc1414]">ফরেক্স ইন্ডিকেটর</span>
            <br />
            স্মার্ট ট্রেডারদের জন্য
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            নন-রিপেন্ট সিগন্যাল • স্বয়ংক্রিয় স্টপ লস ও টেক প্রফিট • সমস্ত জোড়া ও টাইমফ্রেমে কার্যকর • লাইফটাইম লাইসেন্স
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#dc1414] hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#dc1414]/40">
              👉 এখনই কিনুন
            </button>
            <button className="border border-[#dc1414] text-[#dc1414] hover:bg-[#dc1414] hover:text-white transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-lg">
              👉 ফ্রি ডেমো নিন
            </button>
          </div>
        </div>

        {/* RIGHT SIDE SLIDER - CENTERED */}
        <div className="flex justify-center items-center w-full">
          <Slider />
        </div>

      </div>
    </section>
  );
};

export default Hero;
