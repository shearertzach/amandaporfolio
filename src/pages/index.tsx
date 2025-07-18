import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";
import Projects from "@/components/Projects";
import { Project } from "@/lib/types/Project";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [modal, setModal] = useState<Project | undefined>(undefined);

    useEffect(() => {
    if (modal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modal]);

  return (
    <>
      <Navbar />
      <main className={`h-[calc(100vh-170px)] flex items-center justify-center max-w-4xl mx-auto gap-4`}>
        <div className="p-4 lg:p-0">
          <h4 className="mb-4 font-medium text-2xl font-pt-sans">Hai! Hai! I’m Amanda.</h4>
          <p className=" text-4xl font-pt-sans-caption">I’m a UX designer who’s curious (maybe... nosy lol). I focus on mobile app designs and love figuring out what’s broken and how to fix it by doing research and design. </p>
        </div>
        <div>
          <Image
            src="/amanda.png"
            alt="Amanda's Hero Image"
            width={1000}
            height={1300}
            className="rotate-5 hidden md:block"
          />
        </div>
      </main>
      <div className="flex gap-2 items-center justify-center mb-16">
        <p className="text-xl text-center font-bold">Case Studies</p>
        <ChevronDownIcon className="w-12 h-12" />
      </div>
      <Projects setModal={setModal} />
      {modal && (
        <ProjectModal project={modal} setModal={setModal} />
      )}
    </>
  );
}
