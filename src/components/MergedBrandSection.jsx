
import { motion } from "framer-motion";

const MergedBrandSection = () => {
  return (
   <section
  className="
    relative
    w-full
    min-h-screen  // Changed from py-24 to min-h-screen
    px-4
    sm:px-6
    lg:px-8
    bg-cover
    bg-center
    overflow-hidden
    flex items-center  // Added to vertically center content
  "
  style={{
    backgroundImage: 'url("/images/brand-bg2.jpg")', // neutral bg
  }}
>
      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* ================= MAIN PARENT BRAND ================= */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.35em] text-2xl text-gray-600 mb-4">
            Champion Farm Products
          </p>

          <div className="w-24 h-[1px] bg-gray-400 mx-auto"></div>
        </motion.div>

        {/* ================= BRAND FAMILY ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ================= NOBLE ================= */}
          <motion.div
            className="flex flex-col items-center text-center space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <img
              src="/images/noble-logo.png"
              alt="Noble"
              className="h-24 sm:h-28 lg:h-38 w-auto"
            />

            {/* Tagline */}
            <div className="relative inline-block">
              {/* Soft highlight */}
              <span className="
    absolute
    inset-0
    bg-green-100/70
    rounded-full
    -z-10
    blur-[1px]
  "></span>

              <p className="
    relative
    px-6
    py-2
    text-2xl
    sm:text-3xl
    font-light
    text-gray-900
    tracking-wide
  ">
                Spread the Goodness
              </p>
            </div>


            {/* Subtext */}
            <p className="max-w-md text-gray-600 leading-relaxed">
              Crafted with real fruits, inspired by tradition and made for
              everyday moments.
            </p>
          </motion.div>

          {/* ================= MAYVILLE ================= */}
          <motion.div
            className="flex flex-col items-center text-center space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <img
              src="/images/jam-logo-t.png"
              alt="MayVille"
              className="h-24 sm:h-28 lg:h-38 w-auto"
            />

            {/* Tagline */}
            <div className="relative inline-block">
              {/* Soft highlight */}
              <span className="
                absolute
                inset-0
                bg-green-100/70
                rounded-full
                -z-10
                blur-[1px]
              "></span>

              <p className="
                   relative
                   px-6
                   py-2
                   text-2xl
                   sm:text-3xl
                   font-light
                   text-gray-900
                   tracking-wide
              ">
                Always wanting more
              </p>
            </div>


            {/* Subtext */}
            <p className="max-w-md text-gray-600 leading-relaxed">
              Creamy, comforting flavours designed to elevate modern meals.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MergedBrandSection;