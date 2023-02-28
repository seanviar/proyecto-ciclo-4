"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_Estado_Inscripcion = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_Estado_Inscripcion;
(function (Enum_Estado_Inscripcion) {
    Enum_Estado_Inscripcion["Acepdado"] = "Acepdado";
    Enum_Estado_Inscripcion["Rechazado"] = "Rechazado";
    Enum_Estado_Inscripcion["Pendiente"] = "Pendiente";
})(Enum_Estado_Inscripcion = exports.Enum_Estado_Inscripcion || (exports.Enum_Estado_Inscripcion = {}));
TypeGraphQL.registerEnumType(Enum_Estado_Inscripcion, {
    name: "Enum_Estado_Inscripcion",
    description: undefined,
});
