"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_Fase_Proyecto = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_Fase_Proyecto;
(function (Enum_Fase_Proyecto) {
    Enum_Fase_Proyecto["Iniciado"] = "Iniciado";
    Enum_Fase_Proyecto["En_Desarrollo"] = "En_Desarrollo";
    Enum_Fase_Proyecto["Terminado"] = "Terminado";
})(Enum_Fase_Proyecto = exports.Enum_Fase_Proyecto || (exports.Enum_Fase_Proyecto = {}));
TypeGraphQL.registerEnumType(Enum_Fase_Proyecto, {
    name: "Enum_Fase_Proyecto",
    description: undefined,
});
