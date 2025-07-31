// "use client";
// import React from "react";
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
//   ssr: false,
// });

// const achievementsList = [
//   { metric: "IIIT Pune", value: "4", postfix: "CSE" },
//   { metric: "Projects", value: "2", postfix: "+" },
//   { metric: "Hackathons", value: "6", postfix: "+" },
//   { metric: "LeetCode Questions", value: "400", postfix: "+" },
// ];

// export const AchievementsSection = () => {
//   return (
//     <section className="w-full py-12 px-4 sm:py-20 bg-gray-900">
//       <div className="max-w-6xl mx-auto border border-white/10 rounded-xl px-6 py-10 shadow-lg bg-gray-800/30 backdrop-blur">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           {achievementsList.map((achievement, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <h2 className="text-white text-4xl sm:text-5xl font-extrabold flex items-baseline gap-1">
//                 {achievement.prefix && (
//                   <span className="text-gray-400">{achievement.prefix}</span>
//                 )}
//                 <AnimatedNumbers
//                   animateToNumber={parseInt(achievement.value.replace(/,/g, ""))}
//                   locale="en-US"
//                   className="text-white"
//                   formatNumber={(val) => val.toLocaleString()}
//                   configs={(_, i) => ({
//                     mass: 1,
//                     friction: 100,
//                     tensions: 140 * (i + 1),
//                   })}
//                 />
//                 {achievement.postfix && (
//                   <span className="text-gray-400">{achievement.postfix}</span>
//                 )}
//               </h2>
//               <p className="text-[#ADB7BE] text-sm sm:text-base mt-1">
//                 {achievement.metric}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  { metric: "IIIT Pune", postfix: "CSE" },
  { metric: "Projects", value: "2", postfix: "+" },
  { metric: "Hackathons", value: "5", postfix: "+" },
  { metric: "LeetCode Questions", value: "400", postfix: "+" },
];

export const AchievementsSection = () => {
  return (
    <section className="w-full py-12 px-4 sm:py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto border border-white/10 rounded-xl px-6 py-10 shadow-lg bg-gray-800/30 backdrop-blur">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Heading */}
              <h2 className="text-white text-4xl sm:text-5xl font-extrabold flex items-baseline gap-1">
                {achievement.metric !== "IIIT Pune" ? (
                  <>
                    <AnimatedNumbers
                      animateToNumber={parseInt(achievement.value?.replace(/,/g, "") || "0")}
                      locale="en-US"
                      className="text-white"
                      formatNumber={(val) => val.toLocaleString()}
                      configs={(_, i) => ({
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (i + 1),
                      })}
                    />
                    {achievement.postfix && (
                      <span className="text-gray-400">{achievement.postfix}</span>
                    )}
                  </>
                ) : (
                  <span className="text-white text-4xl sm:text-5xl font-extrabold">
                    {achievement.postfix}
                  </span>
                )}
              </h2>

              {/* Label */}
              <p className="text-[#ADB7BE] text-sm sm:text-base mt-1">
                {achievement.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
