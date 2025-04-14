import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8  ">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic  mb-3">
          About ZippyLink
        </h1>
        <p className="text-gray-700 text-sm  mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
        Shorten, track, and organize all your URLs from one centralized dashboard. ZippyLink makes it easy to keep your links under control.


        </p>
        <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
              Create Short Links in a Zip
              </h2>
              <p className="text-gray-600">
              Just paste, click, and go. Generate concise, branded URLs in seconds — no complex setup, just pure speed and simplicity.

              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
              Trusted by Individuals and Teams Globally
              </h2>
              <p className="text-gray-600">
              
              
              From personal use to enterprise-grade campaigns, ZippyLink is trusted by users around the world for its performance and reliability.              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEdit className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
              Real-Time Analytics
              </h2>
              <p className="text-gray-600">
             
              Know exactly how your links perform. ZippyLink offers powerful analytics with click tracking, geo-location data, referrers, and more — all in real time.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
           High Speed. High Uptime. Zero Hassle.
              </h2>
              <p className="text-gray-600">
              
              ZippyLink ensures lightning-fast redirection and minimal downtime so your links stay live and responsive — 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;