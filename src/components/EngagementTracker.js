import React, { useState, useEffect } from 'react';
import cube1 from '../assets/cube1.png';
import cube2 from '../assets/cube2.png';

const Engagement = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:1337/api/engagement-page');
  //       const result = await response.json();
  //       setData(result.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (isLoading || !data) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-pulse text-lg font-medium">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="relative isolate bg-white min-h-screen">
      {/* Main content container */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Header section */}
        <div className="mx-auto max-w-4xl text-center">
          <button
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-black border border-black/10 hover:bg-gray-50 transition-colors mb-4 sm:mb-6"
            onClick={() => { window.location.href = '#'; }}
          >
            Everything you need
          </button>

          <h1
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,19,84,1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Streamlined for easy management
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-pretty text-gray-600">
            Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
          </p>
        </div>

        {/* Feature cards section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 place-items-center">
              {/* Integration ecosystem card */}
              <div className="flex flex-col items-center max-w-sm p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto">
                <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[329px]">
                  <img
                    src={cube1}
                    alt="Integration ecosystem"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900 text-center">
                  Integration ecosystem
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">
                  Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.
                </p>
              </div>

              {/* Goal setting card */}
              <div className="flex flex-col items-center max-w-sm p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto">
                <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[329px]">
                  <img
                    src={cube2}
                    alt="Goal setting and tracking"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900 text-center">
                  Goal setting and tracking
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">
                  Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;