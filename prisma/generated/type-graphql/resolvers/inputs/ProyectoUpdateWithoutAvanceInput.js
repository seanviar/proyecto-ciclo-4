"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateWithoutAvanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_Estado_ProyectoFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutProyectoNestedInput_1 = require("../inputs/InscripcionUpdateManyWithoutProyectoNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutProyectoNestedInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutProyectoNestedInput");
let ProyectoUpdateWithoutAvanceInput = class ProyectoUpdateWithoutAvanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "objetivosGenerales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "objetivosEspesificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutProyectoNestedInput_1.UsuarioUpdateOneRequiredWithoutProyectoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutProyectoNestedInput_1.UsuarioUpdateOneRequiredWithoutProyectoNestedInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutProyectoNestedInput_1.InscripcionUpdateManyWithoutProyectoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateManyWithoutProyectoNestedInput_1.InscripcionUpdateManyWithoutProyectoNestedInput)
], ProyectoUpdateWithoutAvanceInput.prototype, "inscripcion", void 0);
ProyectoUpdateWithoutAvanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateWithoutAvanceInput", {
        isAbstract: true
    })
], ProyectoUpdateWithoutAvanceInput);
exports.ProyectoUpdateWithoutAvanceInput = ProyectoUpdateWithoutAvanceInput;
