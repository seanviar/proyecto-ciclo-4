"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_Estado_InscripcionFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let EnumEnum_Estado_InscripcionFieldUpdateOperationsInput = class EnumEnum_Estado_InscripcionFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_Estado_InscripcionFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_Estado_InscripcionFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_Estado_InscripcionFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_Estado_InscripcionFieldUpdateOperationsInput);
exports.EnumEnum_Estado_InscripcionFieldUpdateOperationsInput = EnumEnum_Estado_InscripcionFieldUpdateOperationsInput;
