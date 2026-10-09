export interface ReviewEntry {
    author: string;
    role: string;
    relationship: string;
    organization: string;
    date: string;
    quote: string;
}

export interface ReviewData {
    eyebrow: string;
    title: string;
    subtitle: string;
    btn_text: string,
    items: ReviewEntry[];
}