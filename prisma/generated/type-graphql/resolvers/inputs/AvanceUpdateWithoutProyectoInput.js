"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutAvanceNestedInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutAvanceNestedInput");
let AvanceUpdateWithoutProyectoInput = class AvanceUpdateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AvanceUpdateWithoutProyectoInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutProyectoInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvanceUpdateWithoutProyectoInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutAvanceNestedInput_1.UsuarioUpdateOneRequiredWithoutAvanceNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutAvanceNestedInput_1.UsuarioUpdateOneRequiredWithoutAvanceNestedInput)
], AvanceUpdateWithoutProyectoInput.prototype, "estudiante", void 0);
AvanceUpdateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceUpdateWithoutProyectoInput", {
        isAbstract: true
    })
], AvanceUpdateWithoutProyectoInput);
exports.AvanceUpdateWithoutProyectoInput = AvanceUpdateWithoutProyectoInput;
