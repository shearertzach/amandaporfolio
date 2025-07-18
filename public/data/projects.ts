import { Project } from "@/lib/types/Project";

export const projects: Project[] = [
  {
    id: "1",
    projectType: "Mobile App Design",
    projectName: "SunSketcher",
    role: "UX Designer",
    dateInformation: {
      startDate: "March",
      endDate: "May 2025"
    },
    title: "Eclipse captured through citizen science photography",
    description: "An app that helps scientist collect a database of comprehensive images from citizens.",
    mainImage: "/images/project-one.png",
    overview: {
      discover: "Research on users in the next total solar eclipse path: Greenland, Iceland, & Spain.",
      ideaPrototype: "Based on user research, creating the next iteration of the app in Figma.",
      evaluate: "Create UX testing materials (consent form, script, any other instruments), recruit participants, & lead testing!",
      outreachEducation: "A new & improved animated video tutorial explaining how & why to use SunSketcher.",
      projectOverview: "SunSketcher was an app that helps scientists collect image datas from citizens to study the Bailey’s beads. We developed the next iteration of SunSketcher to better accommodate users within the area of the eclipse. As well as redesigned the current SunSketch interface to create a streamlined experience.",
      goal: "Create a streamline experience for users that are non-English speakers to use the app.",
      duration: "Aug-Nov 2024",
      role: "UX Researcher"
    },
    discover: {
      problem: "The next total solar eclipse will be on August 12, 2026. The users at the next total solar eclipse may not understand English and there are too much text within the current interface.",
      userResearch: "We begin with a user research to better understand how users in Greenland, Iceland, and Spain will use the app. Since we can’t conduct any “user” research because we are unable to connect with users in other countries, we will focus on gaining insights into how they interact with technology and document patterns that will support the other members of our team to begin on the iterations of the newest version of SunSketcher! Because the previous total eclipse was in the North America region, the app is currently an English version.",
      highlights: ["Designers should rely on icons and visuals to aid users with a language barrier.", "Words or phrases should be limited, due to language barriers.",]
    },
    userPersona: {
      images: ["/images/persona1.png", "/images/persona2.png"]
    },
    oldDesigns: {
      images: ["/images/old-design1.png", "/images/old-design2.png", "/images/old-design2.png", "/images/old-design2.png", "/images/old-design2.png", "/images/old-design2.png"]
    },
    newDesigns: {
      images: ["/images/new-design1.png", "/images/new-design2.png"]
    },
    prototype: {
      images: ["/images/prototype1.png", "/images/prototype2.png"]
    },
    testing: {
      results: "We conducted testing with 16 participants, and have concluded that the redesign in navigation was successful.",
      successRate: 85,
      systemUsabilityScale: 75,
      productReactionCardResponses: ["Accessible", "Effective", "Engaging", "Organized", "Simplistic"]
    }
  },
];