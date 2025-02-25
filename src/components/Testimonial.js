import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "UX Designer",
    company: "Dropbox",
    avatar: "/avatars/alex.jpg",
    quote: "It makes productivity fun. So important for me to keep track and plan things."
  },
  {
    id: 2,
    name: "Emma Stewart",
    role: "Project Manager",
    company: "Adobe",
    avatar: "/avatars/emma.jpg",
    quote: "This app has completely transformed how I manage my projects and deadlines."
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Developer",
    company: "Shopify",
    avatar: "/avatars/michael.jpg",
    quote: "I wish I found this sooner. My team's workflow has improved dramatically."
  },
  {
    id: 4,
    name: "Sarah Miller",
    role: "Product Designer",
    company: "Figma",
    avatar: "/avatars/sarah.jpg",
    quote: "Planning and maintaining tasks has never been easier. It's the perfect tool for my workflow."
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Marketing Lead",
    company: "Webflow",
    avatar: "/avatars/james.jpg",
    quote: "The clean UI and intuitive features make this stand out from other productivity apps."
  },
  {
    id: 6,
    name: "Olivia Chen",
    role: "Content Creator",
    company: "Notion",
    avatar: "/avatars/olivia.jpg",
    quote: "I'm endlessly impressed by the thoughtful considerations of my workflow needs."
  },
  {
    id: 7,
    name: "David Garcia",
    role: "Startup Founder",
    company: "Loom",
    avatar: "/avatars/david.jpg",
    quote: "Now that we use it, we can't even imagine how we managed everything before."
  },
  {
    id: 8,
    name: "Ava Baker",
    role: "Creative Director",
    company: "Dribbble",
    avatar: "/avatars/ava.jpg",
    quote: "I can finally organize my work and personal tasks in a clean way."
  },
  {
    id: 9,
    name: "Ryan Turner",
    role: "Engineering Manager",
    company: "Linear",
    avatar: "/avatars/ryan.jpg",
    quote: "Game-changer for remote teams. Communication and task tracking have never been smoother."
  }
];

// Group testimonials for desktop view
const testimonialRows = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
  testimonials.slice(6, 9)
];

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      autoScrollRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isMobile]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }

    if (touchStart - touchEnd < -50) {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
    
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  // Avatar component with fallback
  const AvatarWithFallback = ({ src, name, className }) => {
    const [imageError, setImageError] = useState(false);
    const initials = name.split(' ').map(n => n[0]).join('');
    
    return imageError ? (
      <div className={`flex items-center justify-center bg-gray-200 text-gray-600 font-medium rounded-full ${className}`}>
        {initials}
      </div>
    ) : (
      <img 
        src={src || "/api/placeholder/40/40"} 
        alt={name}
        className={`rounded-full ${className}`}
        onError={() => setImageError(true)}
      />
    );
  };

  const getVisibleTestimonials = () => {
    const visibleItems = [];
    const length = testimonials.length;
    
    const prevIndex = (activeIndex - 1 + length) % length;
    visibleItems.push({
      ...testimonials[prevIndex],
      position: 'prev',
      opacity: 'opacity-50'
    });
    
    visibleItems.push({
      ...testimonials[activeIndex],
      position: 'current',
      opacity: 'opacity-100'
    });
    
    const nextIndex = (activeIndex + 1) % length;
    visibleItems.push({
      ...testimonials[nextIndex],
      position: 'next',
      opacity: 'opacity-50'
    });
    
    return visibleItems;
  };

  const renderMobileCarousel = () => {
    const visibleTestimonials = getVisibleTestimonials();
    
    return (
      <div 
        className="h-96 overflow-hidden relative"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {visibleTestimonials.map((testimonial, index) => {
            const position = index === 0 ? 'top' : index === 2 ? 'bottom' : 'middle';
            
            return (
              <div 
                key={`mobile-${testimonial.id}`}
                className={`
                  absolute w-full max-w-sm p-6 transition-all duration-500 ease-in-out
                  ${testimonial.opacity}
                  ${position === 'top' ? '-translate-y-32' : ''}
                  ${position === 'middle' ? 'translate-y-0 scale-105' : ''}
                  ${position === 'bottom' ? 'translate-y-32' : ''}
                `}
              >
                <div className="flex items-center mb-4">
                  <AvatarWithFallback 
                    src={testimonial.avatar} 
                    name={testimonial.name} 
                    className="w-10 h-10 mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700">{`"${testimonial.quote}"`}</p>
              </div>
            );
          })}
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderDesktopLayout = () => {
    return (
      <div className="grid gap-8">
        {testimonialRows.map((row, rowIndex) => {
          const rowOpacity = rowIndex % 2 === 1 ? 'opacity-100' : 'opacity-50';
          
          return (
            <div 
              key={`row-${rowIndex}`} 
              className={`grid grid-cols-3 gap-8 ${rowOpacity} transition-opacity duration-300`}
            >
              {row.map(testimonial => (
                <div 
                  key={testimonial.id} 
                  className="p-4 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center mb-4">
                    <AvatarWithFallback 
                      src={testimonial.avatar} 
                      name={testimonial.name} 
                      className="w-10 h-10 mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{`"${testimonial.quote}"`}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="bg-white py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What our users say
          </h2>
        </div>
        
        {isMobile ? renderMobileCarousel() : renderDesktopLayout()}
      </div>
    </section>
  );
};

export default Testimonial;