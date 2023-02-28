"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutInscripcionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutInscripcionInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutInscripcionInput");
const UsuarioCreateWithoutInscripcionInput_1 = require("../inputs/UsuarioCreateWithoutInscripcionInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutInscripcionInput = class UsuarioCreateNestedOneWithoutInscripcionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionInput_1.UsuarioCreateWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutInscripcionInput_1.UsuarioCreateWithoutInscripcionInput)
], UsuarioCreateNestedOneWithoutInscripcionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutInscripcionInput_1.UsuarioCreateOrConnectWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutInscripcionInput_1.UsuarioCreateOrConnectWithoutInscripcionInput)
], UsuarioCreateNestedOneWithoutInscripcionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutInscripcionInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutInscripcionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutInscripcionInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutInscripcionInput);
exports.UsuarioCreateNestedOneWithoutInscripcionInput = UsuarioCreateNestedOneWithoutInscripcionInput;
