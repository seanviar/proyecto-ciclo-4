"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutInscripcionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutInscripcionInput_1 = require("../inputs/UsuarioCreateWithoutInscripcionInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutInscripcionInput = class UsuarioCreateOrConnectWithoutInscripcionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutInscripcionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionInput_1.UsuarioCreateWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutInscripcionInput_1.UsuarioCreateWithoutInscripcionInput)
], UsuarioCreateOrConnectWithoutInscripcionInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutInscripcionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutInscripcionInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutInscripcionInput);
exports.UsuarioCreateOrConnectWithoutInscripcionInput = UsuarioCreateOrConnectWithoutInscripcionInput;
