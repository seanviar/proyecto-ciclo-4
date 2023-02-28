"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_Estado_InscripcionFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_Estado_InscripcionFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutInscripcionNestedInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutInscripcionNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutInscripcionNestedInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutInscripcionNestedInput");
let InscripcionUpdateInput = class InscripcionUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InscripcionUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutInscripcionNestedInput_1.ProyectoUpdateOneRequiredWithoutInscripcionNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateOneRequiredWithoutInscripcionNestedInput_1.ProyectoUpdateOneRequiredWithoutInscripcionNestedInput)
], InscripcionUpdateInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutInscripcionNestedInput_1.UsuarioUpdateOneRequiredWithoutInscripcionNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutInscripcionNestedInput_1.UsuarioUpdateOneRequiredWithoutInscripcionNestedInput)
], InscripcionUpdateInput.prototype, "estudiante", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_InscripcionFieldUpdateOperationsInput_1.EnumEnum_Estado_InscripcionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_InscripcionFieldUpdateOperationsInput_1.EnumEnum_Estado_InscripcionFieldUpdateOperationsInput)
], InscripcionUpdateInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InscripcionUpdateInput.prototype, "fechaIngreso", void 0);
InscripcionUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateInput", {
        isAbstract: true
    })
], InscripcionUpdateInput);
exports.InscripcionUpdateInput = InscripcionUpdateInput;
