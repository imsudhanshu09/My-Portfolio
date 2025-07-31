'use client';
import React, { useRef } from 'react';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from  '@/assets/images/india-map.png';
import smileMemoji from  '@/assets/images/memoji-smile.png';
import Image from "next/image";
import bookImage from '@/assets/images/book-cover.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import nextIcon from '@/assets/icons/Next.js.svg';
import ExpressIcon from '@/assets/icons/Express.svg';
import TypescriptIcon from '@/assets/icons/TypeScript.svg';
import TailwindIcon from '@/assets/icons/Tailwind CSS.svg';
import PostgresIcon from '@/assets/icons/PostgresSQL.svg';
import VScodeIcon from '@/assets/icons/Visual Studio Code (VS Code).svg';
import cppIcon from '@/assets/icons/C++ (CPlusPlus).svg';
import dockerIcon from '@/assets/icons/Docker.svg';
import figmaIcon from '@/assets/icons/Figma.svg';


const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Next',
    iconType: nextIcon,
  },
  {
    title: 'Node',
    iconType: ChromeIcon,
  },
  {
    title: 'Express',
    iconType: ExpressIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypescriptIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindIcon,
  },
  {
    title: 'PostgreSQL',
    iconType: PostgresIcon,
  },
  {
    title: 'Operating System',
    iconType: ChromeIcon,
  },
  {
    title: 'DBMS',
    iconType: ChromeIcon,
  },
  {
    title: 'C++',
    iconType: cppIcon,
  },
  {
    title: 'OOPS',
    iconType: ChromeIcon,
  },
  {
    title: 'Computer Netwoks',
    iconType: ChromeIcon,
  },
  {
    title: 'VS Code',
    iconType: VScodeIcon,
  },
  {
    title: 'Docker',
    iconType: dockerIcon,
  },
  {
    title: 'Figma',
    iconType: figmaIcon,
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: "5%",
    top: "5%",
  },
  {
    title: 'Singing',
    emoji: '🎤',
    left: "50%",
    top: "5%",
  },
  {
    title: 'Cricket',
    emoji: '🏏',
    left: "10%",
    top: "35%",
  },
  {
    title: 'Fitness',
    emoji: '💪',
    left: "35%",
    top: "40%",
  },
  {
    title: 'Writing',
    emoji: '✍️',
    left: "70%",
    top: "45%",
  },
  {
    title: 'Teaching',
    emoji: '👨‍🏫',
    left: "5%",
    top: "65%",
  },
]


export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
  <div className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title = "A Glimpse into my world"
        description = "Learn about me who I am, What I do and many more." 
      />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1 group">
            <CardHeader 
              title="MySelf"
              description=""
            />
            <div className="relative overflow-hidden h-48 w-full text-center">
              <div className='absolute w-full animate-scroll-up group-hover:[animation-play-state:paused] flex flex-col gap-4 text-white/15 text-sm leading-relaxed pl-3 pr-3'>
                <p>
                  I&apos;m Sudhanshu Kumar, a Computer Science undergraduate at IIIT Pune, passionate about building scalable software systems and solving real-world challenges through code and creativity. My journey so far has been a blend of hands-on development, deep technical learning, and community-driven initiatives.
                </p>
                <p>
                  I&apos;ve built impactful projects like a Movie Recommendation System using machine learning techniques such as cosine similarity and TF-IDF, and a real-time Online Treasure Hunt platform backed by a robust backend and optimized database systems. These projects reflect my strong grasp of full-stack development and performance-oriented engineering.
                </p>
                <p>
                  Beyond coding, I&apos;m the Founder and Head of QuantNum, the Math Club of IIIT Pune, where I&apos;ve led inter-college math fests and problem-solving sessions that connect mathematics with modern tech. As part of E-Cell IIIT Pune, I&apos;ve contributed to web development, event planning, and marketing, helping organize large-scale events and implement SEO strategies to reach broader audiences.
                </p>
                <p>
                  I&apos;ve also served as a Campus Ambassador for IIT Bombay, helping boost student outreach and participation, and currently work as a Placement Coordinator, playing a key role in bridging the gap between students and recruiters to support placement efforts.
                </p>
                <p>
                  I believe in combining curiosity with consistency—whether it&apos;s building products, mentoring peers, or leading impactful student initiatives.
                </p>
              </div>
              <div className='absolute w-full animate-scroll-up group-hover:[animation-play-state:paused] flex flex-col gap-4 text-white/55 text-sm leading-relaxed pl-3 pr-3'>
                <p>
                  I&apos;m Sudhanshu Kumar, a Computer Science undergraduate at IIIT Pune, passionate about building scalable software systems and solving real-world challenges through code and creativity. My journey so far has been a blend of hands-on development, deep technical learning, and community-driven initiatives.
                </p>
                <p>
                  I&apos;ve built impactful projects like a Movie Recommendation System using machine learning techniques such as cosine similarity and TF-IDF, and a real-time Online Treasure Hunt platform backed by a robust backend and optimized database systems. These projects reflect my strong grasp of full-stack development and performance-oriented engineering.
                </p>
                <p>
                  Beyond coding, I&apos;m the Founder and Head of QuantNum, the Math Club of IIIT Pune, where I&apos;ve led inter-college math fests and problem-solving sessions that connect mathematics with modern tech. As part of E-Cell IIIT Pune, I&apos;ve contributed to web development, event planning, and marketing, helping organize large-scale events and implement SEO strategies to reach broader audiences.
                </p>
                <p>
                  I&apos;ve also served as a Campus Ambassador for IIT Bombay, helping boost student outreach and participation, and currently work as a Placement Coordinator, playing a key role in bridging the gap between students and recruiters to support placement efforts.
                </p>
                <p>
                  I believe in combining curiosity with consistency—whether it&apos;s building products, mentoring peers, or leading impactful student initiatives.
                </p>
              </div>
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader 
            title="My Toolbox"
            description="Explore the technologies and tools."
            className=""
            />
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
          </Card>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader 
            title="Beyond the Code"
            description="Click and drag any text box to move it freely around the box."
            className="px-6 py-6 whitespace-nowrap"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }} 
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <a
            href="https://maps.app.goo.gl/wyJ6mrJgkUFJ3xCM7"  // 🔁 Replace with your desired URL
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full"
          >
            <Card className="h-[320px] w-full md:w-[264px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map image"
                className="h-full w-full object-cover object-[40%_top]"
              />
              <div className="absolute top-1/2 left-[27%] -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:animate-ping-border">
                <Image
                  src={smileMemoji}
                  alt="smile image"
                  className="size-20"
                />
              </div>
            </Card>
          </a>

        </div>
      </div>
    </div>
  </div>
  );
};
