"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateWithoutInscripcionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateNestedManyWithoutEstudianteInput_1 = require("../inputs/AvanceCreateNestedManyWithoutEstudianteInput");
const ProyectoCreateNestedManyWithoutLiderInput_1 = require("../inputs/ProyectoCreateNestedManyWithoutLiderInput");
const Enum_Estado_Usuario_1 = require("../../enums/Enum_Estado_Usuario");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UsuarioCreateWithoutInscripcionInput = class UsuarioCreateWithoutInscripcionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionInput.prototype, "correo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Usuario_1.Enum_Estado_Usuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput)
], UsuarioCreateWithoutInscripcionInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutEstudianteInput_1.AvanceCreateNestedManyWithoutEstudianteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceCreateNestedManyWithoutEstudianteInput_1.AvanceCreateNestedManyWithoutEstudianteInput)
], UsuarioCreateWithoutInscripcionInput.prototype, "avance", void 0);
UsuarioCreateWithoutInscripcionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateWithoutInscripcionInput", {
        isAbstract: true
    })
], UsuarioCreateWithoutInscripcionInput);
exports.UsuarioCreateWithoutInscripcionInput = UsuarioCreateWithoutInscripcionInput;
