import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Placeholder client logos
  const clients = [
    { id: 1, logo: 'https://mir-s3-cdn-cf.behance.net/projects/404/5b38d8240009681.Y3JvcCw5OTksNzgyLDAsMTA4.jpg', alt: 'Client 1' },
    { id: 2, logo: 'https://www.shutterstock.com/image-vector/customer-experience-icon-people-team-600nw-2470978373.jpg', alt: 'Client 2' },
    { id: 3, logo: 'https://www.shutterstock.com/image-vector/experts-line-icon-design-thin-260nw-2643425249.jpg', alt: 'Client 3' },
    { id: 4, logo: 'https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?semt=ais_hybrid&w=740&q=80', alt: 'Client 4' },
    { id: 5, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS462PB7zFFN4SP22TH8prrwiWq4xAAXJBueg&s', alt: 'Client 5' },
    { id: 6, logo: 'https://img.freepik.com/free-vector/hub-logo-template_23-2149852444.jpg?semt=ais_hybrid&w=740&q=80', alt: 'Client 6' },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Working with this team was an absolute pleasure. Their attention to detail and creative approach helped us achieve outstanding results that exceeded our expectations.",
      name: "John Doe",
      position: "CEO, TechCorp",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      text: "The level of professionalism and expertise is unmatched. They delivered our project on time and within budget, and the results speak for themselves.",
      name: "Jane Smith",
      position: "Marketing Director, InnovateX",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 3,
      text: "Exceptional service from start to finish. The team understood our vision and brought it to life in ways we couldn't have imagined.",
      name: "Michael Johnson",
      position: "Founder, Creative Labs",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
  <div 
  className="w-full min-h-screen bg-cover bg-center bg-no-repeat "
  style={{
    backgroundImage: 'url("/images/brand-bg2.jpg")',
  }}
>
      {/* Clients Showcase */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Lobster, cursive" }}>Our Valued Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've had the privilege to work with some of the most innovative companies in the industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clients.map((client) => (
              <div key={client.id} className="p-4 w-full flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.alt} 
                  className="h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 
              className="text-4xl md:text-5xl font-bold" 
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Trusted by Industry Leaders
              <br />
              Across the Globe
            </h3>
            <h2
              className="text-[#FF3366] text-2xl font-medium mt-[20px]"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              TESTIMONIALS
            </h2>
          </div>

          <div className="max-w-[1000px] mx-auto flex flex-col items-center relative bg-white rounded-lg p-6 shadow-lg">
            <span className="absolute -left-10 -top-10 text-[#FF3366] text-[100px] md:text-[120px] font-serif leading-none hidden md:block">"</span>

            <div className="text-center w-full">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 leading-relaxed px-4 md:px-12">
                {testimonials[currentTestimonial].text}
              </p>
              
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gray-200">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? "bg-[#FF3366] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;