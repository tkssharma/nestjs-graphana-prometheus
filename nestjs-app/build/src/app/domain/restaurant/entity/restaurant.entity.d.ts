import { BaseEntity } from 'typeorm';
export declare class RestaurantEntity extends BaseEntity {
    id: string;
    name: string;
    description: string;
    desc?: string;
    type: string;
    website_url: string;
    title: string;
    social_links: any;
    cuisine: string;
    ratings: string;
    average_price: number;
    latitude: string;
    longitude: string;
    contact_no: string;
    thumbnails: any;
    delivery_time: number;
    delivery_options: string;
    pickup_options: string;
    opens_at: string;
    restaurant_address: any;
    closes_at: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
