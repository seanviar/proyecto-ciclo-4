"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutAvanceNestedInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutAvanceNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutAvanceNestedInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutAvanceNestedInput");
let AvanceUpdateInput = class AvanceUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutAvanceNestedInput_1.ProyectoUpdateOneRequiredWithoutAvanceNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateOneRequiredWithoutAvanceNestedInput_1.ProyectoUpdateOneRequiredWithoutAvanceNestedInput)
], AvanceUpdateInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AvanceUpdateInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutAvanceNestedInput_1.UsuarioUpdateOneRequiredWithoutAvanceNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutAvanceNestedInput_1.UsuarioUpdateOneRequiredWithoutAvanceNestedInput)
], AvanceUpdateInput.prototype, "estudiante", void 0);
AvanceUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceUpdateInput", {
        isAbstract: true
    })
], AvanceUpdateInput);
exports.AvanceUpdateInput = AvanceUpdateInput;
