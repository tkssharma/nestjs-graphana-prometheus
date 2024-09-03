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
exports.RestaurantController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_constants_1 = require("../../../app.constants");
const restaurant_service_1 = require("../services/restaurant.service");
const restaurant_dto_1 = require("../dto/restaurant.dto");
const role_guard_1 = require("../../../core/guard/role.guard");
const platform_express_1 = require("@nestjs/platform-express");
const file_decorator_1 = require("../../../core/decorator/file.decorator");
const file_filter_1 = require("../../../core/filters/file.filter");
const interface_1 = require("../interface");
const SIZE = 2 * 1024 * 1024;
const VALID_UPLOADS_MIME_TYPES = ['image/jpeg', 'image/png'];
let RestaurantController = class RestaurantController {
    constructor(service) {
        this.service = service;
    }
    async searchRestaurant(query) {
        return await this.service.search(query);
    }
    async createRestaurant(email, payload) {
    }
    async getRestaurants(user) {
        return await this.service.getAllMyRestaurants(user);
    }
    async getRestaurantById(param) {
        return await this.service.getRestaurantById(param);
    }
    async uploadFile(file) {
        return file;
    }
    async uploadFilev2(req, file) {
        if (!file || req.fileValidationError) {
            throw new common_1.BadRequestException('invalid file provided, allowed *.pdf single file for Invoice');
        }
        return file;
    }
};
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiNotFoundResponse)({ description: app_constants_1.NO_ENTITY_FOUND }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'UNAUTHORIZED_REQUEST' }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({ description: 'BAD_REQUEST' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: app_constants_1.INTERNAL_SERVER_ERROR }),
    (0, swagger_1.ApiOperation)({
        description: 'search restaurants based on lat/lon',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'return search restaurants successfully',
    }),
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_dto_1.SearchQueryDto]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "searchRestaurant", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiNotFoundResponse)({ description: app_constants_1.NO_ENTITY_FOUND }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'UNAUTHORIZED_REQUEST' }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({ description: 'BAD_REQUEST' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: app_constants_1.INTERNAL_SERVER_ERROR }),
    (0, swagger_1.ApiOperation)({
        description: 'search restaurants based on lat/lon',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'return search restaurants successfully',
    }),
    (0, common_1.Post)('/'),
    __param(0, (0, interface_1.UserData)('email')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, restaurant_dto_1.CreateRestaurantBodyDto]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "createRestaurant", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiNotFoundResponse)({ description: app_constants_1.NO_ENTITY_FOUND }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'UNAUTHORIZED_REQUEST' }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({ description: 'BAD_REQUEST' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: app_constants_1.INTERNAL_SERVER_ERROR }),
    (0, swagger_1.ApiOperation)({
        description: 'search restaurants based on lat/lon',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'return search restaurants successfully',
    }),
    (0, common_1.Get)('/'),
    __param(0, (0, interface_1.UserData)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getRestaurants", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiNotFoundResponse)({ description: app_constants_1.NO_ENTITY_FOUND }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'UNAUTHORIZED_REQUEST' }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({ description: 'BAD_REQUEST' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: app_constants_1.INTERNAL_SERVER_ERROR }),
    (0, swagger_1.ApiOperation)({
        description: 'search restaurants based on lat/lon',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'return search restaurants successfully',
    }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_dto_1.getRestaurantByIdDto]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getRestaurantById", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, file_decorator_1.uploadFile)('file'),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'UNAUTHORIZED_REQUEST' }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({ description: 'BAD_REQUEST' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: app_constants_1.INTERNAL_SERVER_ERROR }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpg)$/ })
        .addMaxSizeValidator({ maxSize: SIZE })
        .build({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('uploadv2'),
    (0, file_decorator_1.uploadFile)('file'),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'UNAUTHORIZED_REQUEST' }),
    (0, swagger_1.ApiUnprocessableEntityResponse)({ description: 'BAD_REQUEST' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: app_constants_1.INTERNAL_SERVER_ERROR }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        fileFilter: file_filter_1.imageFileFilter,
    })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "uploadFilev2", null);
RestaurantController = __decorate([
    (0, swagger_1.ApiBearerAuth)('authorization'),
    (0, common_1.Controller)('restaurants'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    })),
    (0, swagger_1.ApiTags)('restaurant'),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantController);
exports.RestaurantController = RestaurantController;
function User() {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=restaurant.controller.js.map