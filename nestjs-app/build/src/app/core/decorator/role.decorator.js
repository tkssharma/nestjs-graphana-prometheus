"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesAllowed = void 0;
const common_1 = require("@nestjs/common");
const RolesAllowed = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.RolesAllowed = RolesAllowed;
//# sourceMappingURL=role.decorator.js.map