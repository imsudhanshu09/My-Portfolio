import OTH from "@/assets/images/OTH.jpg";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import GithubIcon from '@/assets/icons/github.svg';

const portfolioProjects = [
  {
    title: "Online Treasure Hunt",
    results: [
      { title: "Real-time online treasure hunt game." },
      { title: "Handled over 350+ live users." },
      { title: "Managed 500+ API calls/second." },
    ],
    techStack: ["React", "PostgreS", "three.js", "Express", "Node.js"],
    liveLink: "https://online-treasure-hunt.vercel.app/",
    githubLink: "https://github.com/imsudhanshu09/ONLINE-TREASURE-HUNT",
    image: OTH,
  },
  {
    title: "Movie Recommendation System",
    results: [
      { title: "A movie recommendation system with ML." },
      { title: "Used TF-IDF & cosine similarity." },
      { title: "Improved engagement by 30%." },
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "Cosine Similarity"],
    liveLink: "https://youtu.be/7hi5zwO75yc",
    githubLink: "https://github.com/imsudhanshu09/Movie_Recommendation",
    image: lightSaasLandingPage,
  },
  // {
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   techStack: ["Next.js", "TypeScript", "OpenAI API"],
  //   liveLink: "https://youtu.be/Z7I5uSRHMHg",
  //   githubLink: "https://github.com/imsudhanshu09/ai-landing",
  //   image: aiStartupLandingPage,
  // },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured projects</h2>
        <div className="flex justify-center">
          <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md max-auto">See my projects here</p>
        </div>

        <div className="md:mt-16 flex flex-col mt-8 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-10 md:px-10 lg:pt-14 lg:px-20 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="relative -mt-4 pb-4 lg:-mt-1 lg:pb-6">
                  <h3 className="font-serif text-2xl mt-2 md:mt-3 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-3 md:mt-4" />

                  <ul className="flex flex-col gap-4 mt-3 md:mt-4">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/10 text-white text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 mt-6 md:mt-8 justify-center md:justify-start">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>Visit Live Demo</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-white/25 text-gray-750 h-12 px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <GithubIcon className="size-5" />
                          <span>GitHub</span>
                        </button>
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};





// import OTH from "@/assets/images/OTH.jpg";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
// import Image from 'next/image';
// import CheckCircleIcon from '@/assets/icons/check-circle.svg';
// import ArrowUpRightIcon from'@/assets/icons/arrow-up-right.svg';
// import grainImage from '@/assets/images/grain.jpg';
// import GithubIcon from '@/assets/icons/github.svg';

// const portfolioProjects = [
//   {
//     logo: GithubIcon,
//     company: "Acme Corp",
//     year: "2022",
//     title: "Online Treasure Hunt",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/4k7IdSLxh6w",
//     image: OTH,
//   },
//   {
//     company: "Innovative Co",
//     year: "2021",
//     title: "Light Saas Landing Page",
//     results: [
//       { title: "Boosted sales by 20%" },
//       { title: "Expanded customer reach by 35%" },
//       { title: "Increased brand awareness by 15%" },
//     ],
//     link: "https://youtu.be/7hi5zwO75yc",
//     image: lightSaasLandingPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//   <section className="pb-16 lg:py-24">
//     <div className="container">
//       <div className="flex justify-center">
//         <p className="font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-world Results</p>
//       </div>
//       <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured projects</h2>
//       <div className="flex justify-center"><p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md max-auto">See my projects here</p></div>
//       <div className="md:mt-20 flex flex-col mt-10 gap-20">
//         {portfolioProjects.map((project, projectIndex) => (
//           <div key={project.title}
//           className="bg-gray-800 rounded-3xl relative
//           z-0 overflow-hidden after:z-10 after:content-['']
//           after:absolute after:inset-0 after:outline-2 after:outline
//           after:outline-offset-2 after:rounded-3xl after:outline-white/20
//           px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
//           style={{
//             top: `calc(64px + ${projectIndex * 40}px)`,
//           }}>
//             <div className="absolute inset-0 -z-10 opacity-5"
//             style={{
//               backgroundImage: `url(${grainImage.src})`,
//             }}
//             ></div>
//             <div className="lg:grid lg:grid-cols-2 lg:gap-16">
//               <div className="lg:pt-16">
//                 <div className="bg-gradient-to-r from-emerald-300 to-sky-400
//                   inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
//                   {project.logo && (() => {
//                     const Logo = project.logo;
//                     return <Logo className="w-5 h-5 text-white size-4 inline-block mt-1" />;
//                   })()}
//                   <span>{project.company}</span>
//                   <span>&bull;</span>
//                   <span>{project.year}</span>
//                 </div>
//                 <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
//                 <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
//                 <ul className="flex flex-col gap-4 mt-4 md:mt-5">
//                   {project.results.map((result) => (
//                     <li className="flex gap-2 text-sm text-white/50 md:text-base">
//                       <CheckCircleIcon className="size-5 md:size-6"/>
//                       <span>{result.title}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <a>
//                   <button className="bg-white text-gray-950 h-12 w-full
//                     md:w-auto px-6 rounded-xl font-semibold inline-flex
//                     items-center justify-center gap-2 mt-8">
//                     <span>Visit live website</span>
//                     <ArrowUpRightIcon className="size-4" />
//                   </button>
//                 </a>
//               </div>
//               <div className="relative">
//                 <Image src={project.image} alt={project.title} 
//                   className="mt-8 -mb-4 md:-mb-0 lg:mt-0 
//                   lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
//   );
// };