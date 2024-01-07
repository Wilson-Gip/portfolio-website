"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Jira</li>
        <li>Trello</li>
        <li>Google Suite</li>
        <li>Unity</li>
        <li>Github</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Python</li>
        <li>C++</li>
        <li>Java</li>
        <li>C#</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pasadena City College (Honors Program)</li>
        <li>University of California, Irvine (Honors Program)</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Project Management</li>
        <li>Introduction to Software Engineering</li>
        <li>Requirements Analysis and Engineering</li>
        <li>Software Design: Applications</li>
        <li>Human Computer Interaction</li>
        <li>Organizational Information Systems</li>
        <li>Udemy Jira/Confluence + Scrum Master</li>
      </ul>
    )
  },

]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white"> 
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"> 
            <Image src="/images/about-image1.png" width={500} height={500} className="mb-4"/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    I am an aspiring producer and engineer with a passion for creating fun and engaging games and responsive web applications. 
                    I have experience working with Unity, Unreal, and Web Development as well as many other programming languages and tools.
                    I am a quick learner, and I am always looking to expand and adapt my knowledge and skill set. I am a team player, and I am excited to work with others to create amazing projects!
                </p>
                <div className="flex flex-row justify-start mt-8">
                  <TabButton 
                  selectTab={() => handleTabChange("skills")} 
                  active={tab === "skills"}
                  > 
                  {" "}
                  Skills{" "} 
                  </TabButton>
                  <TabButton 
                  selectTab={() => handleTabChange("education")} 
                  active={tab === "education"}
                  > 
                  {" "}
                  Education{" "} 
                  </TabButton>
                  <TabButton 
                  selectTab={() => handleTabChange("certifications")} 
                  active={tab === "certifications"}
                  > 
                  {" "}
                  Relevant Courses{" "} 
                  </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection