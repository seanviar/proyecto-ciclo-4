"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UsuarioScalarFieldEnum;
(function (UsuarioScalarFieldEnum) {
    UsuarioScalarFieldEnum["id"] = "id";
    UsuarioScalarFieldEnum["correo"] = "correo";
    UsuarioScalarFieldEnum["identificacion"] = "identificacion";
    UsuarioScalarFieldEnum["nombre"] = "nombre";
    UsuarioScalarFieldEnum["apellido"] = "apellido";
    UsuarioScalarFieldEnum["rol"] = "rol";
    UsuarioScalarFieldEnum["estado"] = "estado";
})(UsuarioScalarFieldEnum = exports.UsuarioScalarFieldEnum || (exports.UsuarioScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UsuarioScalarFieldEnum, {
    name: "UsuarioScalarFieldEnum",
    description: undefined,
});
