import React, { useState, useEffect } from 'react';

const CheckIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    priceMonthly: '$0',
    description: "",
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support'
    ],
    buttonText: 'Get started for free',
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    tag: 'Most Popular',
    priceMonthly: '$9',
    description: "",
    features: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support'
    ],
    buttonText: 'Sign up now',
    featured: true,
  },
  {
    name: 'Business',
    id: 'tier-business',
    priceMonthly: '$19',
    description: "",
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features'
    ],
    buttonText: 'Sign up now',
    featured: false,
  },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Pricing = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:1337/api/tracker-bar');
  //       const result = await response.json();
  //       setData(result.data);
  //     } catch (error) {
  //       console.error('Error loading data:', error);
  //       // Fallback data
  //       setData({
  //         iconText: "Boost your productivity",
  //         mainHeading: "A more effective way to track progress",
  //         mainSubheading: "Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer."
  //       });
  //     }
  //   };
    
  //   fetchData();
  // }, []);

  // if (!data) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-pulse text-lg font-medium">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="relative isolate bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-full max-w-6xl "
        />
      </div>

      {/* Header Section */}
      <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <div className="mb-4 sm:mb-6">
          <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-black border border-black/10 hover:bg-gray-50 transition-colors">
            Boost your productivity
          </button>
        </div>

        <h1 
          className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance text-gray-900"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,19,84,1))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          A more effective way to track progress
        </h1>
        
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base md:text-lg lg:text-xl font-medium text-pretty text-gray-600">
          Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-8 sm:mt-12 max-w-md md:max-w-4xl lg:max-w-6xl">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:items-center">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 
                  'bg-gray-900 text-white shadow-2xl md:scale-105 md:-my-2 md:z-10' : 
                  index === 0 ? 'bg-white text-gray-900 shadow-md md:max-w-xs' : 'bg-white text-gray-900 shadow-md md:max-w-lg',
                'rounded-2xl p-6 ring-1 ring-gray-200 hover:ring-gray-300 transition-all w-full flex flex-col'
              )}
            >
              {tier.tag && (
                <div className="text-xs uppercase font-semibold text-right text-indigo-300 mb-2">
                  {tier.tag}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-lg font-medium'
                )}>
                  {tier.name}
                </h3>
                <div className="mt-3 flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {tier.priceMonthly}
                  </span>
                  <span className={classNames(
                    tier.featured ? 'text-gray-400' : 'text-gray-500',
                    'ml-1 text-sm'
                  )}>
                    /monthly
                  </span>
                </div>
              </div>

              <button
                className={classNames(
                  tier.featured 
                    ? 'bg-white text-black hover:bg-gray-100' 
                    : 'bg-black text-white hover:bg-gray-800',
                  'mt-2 mb-6 rounded-md py-2.5 px-3.5 text-sm font-medium w-full'
                )}
              >
                {tier.buttonText}
              </button>

              <ul className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon />
                    <span className={classNames(
                      tier.featured ? 'text-gray-300' : 'text-gray-600',
                      'text-sm sm:text-base'
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;