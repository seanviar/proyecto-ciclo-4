"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Fase_Proyecto_1 = require("../../enums/Enum_Fase_Proyecto");
let NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput = class NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Fase_Proyecto_1.Enum_Fase_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput);
exports.NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput = NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput;
