"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutAvanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutAvanceInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutAvanceInput");
const UsuarioCreateWithoutAvanceInput_1 = require("../inputs/UsuarioCreateWithoutAvanceInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutAvanceInput = class UsuarioCreateNestedOneWithoutAvanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvanceInput_1.UsuarioCreateWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutAvanceInput_1.UsuarioCreateWithoutAvanceInput)
], UsuarioCreateNestedOneWithoutAvanceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAvanceInput_1.UsuarioCreateOrConnectWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutAvanceInput_1.UsuarioCreateOrConnectWithoutAvanceInput)
], UsuarioCreateNestedOneWithoutAvanceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutAvanceInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutAvanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutAvanceInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutAvanceInput);
exports.UsuarioCreateNestedOneWithoutAvanceInput = UsuarioCreateNestedOneWithoutAvanceInput;
