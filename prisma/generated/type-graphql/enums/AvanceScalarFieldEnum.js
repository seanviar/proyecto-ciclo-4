"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AvanceScalarFieldEnum;
(function (AvanceScalarFieldEnum) {
    AvanceScalarFieldEnum["id"] = "id";
    AvanceScalarFieldEnum["proyectoId"] = "proyectoId";
    AvanceScalarFieldEnum["fecha"] = "fecha";
    AvanceScalarFieldEnum["descripcion"] = "descripcion";
    AvanceScalarFieldEnum["observaciones"] = "observaciones";
    AvanceScalarFieldEnum["usuarioId"] = "usuarioId";
})(AvanceScalarFieldEnum = exports.AvanceScalarFieldEnum || (exports.AvanceScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AvanceScalarFieldEnum, {
    name: "AvanceScalarFieldEnum",
    description: undefined,
});
