"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateWithoutInscripcionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceUpdateManyWithoutEstudianteNestedInput_1 = require("../inputs/AvanceUpdateManyWithoutEstudianteNestedInput");
const EnumEnum_Estado_UsuarioFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_Estado_UsuarioFieldUpdateOperationsInput");
const EnumEnum_RolFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RolFieldUpdateOperationsInput");
const ProyectoUpdateManyWithoutLiderNestedInput_1 = require("../inputs/ProyectoUpdateManyWithoutLiderNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsuarioUpdateWithoutInscripcionInput = class UsuarioUpdateWithoutInscripcionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionInput.prototype, "correo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_UsuarioFieldUpdateOperationsInput_1.EnumEnum_Estado_UsuarioFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_UsuarioFieldUpdateOperationsInput_1.EnumEnum_Estado_UsuarioFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateManyWithoutLiderNestedInput_1.ProyectoUpdateManyWithoutLiderNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateManyWithoutLiderNestedInput_1.ProyectoUpdateManyWithoutLiderNestedInput)
], UsuarioUpdateWithoutInscripcionInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateManyWithoutEstudianteNestedInput_1.AvanceUpdateManyWithoutEstudianteNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceUpdateManyWithoutEstudianteNestedInput_1.AvanceUpdateManyWithoutEstudianteNestedInput)
], UsuarioUpdateWithoutInscripcionInput.prototype, "avance", void 0);
UsuarioUpdateWithoutInscripcionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateWithoutInscripcionInput", {
        isAbstract: true
    })
], UsuarioUpdateWithoutInscripcionInput);
exports.UsuarioUpdateWithoutInscripcionInput = UsuarioUpdateWithoutInscripcionInput;
