import { User } from "./user";

export interface Facility {
    id: number;
    name: string;
    description: string;
    basePrice: number;
    owner: User;
}