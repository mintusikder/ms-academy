import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "./Slider";

// Sample student reviews
const reviews = [
  {
    name: "রাফি আহমেদ",
    role: "FXPro ব্যবহারকারী",
    message:
      "আমি এই ফরেক্স ইন্ডিকেটর ব্যবহার করে ট্রেডিংয়ে বিশাল লাভ পেয়েছি। সিগন্যালগুলো খুবই সঠিক এবং সহজে ব্যবহারযোগ্য।",
    rating: 5,
    avatar: "/avatars/student1.jpg",
  },
  {
    name: "সাবিনা খাতুন",
    role: "FXPro ব্যবহারকারী",
    message:
      "লাইফটাইম লাইসেন্স এবং অটোমেটেড স্টপ লস/টেক প্রফিট ফিচারগুলো আমার ট্রেডিংকে অনেক সহজ করে দিয়েছে।",
    rating: 5,
    avatar: "/avatars/student2.jpg",
  },
  {
    name: "তানভীর হাসান",
    role: "FXPro ব্যবহারকারী",
    message:
      "আমি প্রো প্ল্যানটি ব্যবহার করছি। উচ্চ সঠিকতার সিগন্যালগুলো আমাকে স্মার্ট ট্রেডিং সিদ্ধান্ত নিতে সাহায্য করছে।",
    rating: 5,
    avatar: "/avatars/student3.jpg",
  },
];

const StudentReviews = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            আমাদের 0% <span className="text-[#dc1414]">নেগেটিভ রিভিউ</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            যারা আমাদের Forex Indicator ব্যবহার করছে, তাদের কিছু রিভিউ দেখুন।
          </p>
        </div>

        {/* Reviews Grid */}
        <Slider></Slider>
        <div className="flex justify-center items-center mt-12">
          <button className="bg-[#dc1414] hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#dc1414]/40">
            👉 এখনই কিনুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;
