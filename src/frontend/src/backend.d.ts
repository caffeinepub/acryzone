import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    productInterest: string;
    phone: string;
}
export type Time = bigint;
export interface Product {
    name: string;
    description: string;
}
export interface backendInterface {
    listInquiries(): Promise<Array<Inquiry>>;
    listProducts(): Promise<Array<Product>>;
    submitInquiry(name: string, email: string, phone: string, productInterest: string, message: string): Promise<void>;
}
