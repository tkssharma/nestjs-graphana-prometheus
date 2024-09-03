"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const restaurant_entity_1 = require("../entity/restaurant.entity");
let RestaurantService = class RestaurantService {
    constructor(restaurantRepo) {
        this.restaurantRepo = restaurantRepo;
    }
    async getRestaurantById(param) {
        const { id } = param;
        const response = await this.restaurantRepo.findOne({
            where: { id },
            select: { id: true, name: true },
        });
        return response;
    }
    async getAllMyRestaurants(user) {
        return await this.restaurantRepo.find({});
    }
    async search(queryParam) {
        return await this.restaurantRepo.find({
            select: {
                id: true,
                name: true,
                description: true,
                delivery_options: true,
            },
            where: [
                {
                    name: (0, typeorm_2.Like)(`%${queryParam.search_text}%`),
                },
                {
                    description: (0, typeorm_2.Like)(`%${queryParam.search_text}%`),
                },
            ],
            take: 5,
            skip: 0,
        });
    }
};
RestaurantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurant_entity_1.RestaurantEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RestaurantService);
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=restaurant.service.js.map