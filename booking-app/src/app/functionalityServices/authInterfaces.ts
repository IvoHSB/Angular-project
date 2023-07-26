export interface registerBody {
    name: string;
    email: string;
    password: string;
    country: string;
    city: string;
    phone: string;
    img: string;
}

export interface loginBody {
    email: string;
    password: string;
}