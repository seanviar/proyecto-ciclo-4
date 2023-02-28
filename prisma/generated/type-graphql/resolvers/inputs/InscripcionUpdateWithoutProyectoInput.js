"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_Estado_InscripcionFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_Estado_InscripcionFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutInscripcionNestedInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutInscripcionNestedInput");
let InscripcionUpdateWithoutProyectoInput = class InscripcionUpdateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InscripcionUpdateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutInscripcionNestedInput_1.UsuarioUpdateOneRequiredWithoutInscripcionNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutInscripcionNestedInput_1.UsuarioUpdateOneRequiredWithoutInscripcionNestedInput)
], InscripcionUpdateWithoutProyectoInput.prototype, "estudiante", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_InscripcionFieldUpdateOperationsInput_1.EnumEnum_Estado_InscripcionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_InscripcionFieldUpdateOperationsInput_1.EnumEnum_Estado_InscripcionFieldUpdateOperationsInput)
], InscripcionUpdateWithoutProyectoInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InscripcionUpdateWithoutProyectoInput.prototype, "fechaIngreso", void 0);
InscripcionUpdateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateWithoutProyectoInput", {
        isAbstract: true
    })
], InscripcionUpdateWithoutProyectoInput);
exports.InscripcionUpdateWithoutProyectoInput = InscripcionUpdateWithoutProyectoInput;
