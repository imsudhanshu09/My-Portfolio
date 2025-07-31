// import my_pic from '@/assets/images/Passport.jpg';
// import Image from 'next/image';
// import ArrowDown from '@/assets/icons/arrow-down.svg';

// export const HeroSection = () => {
//   return (
//     <div className="py-28 md:py-48 lg:py-60">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
//           {/* LEFT: Profile Picture & Status */}
//           <div className="flex flex-col items-center md:items-start">
//             <Image src={my_pic} className="w-[150px] h-[150px] rounded-full object-cover" alt="My Pic" />
//             <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 mt-4 inline-flex items-center gap-2 rounded-lg">
//               <div className="bg-green-500 size-2.5 rounded-full relative">
//                 <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
//               </div>
//               <div className="text-sm">Available for Internship/Job</div>
//             </div>
//           </div>

//           {/* RIGHT: Text content */}
//           <div className="flex-1 max-w-2xl">
//             <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-center md:text-left">
//               Hello! Welcome to my Portfolio
//             </h1>
//             <p className="mt-4 text-white/60 text-center md:text-left md:text-lg">
//               I'm Sudhanshu Kumar from IIIT Pune. I am in my final year pursuing Computer Science and
//               Engineering. I am a full stack developer with several strong projects and also have a command on
//               ML. Explore more about me!
//             </p>
//             <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mt-8 gap-4">
//               <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
//                 <span className="font-semibold">Explore my work</span>
//                 <ArrowDown className="size-4" />
//               </button>
//               <button className="inline-flex items-center gap-2 bg-white text-gray-900 border-white px-6 h-12 rounded-xl">
//                 <span>👋</span>
//                 <span className="font-semibold">Let's connect</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };







// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import my_pic from '@/assets/images/Passport.jpg';

// export const HeroSection = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             <TypeAnimation
//               sequence={[
//                 "Judy",
//                 1000,
//                 "Web Developer",
//                 1000,
//                 "Mobile Developer",
//                 1000,
//                 "UI/UX Designer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//             voluptuous.
//           </p>
//           <div>
//             <Link
//               href="/#contact"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
//             >
//               Hire Me
//             </Link>
//             <Link
//               href="/"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src={my_pic}
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={300}
//               height={300}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };







"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import my_pic from '@/assets/images/btp_pic.jpg';

export const HeroSection = () => {
  return (
    <section className="py-6 md:py-48 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            <span className="text-1xl sm:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Hello, I&apos;m{" "}
            </span>
              <br />
              <span className="block mt-2 text-2xl sm:text-5xl lg:text-7xl">
              <TypeAnimation
                sequence={[
                  "Sudhanshu Kumar",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "ML Enthusiast",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-1xl lg:text-xl mb-6 mt-2">
            Final year CSE student at IIIT Pune. Passionate about Web Development,
            Problem Solving and building meaningful tech.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 md:text-1xl rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-white hover:opacity-90 text-center border-2 border-transparent hover:border-white bg-clip-padding"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1JUMZp4CrVj01tZoDQ-nYmuuDxM-Xj-Zu/view?usp=drivesdk"
              className="relative md:text-1xl inline-block px-6 py-3 rounded-full text-white text-center
              before:absolute before:inset-0 before:rounded-full 
              before:bg-gradient-to-br before:from-emerald-400 before:to-sky-500 
              before:blur-sm before:transition-opacity before:opacity-100 
              hover:before:opacity-80
              after:absolute after:inset-[2px] after:rounded-full after:bg-[#121212]
              z-10"
            >
              <span className="relative z-20">Resume</span>
            </Link>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[350px] xl:h-[350px] bg-[#181818] rounded-full overflow-hidden">
            <Image
              src={my_pic}
              alt="My Profile"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

