"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceUpdateManyWithoutEstudianteNestedInput_1 = require("../inputs/AvanceUpdateManyWithoutEstudianteNestedInput");
const EnumEnum_Estado_UsuarioFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_Estado_UsuarioFieldUpdateOperationsInput");
const EnumEnum_RolFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RolFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutEstudianteNestedInput_1 = require("../inputs/InscripcionUpdateManyWithoutEstudianteNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsuarioUpdateWithoutProyectoInput = class UsuarioUpdateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectoInput.prototype, "correo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectoInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectoInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectoInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectoInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_UsuarioFieldUpdateOperationsInput_1.EnumEnum_Estado_UsuarioFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_UsuarioFieldUpdateOperationsInput_1.EnumEnum_Estado_UsuarioFieldUpdateOperationsInput)
], UsuarioUpdateWithoutProyectoInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutEstudianteNestedInput_1.InscripcionUpdateManyWithoutEstudianteNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateManyWithoutEstudianteNestedInput_1.InscripcionUpdateManyWithoutEstudianteNestedInput)
], UsuarioUpdateWithoutProyectoInput.prototype, "inscripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateManyWithoutEstudianteNestedInput_1.AvanceUpdateManyWithoutEstudianteNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceUpdateManyWithoutEstudianteNestedInput_1.AvanceUpdateManyWithoutEstudianteNestedInput)
], UsuarioUpdateWithoutProyectoInput.prototype, "avance", void 0);
UsuarioUpdateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateWithoutProyectoInput", {
        isAbstract: true
    })
], UsuarioUpdateWithoutProyectoInput);
exports.UsuarioUpdateWithoutProyectoInput = UsuarioUpdateWithoutProyectoInput;
