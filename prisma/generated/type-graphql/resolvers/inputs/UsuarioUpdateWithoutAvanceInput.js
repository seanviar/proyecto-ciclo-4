"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateWithoutAvanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_Estado_UsuarioFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_Estado_UsuarioFieldUpdateOperationsInput");
const EnumEnum_RolFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RolFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutEstudianteNestedInput_1 = require("../inputs/InscripcionUpdateManyWithoutEstudianteNestedInput");
const ProyectoUpdateManyWithoutLiderNestedInput_1 = require("../inputs/ProyectoUpdateManyWithoutLiderNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsuarioUpdateWithoutAvanceInput = class UsuarioUpdateWithoutAvanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAvanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAvanceInput.prototype, "correo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAvanceInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAvanceInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAvanceInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAvanceInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_UsuarioFieldUpdateOperationsInput_1.EnumEnum_Estado_UsuarioFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_UsuarioFieldUpdateOperationsInput_1.EnumEnum_Estado_UsuarioFieldUpdateOperationsInput)
], UsuarioUpdateWithoutAvanceInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutEstudianteNestedInput_1.InscripcionUpdateManyWithoutEstudianteNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateManyWithoutEstudianteNestedInput_1.InscripcionUpdateManyWithoutEstudianteNestedInput)
], UsuarioUpdateWithoutAvanceInput.prototype, "inscripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateManyWithoutLiderNestedInput_1.ProyectoUpdateManyWithoutLiderNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateManyWithoutLiderNestedInput_1.ProyectoUpdateManyWithoutLiderNestedInput)
], UsuarioUpdateWithoutAvanceInput.prototype, "proyecto", void 0);
UsuarioUpdateWithoutAvanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateWithoutAvanceInput", {
        isAbstract: true
    })
], UsuarioUpdateWithoutAvanceInput);
exports.UsuarioUpdateWithoutAvanceInput = UsuarioUpdateWithoutAvanceInput;
