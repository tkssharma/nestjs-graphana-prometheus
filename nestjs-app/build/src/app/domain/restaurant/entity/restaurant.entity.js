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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantEntity = void 0;
const typeorm_1 = require("typeorm");
let RestaurantEntity = class RestaurantEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, select: true }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "website_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', default: null }),
    __metadata("design:type", Object)
], RestaurantEntity.prototype, "social_links", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "cuisine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: null }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: null }),
    __metadata("design:type", Number)
], RestaurantEntity.prototype, "average_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "contact_no", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', default: null }),
    __metadata("design:type", Object)
], RestaurantEntity.prototype, "thumbnails", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: null }),
    __metadata("design:type", Number)
], RestaurantEntity.prototype, "delivery_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "delivery_options", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "pickup_options", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "opens_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', default: null }),
    __metadata("design:type", Object)
], RestaurantEntity.prototype, "restaurant_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], RestaurantEntity.prototype, "closes_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        select: true,
    }),
    __metadata("design:type", Date)
], RestaurantEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        select: true,
    }),
    __metadata("design:type", Date)
], RestaurantEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        select: true,
    }),
    __metadata("design:type", Date)
], RestaurantEntity.prototype, "deleted_at", void 0);
RestaurantEntity = __decorate([
    (0, typeorm_1.Entity)('restaurants')
], RestaurantEntity);
exports.RestaurantEntity = RestaurantEntity;
//# sourceMappingURL=restaurant.entity.js.map