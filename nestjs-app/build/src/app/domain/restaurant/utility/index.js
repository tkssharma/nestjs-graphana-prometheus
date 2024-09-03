"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
exports.groupBy = groupBy;
//# sourceMappingURL=index.js.map