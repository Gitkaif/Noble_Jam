import { motion } from "framer-motion";

const BrandIntro = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        min-h-screen
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: 'url("/images/brand-bg2.jpg")',
      }}
    >
      {/* PREMIUM BRAND HEADING */}
      <div className="absolute top-0 left-0 w-full z-20 pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="inline-block bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wider text-gray-800">
              The Noble Experience
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent my-2"></div>
            <p className="text-sm md:text-base text-gray-600 font-light">Premium Quality • Timeless Taste</p>
          </motion.div>
        </div>
      </div>
      {/* 
        Optional overlay (ENABLE only if text readability is bad)
        Uncomment if needed
      */}
      {/*
      <div className="absolute inset-0 bg-white/70"></div>
      */}

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row">
        
        {/* LEFT SIDE - INGREDIENT IMAGE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
          <motion.div
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true }}
          >
            <img
              src="/images/abc.png"
              alt="Fresh fruit ingredients"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE - TEXT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-12 lg:py-20">
          
          {/* LOGO */}
          <motion.div
            className="mb-10 lg:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true }}
          >
            <img
              src="/images/noble-logo.png"
              alt="JAM & MAYO"
              className="h-24 sm:h-32 lg:h-40 xl:h-48 w-auto max-w-[400px] lg:max-w-[600px] xl:max-w-[700px]"
            />
          </motion.div>

          {/* CONTENT */}
          <div className="max-w-2xl w-full space-y-8 lg:space-y-12">
            
            {/* HEADLINE */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
              viewport={{ once: true }}
            >
              Taste is more than flavour it's memory.
            </motion.h1>

            {/* TAGLINE */}
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
              viewport={{ once: true }}
            >
              – Crafted with real fruit. Made for real moments.
            </motion.p>

            {/* RESERVED FOR FUTURE CONTENT */}
            <motion.div
              className="space-y-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
