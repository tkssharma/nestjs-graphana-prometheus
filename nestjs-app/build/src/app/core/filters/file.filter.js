"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFileFilter = void 0;
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(png|gif|jpeg)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        callback(null, false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
//# sourceMappingURL=file.filter.js.map