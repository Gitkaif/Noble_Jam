import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DISPLAY_DURATION = 6; // seconds

const HeroSection = () => {
  const videoRef = useRef(null);
  const hideTimerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const startVisibilityCycle = () => {
    setIsVisible(true);

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, DISPLAY_DURATION * 1000);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    // When video restarts (time close to 0)
    if (video.currentTime < 0.25) {
      startVisibilityCycle();
    }
  };

  const handleVideoError = () => {
    setHasVideoError(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* VIDEO */}
      <div className="absolute inset-0 z-0">
        {!hasVideoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            onTimeUpdate={handleTimeUpdate}
            onError={handleVideoError}
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-red-900 to-green-900" />
        )}

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key="hero-content"
              className="max-w-4xl text-center sm:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Real Taste.{" "}
                <span className="text-green-200">Real Ingredients.</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl"
                variants={itemVariants}
              >
                From heritage fruit jams to creamy eggless mayo — crafted for
                modern Indian kitchens.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
                variants={itemVariants}
              >
                <motion.a
                  href="https://www.amazon.in/stores/page/82226F8A-BFF7-49BC-AB66-AAD004EF5779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-700 hover:bg-red-800 text-white py-3 px-8 rounded-full font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Shop on Amazon
                </motion.a>

                <motion.a
                  href="#products"
                  className="bg-white/10 backdrop-blur hover:bg-white/20 text-white py-3 px-8 rounded-full border border-white/20"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Products
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
