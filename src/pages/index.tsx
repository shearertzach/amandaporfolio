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
      <main className={`p-4 md:h-[calc(100vh-170px)] flex items-center justify-center max-w-5xl mx-auto gap-4`}>
        <div className="p-4 lg:p-0">
          <h4 className="mb-4 font-medium text-2xl font-pt-sans">Hai! Hai! I’m Amanda.</h4>
          <p className="text-2xl md:text-4xl font-pt-sans-caption !font-[500]">I’m a UX designer who’s curious (maybe... nosy lol). I focus on mobile app designs and love figuring out what’s broken and how to fix it by doing research and design. </p>
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
      <div className="flex flex-col gap-2 items-center justify-center md:mb-16">
        <hr className="h-1 w-11/12 text-[#616161] md:hidden" />
        <div className="flex justify-center items-center gap-2 my-4 ">
          <p className="text-xl text-center !font-[700] !font-abhaya">Case Studies</p>
          <ChevronDownIcon className="w-10 h-10" />
        </div>
      </div>
      <Projects setModal={setModal} />
      {modal && (
        <ProjectModal project={modal} setModal={setModal} />
      )}
    </>
  );
}
