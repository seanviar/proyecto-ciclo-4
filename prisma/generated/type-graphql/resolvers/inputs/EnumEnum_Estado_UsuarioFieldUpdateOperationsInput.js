"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_Estado_UsuarioFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Usuario_1 = require("../../enums/Enum_Estado_Usuario");
let EnumEnum_Estado_UsuarioFieldUpdateOperationsInput = class EnumEnum_Estado_UsuarioFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Usuario_1.Enum_Estado_Usuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_Estado_UsuarioFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_Estado_UsuarioFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_Estado_UsuarioFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_Estado_UsuarioFieldUpdateOperationsInput);
exports.EnumEnum_Estado_UsuarioFieldUpdateOperationsInput = EnumEnum_Estado_UsuarioFieldUpdateOperationsInput;
