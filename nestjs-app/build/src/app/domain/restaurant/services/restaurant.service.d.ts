import { Repository } from 'typeorm';
import { RestaurantEntity } from '../entity/restaurant.entity';
import { SearchQueryDto, getRestaurantByIdDto } from '../dto/restaurant.dto';
import { UserMetaData } from '../interface';
export declare class RestaurantService {
    private restaurantRepo;
    constructor(restaurantRepo: Repository<RestaurantEntity>);
    getRestaurantById(param: getRestaurantByIdDto): Promise<RestaurantEntity>;
    getAllMyRestaurants(user: UserMetaData): Promise<RestaurantEntity[]>;
    search(queryParam: SearchQueryDto): Promise<RestaurantEntity[]>;
}
