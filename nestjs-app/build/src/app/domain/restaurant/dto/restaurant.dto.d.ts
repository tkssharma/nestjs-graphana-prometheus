export declare class getRestaurantByIdDto {
    id: string;
}
export declare class AddressDto {
    city: string;
    state: string;
    country: string;
    pincode: string;
    street: string;
    name: string;
}
export declare class SearchQueryDto {
    latitude: string;
    longitude: string;
    search_text: string;
    page: number;
    limit: number;
}
export declare class CreateRestaurantBodyDto {
    name: string;
    description: string;
    latitude: string;
    longitude: string;
    contact_no: string;
    thumbnails: string[];
    delivery_options: string;
    delivery_time: number;
    average_price: number;
    pickup_options: string;
    opens_at: string;
    closes_at: string;
    website_url: string;
    address: AddressDto;
}
