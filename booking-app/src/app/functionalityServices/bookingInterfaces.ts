export interface bookingOffers {
    'Air Conditioning': boolean;
    'Arcade Games': boolean;
    'Bath Towel': boolean;
    'Coffee Kit': boolean;
    'Dental Kit': boolean;
    'Fitness Tech': boolean;
    'Free Wi - Fi': boolean;
    'Free parking': boolean;
    'In - Room Cocktail Station': boolean;
    'In - room Safe': boolean;
    'Iron': boolean;
    'Ironing Board': boolean;
    'Kid Equipment': boolean;
    'Mini Bar': boolean;
    'Mobile Check - In': boolean;
    'Musical Instruments': boolean;
    'Pampered Pets': boolean;
    'Personal care': boolean;
    'Shaving Kit': boolean;
    'TV': boolean;
    'Toiletries': boolean;
    'Work Desk': boolean;
    stars: string;
    bath: string;
    city: string;
    country: string;
    description: string;
    image: string;
    name: string;
    people: string;
    price: string;
    size: string;
}

export interface review {
    content: String;
    ownerName: String;
    profileId: String;
    offerId: String;
}