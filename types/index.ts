// TypeScript interface definitions

export interface User {
    id: string;
    name: string;
    email: string;
    // Add other fields as necessary
}

export interface DisabilityBenefit {
    id: string;
    name: string;
    description: string;
    amount: number;
    // Add other fields as necessary
}

export interface TaxBenefit {
    id: string;
    name: string;
    description: string;
    amount: number;
    // Add other fields as necessary
}

export interface Resource {
    id: string;
    title: string;
    link: string;
    // Add other fields as necessary
}

export interface Innovation {
    id: string;
    title: string;
    description: string;
    // Add other fields as necessary
}

export interface Form {
    id: string;
    title: string;
    fields: Array<{ key: string; value: any; }>;  // A simplified representation of form fields
    // Add other fields as necessary
}