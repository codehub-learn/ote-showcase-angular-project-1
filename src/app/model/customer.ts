import { Address } from "./address";

export interface Customer {
    id: number,
    fullname: string,
    address: Address,
}