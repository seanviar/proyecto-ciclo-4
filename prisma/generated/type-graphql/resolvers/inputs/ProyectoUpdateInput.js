"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateInput = void 0;
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
const UsuarioUpdateOneRequiredWithoutProyectoNestedInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutProyectoNestedInput");
let ProyectoUpdateInput = class ProyectoUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateInput.prototype, "objetivosGenerales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateInput.prototype, "objetivosEspesificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], ProyectoUpdateInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProyectoUpdateInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProyectoUpdateInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutProyectoNestedInput_1.UsuarioUpdateOneRequiredWithoutProyectoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutProyectoNestedInput_1.UsuarioUpdateOneRequiredWithoutProyectoNestedInput)
], ProyectoUpdateInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_ProyectoFieldUpdateOperationsInput_1.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput)
], ProyectoUpdateInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput_1.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput)
], ProyectoUpdateInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateManyWithoutProyectoNestedInput_1.AvanceUpdateManyWithoutProyectoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceUpdateManyWithoutProyectoNestedInput_1.AvanceUpdateManyWithoutProyectoNestedInput)
], ProyectoUpdateInput.prototype, "avance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutProyectoNestedInput_1.InscripcionUpdateManyWithoutProyectoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateManyWithoutProyectoNestedInput_1.InscripcionUpdateManyWithoutProyectoNestedInput)
], ProyectoUpdateInput.prototype, "inscripcion", void 0);
ProyectoUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateInput", {
        isAbstract: true
    })
], ProyectoUpdateInput);
exports.ProyectoUpdateInput = ProyectoUpdateInput;
