interface SanityBody {
    _createdAt : string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type : "Image";
    asset : {
        _ref : string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody {
    _type : "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: number;
    profileImage: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody {
    title : string;
    _type: "projects";
    Image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[]
}

export interface Social extends SanityBody {
    _type : "social";
    title: string,
    url: string,
}