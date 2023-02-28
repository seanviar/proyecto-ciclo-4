"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateWithoutLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceUpdateManyWithoutProyectoNestedInput_1 = require("../inputs/AvanceUpdateManyWithoutProyectoNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_Estado_ProyectoFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutProyectoNestedInput_1 = require("../inputs/InscripcionUpdateManyWithoutProyectoNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProyectoUpdateWithoutLiderInput = class ProyectoUpdateWithoutLiderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutLiderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutLiderInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutLiderInput.prototype, "objetivosGenerales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutLiderInput.prototype, "objetivosEspesificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], ProyectoUpdateWithoutLiderInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutLiderInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutLiderInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutLiderInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutLiderInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateManyWithoutProyectoNestedInput_1.AvanceUpdateManyWithoutProyectoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceUpdateManyWithoutProyectoNestedInput_1.AvanceUpdateManyWithoutProyectoNestedInput)
], ProyectoUpdateWithoutLiderInput.prototype, "avance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutProyectoNestedInput_1.InscripcionUpdateManyWithoutProyectoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateManyWithoutProyectoNestedInput_1.InscripcionUpdateManyWithoutProyectoNestedInput)
], ProyectoUpdateWithoutLiderInput.prototype, "inscripcion", void 0);
ProyectoUpdateWithoutLiderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateWithoutLiderInput", {
        isAbstract: true
    })
], ProyectoUpdateWithoutLiderInput);
exports.ProyectoUpdateWithoutLiderInput = ProyectoUpdateWithoutLiderInput;
