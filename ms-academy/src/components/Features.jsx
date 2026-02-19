import React from "react";
import { FaBolt, FaShieldAlt, FaClock, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={30} />,
    title: "নন-রিপেন্ট",
    description:
      "সিগন্যালগুলো রিপেন্ট হয় না, তাই প্রতিটি ট্রেডের জন্য আপনি নির্ভরযোগ্য এবং বিশ্বাসযোগ্য এন্ট্রি পাবেন।",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "লাইফটাইম লাইসেন্স",
    description:
      "একবার কিনলেই সকল সমর্থিত প্ল্যাটফর্মে আজীবন ব্যবহার করতে পারবেন, কোনো অতিরিক্ত খরচ ছাড়া।",
  },
];

const Features = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            কেন বেছে নেবেন <span className="text-[#dc1414]">FXPro ইন্ডিকেটর</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            আমাদের ফরেক্স ইন্ডিকেটর নির্ভরযোগ্য, উচ্চ-সঠিকতার সিগন্যাল এবং স্বয়ংক্রিয় ঝুঁকি ব্যবস্থাপনা বৈশিষ্ট্য সরবরাহ করে সকল ট্রেডারের জন্য।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:bg-[#dc1414]/20 transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg"
            >
              <div className="text-[#dc1414] mb-4">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
