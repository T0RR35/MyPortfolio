export interface ProjectEntry {
    name: string,
    status: string,
    description: string,
    image_path: string,
    gif_path: string,
    role: string,
    period: string,
    stack: string[],
    repo: string,
    demo?: string
}

export interface ProjectData {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ProjectEntry[];
}