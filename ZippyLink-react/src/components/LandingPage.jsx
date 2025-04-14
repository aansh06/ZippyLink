import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

let desc =
  "Shorten, track, and organize all your URLs from one centralized dashboard. ZippyLink makes it easy to keep your links under control.";


const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE: " + token);

  const dashBoardNavigateHandler = () => {
    // navigate("/dashboard") 
    // const token = localStorage.getItem("token");
  if (token) {
    navigate("/dashboard");
  } else {
    navigate("/login");
  }
  };

  return (
    <div className="min-h-[calc(100vh-150px)] bg-background lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col lg:py-4 pt-12 lg:gap-10 gap-8 flex justify-between items-center">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-primary md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Welcome to ZippyLink.
          </motion.h1>
          <p className="text-text text-sm my-5">
            ZippyLink transforms long, cluttered URLs into sleek, shareable links — instantly. Whether you're sharing with friends or managing campaigns, ZippyLink keeps it fast, simple, and reliable.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-primary hover:bg-secondary w-40 text-white rounded-md py-2 transition-colors"
            >
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="border border-primary w-40 text-primary rounded-md py-2 transition-colors hover:bg-primary hover:text-white"
            >
              Create Short Link
            </motion.button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.png"
            alt="Hero Illustration"
          />
        </div>
      </div>

      <div className="sm:pt-8 pt-4">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-primary font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Trusted by Individuals and Teams Globally.
        </motion.p>

        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simplified URL Shortening"
            desc="Experience blazing-fast shortening with our clean and intuitive interface. Say goodbye to long, messy links."
          />
          <Card
            title="Real-Time Analytics"
            desc="Know exactly how your links perform. ZippyLink offers powerful analytics with click tracking, geo-location data, referrers, and more — all in real time."
          />
          <Card
            title="Security You Can Trust"
            desc="Every link is backed by advanced encryption and safety protocols. Your data stays protected, always."
          />
          <Card
            title="High Speed. High Uptime. Zero Hassle"
            desc="ZippyLink ensures lightning-fast redirection and minimal downtime so your links stay live and responsive — 24/7."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
