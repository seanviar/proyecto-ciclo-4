"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUsuarioOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioWhereUniqueInput_1 = require("../../../inputs/UsuarioWhereUniqueInput");
let FindUniqueUsuarioOrThrowArgs = class FindUniqueUsuarioOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], FindUniqueUsuarioOrThrowArgs.prototype, "where", void 0);
FindUniqueUsuarioOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueUsuarioOrThrowArgs);
exports.FindUniqueUsuarioOrThrowArgs = FindUniqueUsuarioOrThrowArgs;
