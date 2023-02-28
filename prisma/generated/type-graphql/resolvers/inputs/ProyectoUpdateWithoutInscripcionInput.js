"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateWithoutInscripcionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceUpdateManyWithoutProyectoNestedInput_1 = require("../inputs/AvanceUpdateManyWithoutProyectoNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_Estado_ProyectoFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutProyectoNestedInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutProyectoNestedInput");
let ProyectoUpdateWithoutInscripcionInput = class ProyectoUpdateWithoutInscripcionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "objetivosGenerales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "objetivosEspesificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutProyectoNestedInput_1.UsuarioUpdateOneRequiredWithoutProyectoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutProyectoNestedInput_1.UsuarioUpdateOneRequiredWithoutProyectoNestedInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateManyWithoutProyectoNestedInput_1.AvanceUpdateManyWithoutProyectoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceUpdateManyWithoutProyectoNestedInput_1.AvanceUpdateManyWithoutProyectoNestedInput)
], ProyectoUpdateWithoutInscripcionInput.prototype, "avance", void 0);
ProyectoUpdateWithoutInscripcionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateWithoutInscripcionInput", {
        isAbstract: true
    })
], ProyectoUpdateWithoutInscripcionInput);
exports.ProyectoUpdateWithoutInscripcionInput = ProyectoUpdateWithoutInscripcionInput;
