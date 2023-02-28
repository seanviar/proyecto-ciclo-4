"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUsuarioOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioOrderByWithRelationInput_1 = require("../../../inputs/UsuarioOrderByWithRelationInput");
const UsuarioWhereInput_1 = require("../../../inputs/UsuarioWhereInput");
const UsuarioWhereUniqueInput_1 = require("../../../inputs/UsuarioWhereUniqueInput");
const UsuarioScalarFieldEnum_1 = require("../../../../enums/UsuarioScalarFieldEnum");
let FindFirstUsuarioOrThrowArgs = class FindFirstUsuarioOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereInput_1.UsuarioWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereInput_1.UsuarioWhereInput)
], FindFirstUsuarioOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUsuarioOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], FindFirstUsuarioOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUsuarioOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUsuarioOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioScalarFieldEnum_1.UsuarioScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUsuarioOrThrowArgs.prototype, "distinct", void 0);
FindFirstUsuarioOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstUsuarioOrThrowArgs);
exports.FindFirstUsuarioOrThrowArgs = FindFirstUsuarioOrThrowArgs;
