export interface Project {
    id: string;
    projectType: string;
    projectName: string;
    role: string;
    title: string;
    description: string;
    dateInformation: DateInformation;
    mainImage: string;
    overview: Section1;
    discover: Discover;
    userPersona: UserPersona;
    oldDesigns: OldDesigns;
    newDesigns: NewDesigns;
    prototype: Prototype;
    testing: Testing;
}

export interface Section1 {
    discover: string;
    ideaPrototype: string;
    evaluate: string;
    outreachEducation: string;
    projectOverview: string;
    goal: string;
    duration: string;
    role: string;
}

export interface Discover {
    problem: string;
    userResearch: string;
    highlights: string[];
}

export interface UserPersona {
    images: string[];
}

export interface OldDesigns {
    images: string[];
}

export interface NewDesigns {
    images: string[];
}

export interface Prototype {
    images: string[];
}

export interface Testing {
    results: string;
    successRate: number;
    systemUsabilityScale: number;
    productReactionCardResponses: string[];
}

export interface DateInformation {
    startDate: string;
    endDate: string;
}