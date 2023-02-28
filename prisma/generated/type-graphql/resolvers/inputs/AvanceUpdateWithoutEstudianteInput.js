"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutAvanceNestedInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutAvanceNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AvanceUpdateWithoutEstudianteInput = class AvanceUpdateWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutEstudianteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutAvanceNestedInput_1.ProyectoUpdateOneRequiredWithoutAvanceNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateOneRequiredWithoutAvanceNestedInput_1.ProyectoUpdateOneRequiredWithoutAvanceNestedInput)
], AvanceUpdateWithoutEstudianteInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AvanceUpdateWithoutEstudianteInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutEstudianteInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutEstudianteInput.prototype, "observaciones", void 0);
AvanceUpdateWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceUpdateWithoutEstudianteInput", {
        isAbstract: true
    })
], AvanceUpdateWithoutEstudianteInput);
exports.AvanceUpdateWithoutEstudianteInput = AvanceUpdateWithoutEstudianteInput;
