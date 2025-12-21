import React from 'react';

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Fruit Jams',
      description: 'Crafted with fresh, natural fruits',
      image: '/images/mixed-fruit.png',
      link: '/jams'
    },
    {
      id: 2,
      name: 'Eggless Mayonnaise',
      description: 'Creamy and delicious, made without eggs',
      image: '/images/mayo.png',
      link: '/mayonnaise'
    }
  ];

  // Split title into two lines for green highlight bars
  const splitTitle = (title) => {
    const words = title.split(' ');
    const midPoint = Math.ceil(words.length / 2);

    return {
      firstLine: words.slice(0, midPoint).join(' '),
      secondLine: words.slice(midPoint).join(' ')
    };
  };

  return (
    <section
      className="
        relative
        w-full
        py-20
        px-4
        sm:px-6
        lg:px-8
        mt-[-100px]
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: 'url("/images/brand-bg.jpg")',
      }}
    >
      {/* Decorative circular cutout image */}
      <img
        src="/images/fruit-cutt.png"
        alt="Fruit decoration"
        className="
          hidden
          lg:block
          absolute
          top-[-30px]
          right-[-120px]
          w-[420px]
          h-[420px]
          object-contain
          pointer-events-none
        "
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Our Products
          </h2>
          <div className="w-20 h-0.5 bg-red-500 mx-auto"></div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category) => {
            const { firstLine, secondLine } = splitTitle(category.name);

            return (
              <div
                key={category.id}
                className="
                  relative
                  w-full
                  max-w-[420px]
                  mx-auto
                  rounded-lg
                  border-2
                  border-red-200
                  bg-transparent
                  overflow-hidden
                  flex
                  flex-col
                "
                style={{ minHeight: '600px' }}
              >
                {/* Accent line */}
                <div className="w-16 h-1 bg-red-500 mx-6 mt-6"></div>

                {/* Title */}
                <div className="px-6 pt-4 pb-2 space-y-2">
                  <div className="w-fit bg-red-500 px-4 py-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {firstLine}
                    </h3>
                  </div>
                  <div className="w-fit bg-red-500 px-4 py-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {secondLine}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="px-6 py-4">
                  <p className="text-white text-base md:text-xl">
                    {category.description}
                  </p>
                </div>

                {/* Product Image */}
                <div className="flex-1 flex items-end justify-center mt-auto">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-auto object-contain"
                    style={{
                      marginBottom: '-20px',
                      maxHeight: '400px'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
