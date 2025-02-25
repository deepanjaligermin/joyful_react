import React, { useState } from 'react';
import tracker from '../assets/tracker.png';
import leaf from '../assets/leaf.png';
import target from '../assets/target.png';
import lock from '../assets/lock.png';
import bell from '../assets/bell.png';

const ProgressTracker = () => {
  const [data] = useState({
    trackPoint1: "Automated Progress Tracking",
    trackPoint1Subtext: "Effortlessly monitor your daily, weekly, and monthly achievements.",
    trackPoint2: "Customizable Goal Setting",
    trackPoint2Subtext: "Set personal goals and adjust targets as you progress.",
    trackPoint3: "Insightful Analytics",
    trackPoint3Subtext: "Gain a deeper understanding of your productivity patterns.",
    trackPoint4: "Motivational Milestones",
    trackPoint4Subtext: "Celebrate your achievements with milestones that inspire.",
    iconText: "Boost your productivity",
  });

  const featureIcons = [leaf, target, lock, bell];

  return (
    <div
      
      style={{ background: 'linear-gradient(180deg, #FFFFFF 27.96%, #D2DCFF 100%)' ,paddingTop:'4rem'}}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 min-h-[85vh]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <button
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-black border border-black/10 hover:bg-gray-50 transition-colors"
            onClick={() => { window.location.href = '#'; }}
            style={{
              fontSize: '0.8125rem',
              fontFamily: 'Inter',
              borderRadius: '10px',
              marginBottom: '1.5rem',
            }}
          >
            Boost your productivity
          </button>

          <p
            className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance text-gray-900"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,19,84,1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            A more effective way to track progress
          </p>
          <p
            className="mx-auto mt-6 max-w-2xl text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-pretty text-gray-600"
          >
            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
          </p>
        </div>

        <div className="w-full mx-auto mt-8">
          <img
            src={tracker}
            alt="Progress Tracker Dashboard"
            style={{
              objectFit: 'contain',
              height: '45vh',
              maxWidth: '92vw',
              margin: '0 auto',
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {[
            { title: data.trackPoint1, subtext: data.trackPoint1Subtext },
            { title: data.trackPoint2, subtext: data.trackPoint2Subtext },
            { title: data.trackPoint3, subtext: data.trackPoint3Subtext },
            { title: data.trackPoint4, subtext: data.trackPoint4Subtext },
          ].map((feature, index) => (
            <div key={index} className="text-left">
              <img
                className="mb-3"
                src={featureIcons[index]}
                alt={`Feature icon ${index + 1}`}
                width="24"
                height="24"
              />
              <h3
                className="font-medium mb-3 text-base sm:text-lg md:text-xl"
                style={{
                  fontFamily: 'Inter',
                  color: 'rgba(0, 0, 0, 1)',
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm sm:text-base md:text-lg text-black mb-3"
                style={{ fontFamily: 'Inter', fontWeight: '400' }}
              >
                {feature.subtext}
              </p>
              <button className="text-sm sm:text-base md:text-lg text-black">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;