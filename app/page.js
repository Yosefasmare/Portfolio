import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import { RevealWrapper } from "@/components/Revel-wrapper";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { GlowingCard } from "@/components/ui/Glowing-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingCards } from "@/components/ui/slow-moving-cards";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FETCH_PROJECTS, FETCH_TESTIMONT } from "@/sanity/lib/query";
import { Copy, MoveUpRight } from "lucide-react";
import Link from "next/link"


import Frontend from '../public/frontend.svg'
import Backend from '../public/backend.svg'
import Image from "next/image";
import Footer from "@/components/Footer";
import EmailMe from "@/components/EmailMe";
import EmailCopy from "@/components/EmailCopy";

 

export default async function Home() {

  const ProjectRes = await client.fetch(FETCH_PROJECTS)
  const TestmonyRes = await client.fetch(FETCH_TESTIMONT)
  
  console.log(TestmonyRes , 'hello')

  const items = TestmonyRes.map((testimony) => ({
    name: testimony?.name,
    title: testimony?.postion,
    picture: urlFor(testimony?.picture).width(500).height(500).url(), 
    quote: testimony?.testimontMessage,   
  }));

  const Skills = [
    {title: 'Frontend developer',text: 'work using diffrent techs to improve my work and satisfy my client' , svg: Frontend},
    {title: 'backend integration',text: 'seemless integration with backend apis and work uisng backend providers' , svg: Backend}
  ]
  

  return (
    <div className="min-h-screen bg-black relative">
      <Navbar />
     
      <AuroraBackground className="absolute inset-0 z-0  " />
      
      <section className="relative w-full h-[100vh]  overflow-hidden flex flex-col items-center justify-center">
        
          <div className="flex flex-col w-full p-5 items-center justify-center   text-white ">
       <RevealWrapper  >
            <h4 className="text-gray-300 ">Make Your Ideas Come True!</h4>
       </RevealWrapper>
       <RevealWrapper delay={0.4}>
            <h1 className="text-6xl md:text-6xl font-bold text-center">
            Crafting  
             <span className="text-green-400"> Fast, </span>
             <span className="text-yellow-400">Scalable and </span>
             <span className="text-red-400">Modern </span>
              Web Experiences with Next.js
            </h1>
       </RevealWrapper>
       <RevealWrapper delay={0.6}>
            <p className="mt-4 text-lg md:text-xl text-gray-300 text-center">
                Hi! I Am Yosef, A Developer Based In Ethiopia.
            </p>
       </RevealWrapper>
          </div>
       <RevealWrapper delay={0.8}>
               <Link href={'#projects'}>
                 <HoverBorderGradient className={`flex py-3 px-7  font-bold capitalize`}>
                   View My Work
                   <MoveUpRight />
                 </HoverBorderGradient>
               </Link>
       </RevealWrapper>

      </section>

      <section id="about" className="w-full pt-20 md:pt-0 min-h-[99vh] flex flex-col justify-center items-center gap-3">

        
               <RevealWrapper>
                 <h1 className="font-bold text-transparent bg-clip-text underline text-4xl md:text-6xl italic bg-gradient-to-r from-green-500 via-yellow-500 to-red-500">Get to Know Me!</h1>
               </RevealWrapper>
              
                  <RevealWrapper delay={0.4}>
                    <h3 className="text-2xl text-white">
                    🚀 Passionate Next.js Developer | Ethiopia
                    </h3>
                  </RevealWrapper>
                  <RevealWrapper delay={0.6}>
                       <p className="text-lg text-gray-200 text-center p-6">
                       I'm a Next.js developer with a passion for building fast, 
                       modern, and scalable web applications. With expertise in React, 
                       Tailwind CSS, and backend integration, I create seamless digital
                        experiences that prioritize performance, accessibility, and user experience.
                       </p>
                  </RevealWrapper>
                  <RevealWrapper delay={0.8}>
                    <h3 className="text-2xl text-white">
                    🌍 Bringing Ideas to Life
                    </h3>
                  </RevealWrapper>
                  <RevealWrapper delay={1}>
                       <p className="text-lg text-gray-200 text-center p-6">
                       Whether it's a personal portfolio, an e-commerce platform, or
                        a SaaS product, I leverage cutting-edge technologies to turn ideas
                         into reality. From frontend magic to backend logic, I ensure every
                          project is optimized, secure, and future-proof.
                      
                       </p>
                  </RevealWrapper>
                  <RevealWrapper delay={1.2}>
                    <h3 className="text-2xl text-white">
                    ✨ Let's Build Something Amazing
                    </h3>
                  </RevealWrapper>
                  <RevealWrapper delay={1.4}>
                       <p className="text-lg text-gray-200 text-center p-6">
                           If you're looking for a developer who values clean code, great UI/UX, and efficiency, 
                           let's connect and create something impactful!
                       </p>
                  </RevealWrapper>

                 <RevealWrapper delay={1.6}>
                        <EmailCopy />
                 </RevealWrapper>

      </section>

      <section id="projects" className="w-full p-4 flex flex-col items-center gap-5">
        <RevealWrapper>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">Some Of My <span className=" text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-500 to-red-500">Recent Projects</span></h1>
        </RevealWrapper>
           <div className="flex flex-wrap p-2 gap-3">
                {ProjectRes.length === 0 ? 
                  <h1>loading</h1>
                :  
                 ProjectRes.map((proj,index)=>(
                  <RevealWrapper key={proj._id} delay={0.3 + index}>
                    <Project  title={proj?.NameoftheProject} desc={proj?.dicription} url={proj?.urlorpath} techUsed={proj?.techUsed} banner={urlFor(proj?.Banner).width(800).height(800).url()} />
                  </RevealWrapper>
                ))}
           </div>
      </section>

      <section className="w-full p-9 flex flex-col items-center">
            <RevealWrapper>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center">Kind words from <span className=" text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-500 to-red-500">satisfied clients</span> </h1>
            </RevealWrapper>
            <RevealWrapper delay={0.3}>
               <div className="pt-6 w-full">
                {TestmonyRes.length == [] ?
                   <div className="w-full p-4 flex justify-center items-center">
                       <h1 className="text-2xl font-bold text-gray-200 text-center">No Client Testimony At This Moment!</h1>
                   </div>
                :  
                   <InfiniteMovingCards
                   items={items}
                   direction="left"
                   speed="normal"
                   pauseOnHover={true}
                   />
                }
               </div>
            </RevealWrapper>
      </section>

      <section id="skills" className="w-full p-6 items-center pt-3 flex flex-col gap-4">
             <RevealWrapper>
                 <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                   Some Of 
                   <span className=" text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"> My Skills</span>
                 </h1>
             </RevealWrapper>

             <RevealWrapper delay={0.2}>
               <div className="w-full p-3 flex flex-wrap items-center justify-center gap-4">
                {Skills.map(skill=>(
                    <GlowingCard width={500} height={180} key={skill.title}>
                        <div className="w-full h-full flex p-2 gap-3">
                            <div className="w-2/5 h-full justify-center items-center p-3">
                                   <Image src={skill.svg} alt="svg"  className="scale-[4] -z-10"/>
                            </div>
                            <div className="w-3/5 h-full flex flex-col  justify-center gap-1 z-20">
                                <h1 className="text-2xl text-white capitalize font-bold">{skill.title}</h1>
                                <p className="text-md text-gray-300 capitalize">{skill.text}</p>
                            </div>
                        </div>
                    </GlowingCard>
                ))}
              </div>
           </RevealWrapper>
      </section>

      <section id="contact" className="w-full p-5 flex flex-col justify-center items-center gap-1 min-h-[85vh]">
           <h1 className="p-20 text-6xl text-white text-center font-extrabold"> 
           Ready to elevate <span  className=" text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-500 to-red-500">your digital presence?</span>  
           </h1>
           <p className="text-xl text-gray-300 font-semibold text-center">
              Let's craft something extraordinary together. Reach out today and turn your vision into reality!
            </p>
 
            <EmailMe />
          
      </section>

 <Footer />
    </div>
  );
}
