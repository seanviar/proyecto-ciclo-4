"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_Estado_Proyecto = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_Estado_Proyecto;
(function (Enum_Estado_Proyecto) {
    Enum_Estado_Proyecto["Activo"] = "Activo";
    Enum_Estado_Proyecto["Inactivo"] = "Inactivo";
})(Enum_Estado_Proyecto = exports.Enum_Estado_Proyecto || (exports.Enum_Estado_Proyecto = {}));
TypeGraphQL.registerEnumType(Enum_Estado_Proyecto, {
    name: "Enum_Estado_Proyecto",
    description: undefined,
});
