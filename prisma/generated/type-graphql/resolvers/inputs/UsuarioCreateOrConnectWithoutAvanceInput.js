"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutAvanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutAvanceInput_1 = require("../inputs/UsuarioCreateWithoutAvanceInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutAvanceInput = class UsuarioCreateOrConnectWithoutAvanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutAvanceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvanceInput_1.UsuarioCreateWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutAvanceInput_1.UsuarioCreateWithoutAvanceInput)
], UsuarioCreateOrConnectWithoutAvanceInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutAvanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutAvanceInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutAvanceInput);
exports.UsuarioCreateOrConnectWithoutAvanceInput = UsuarioCreateOrConnectWithoutAvanceInput;
