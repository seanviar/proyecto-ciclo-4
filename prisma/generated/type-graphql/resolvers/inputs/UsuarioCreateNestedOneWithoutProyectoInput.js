"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutProyectoInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutProyectoInput");
const UsuarioCreateWithoutProyectoInput_1 = require("../inputs/UsuarioCreateWithoutProyectoInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutProyectoInput = class UsuarioCreateNestedOneWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectoInput_1.UsuarioCreateWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutProyectoInput_1.UsuarioCreateWithoutProyectoInput)
], UsuarioCreateNestedOneWithoutProyectoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutProyectoInput_1.UsuarioCreateOrConnectWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutProyectoInput_1.UsuarioCreateOrConnectWithoutProyectoInput)
], UsuarioCreateNestedOneWithoutProyectoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutProyectoInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutProyectoInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutProyectoInput);
exports.UsuarioCreateNestedOneWithoutProyectoInput = UsuarioCreateNestedOneWithoutProyectoInput;
