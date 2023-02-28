"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_Estado_Usuario = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_Estado_Usuario;
(function (Enum_Estado_Usuario) {
    Enum_Estado_Usuario["Pendiente"] = "Pendiente";
    Enum_Estado_Usuario["Autorizado"] = "Autorizado";
    Enum_Estado_Usuario["Desautorizado"] = "Desautorizado";
})(Enum_Estado_Usuario = exports.Enum_Estado_Usuario || (exports.Enum_Estado_Usuario = {}));
TypeGraphQL.registerEnumType(Enum_Estado_Usuario, {
    name: "Enum_Estado_Usuario",
    description: undefined,
});
