interface Field {
    label: string;
    placeholder: string;
}

export interface ContactData {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
        name: Field;
        email: Field;
        subject: Field;
        message: Field;
        submit: string;
        sending: string; 
        success: string;  
        error: string;  
    };
}