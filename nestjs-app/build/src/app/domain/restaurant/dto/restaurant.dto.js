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
exports.CreateRestaurantBodyDto = exports.SearchQueryDto = exports.AddressDto = exports.getRestaurantByIdDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class getRestaurantByIdDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UUID',
        example: 'UUID',
        required: true,
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], getRestaurantByIdDto.prototype, "id", void 0);
exports.getRestaurantByIdDto = getRestaurantByIdDto;
class AddressDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'city',
        example: 'delhi',
        required: true,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'state',
        example: 'delhi',
        required: true,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'country',
        example: 'INDIA',
        required: true,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'pin_code',
        example: '6789876',
        required: true,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "pincode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'street',
        example: 'street',
        required: true,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'name',
        example: 'name',
        required: true,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDto.prototype, "name", void 0);
exports.AddressDto = AddressDto;
class SearchQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'latitude',
        example: '11',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchQueryDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'longitude',
        example: '11',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchQueryDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'restaurant name or dish menu name',
        example: 'pizza hut',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], SearchQueryDto.prototype, "search_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'page count',
        example: '1',
        required: false,
    }),
    (0, class_transformer_1.Transform)(() => Number()),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'limit per page',
        example: '10',
        required: false,
    }),
    (0, class_transformer_1.Transform)(() => Number()),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SearchQueryDto.prototype, "limit", void 0);
exports.SearchQueryDto = SearchQueryDto;
class CreateRestaurantBodyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'name of restaurant',
        example: 'uber clone',
        required: true,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'desc of restaurant',
        example: 'uber clone',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'latitude',
        example: '11',
        required: true,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'longitude',
        example: '11',
        required: true,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'contact_no',
        example: '8998978987',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "contact_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'thumbnails',
        example: [
            'https://logos-world.net/wp-content/uploads/2021/08/Dominos-Logo.png',
        ],
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], CreateRestaurantBodyDto.prototype, "thumbnails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'delivery_options',
        example: 'delivery_options',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "delivery_options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'delivery_time',
        example: 30,
        required: true,
    }),
    (0, class_transformer_1.Transform)(() => Number()),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRestaurantBodyDto.prototype, "delivery_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'average_price',
        example: 500,
        required: true,
    }),
    (0, class_transformer_1.Transform)(() => Number()),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRestaurantBodyDto.prototype, "average_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'pickup_options',
        example: 'pickup_options',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "pickup_options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'opens_at',
        example: '2023-10-05T14:48:00.000Z',
        required: true,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "opens_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'closes_at',
        example: '2023-10-05T14:48:00.000Z',
        required: true,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "closes_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'website_url',
        example: 'https://dominos.com',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRestaurantBodyDto.prototype, "website_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'address payload',
        example: {
            name: 'Uber Eats',
            city: 'jaipur',
            state: 'Raj',
            street: 'Raj',
            pincode: '345254',
            country: 'India',
        },
        required: true,
    }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AddressDto),
    __metadata("design:type", AddressDto)
], CreateRestaurantBodyDto.prototype, "address", void 0);
exports.CreateRestaurantBodyDto = CreateRestaurantBodyDto;
//# sourceMappingURL=restaurant.dto.js.map