"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Proyecto_1 = require("../../enums/Enum_Estado_Proyecto");
let EnumEnum_Estado_ProyectoFieldUpdateOperationsInput = class EnumEnum_Estado_ProyectoFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Proyecto_1.Enum_Estado_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_Estado_ProyectoFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_Estado_ProyectoFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_Estado_ProyectoFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_Estado_ProyectoFieldUpdateOperationsInput);
exports.EnumEnum_Estado_ProyectoFieldUpdateOperationsInput = EnumEnum_Estado_ProyectoFieldUpdateOperationsInput;
