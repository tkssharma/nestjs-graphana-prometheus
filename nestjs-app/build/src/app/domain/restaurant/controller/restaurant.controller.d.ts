import { RestaurantService } from '../services/restaurant.service';
import { CreateRestaurantBodyDto, SearchQueryDto, getRestaurantByIdDto } from '../dto/restaurant.dto';
import { UserMetaData } from '../interface';
export declare class RestaurantController {
    private readonly service;
    constructor(service: RestaurantService);
    searchRestaurant(query: SearchQueryDto): Promise<import("../entity/restaurant.entity").RestaurantEntity[]>;
    createRestaurant(email: string, payload: CreateRestaurantBodyDto): Promise<void>;
    getRestaurants(user: UserMetaData): Promise<import("../entity/restaurant.entity").RestaurantEntity[]>;
    getRestaurantById(param: getRestaurantByIdDto): Promise<import("../entity/restaurant.entity").RestaurantEntity>;
    uploadFile(file: any): Promise<any>;
    uploadFilev2(req: any, file: any): Promise<any>;
}
