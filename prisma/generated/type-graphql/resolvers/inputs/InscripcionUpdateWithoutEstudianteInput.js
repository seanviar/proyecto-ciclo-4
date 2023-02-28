"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_Estado_InscripcionFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_Estado_InscripcionFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutInscripcionNestedInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutInscripcionNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InscripcionUpdateWithoutEstudianteInput = class InscripcionUpdateWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InscripcionUpdateWithoutEstudianteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutInscripcionNestedInput_1.ProyectoUpdateOneRequiredWithoutInscripcionNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateOneRequiredWithoutInscripcionNestedInput_1.ProyectoUpdateOneRequiredWithoutInscripcionNestedInput)
], InscripcionUpdateWithoutEstudianteInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_InscripcionFieldUpdateOperationsInput_1.EnumEnum_Estado_InscripcionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_InscripcionFieldUpdateOperationsInput_1.EnumEnum_Estado_InscripcionFieldUpdateOperationsInput)
], InscripcionUpdateWithoutEstudianteInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InscripcionUpdateWithoutEstudianteInput.prototype, "fechaIngreso", void 0);
InscripcionUpdateWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateWithoutEstudianteInput", {
        isAbstract: true
    })
], InscripcionUpdateWithoutEstudianteInput);
exports.InscripcionUpdateWithoutEstudianteInput = InscripcionUpdateWithoutEstudianteInput;
