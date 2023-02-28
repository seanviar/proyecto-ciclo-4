"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Usuario_1 = require("../../enums/Enum_Estado_Usuario");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UsuarioMinAggregate = class UsuarioMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMinAggregate.prototype, "correo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMinAggregate.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMinAggregate.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMinAggregate.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMinAggregate.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Usuario_1.Enum_Estado_Usuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMinAggregate.prototype, "estado", void 0);
UsuarioMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UsuarioMinAggregate", {
        isAbstract: true
    })
], UsuarioMinAggregate);
exports.UsuarioMinAggregate = UsuarioMinAggregate;
