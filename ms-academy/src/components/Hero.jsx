import React from "react";
import Slider from "./Slider";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#dc1414] font-semibold mb-4 tracking-wider uppercase">
            প্রিমিয়াম ফরেক্স ট্রেডিং ইন্ডিকেটর 
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            ৮০%+ সঠিক <span className="text-[#dc1414]">ফরেক্স ইন্ডিকেটর</span>
            <br />
            স্মার্ট ট্রেডারদের জন্য
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            নন-রিপেন্ট সিগন্যাল • প্রতি দিন গোল্ড পেয়ারে ৮/৯ টা সিগন্যাল দিবে ১ মিনিট টাইম ফ্রেম  • লাইফটাইম লাইসেন্স
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={"/checkout"} className="bg-[#dc1414] hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#dc1414]/40">
              👉 এখনই কিনুন
            </Link>
       
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
