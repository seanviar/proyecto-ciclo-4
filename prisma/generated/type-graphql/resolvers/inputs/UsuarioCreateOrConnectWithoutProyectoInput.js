"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutProyectoInput_1 = require("../inputs/UsuarioCreateWithoutProyectoInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutProyectoInput = class UsuarioCreateOrConnectWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectoInput_1.UsuarioCreateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutProyectoInput_1.UsuarioCreateWithoutProyectoInput)
], UsuarioCreateOrConnectWithoutProyectoInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutProyectoInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutProyectoInput);
exports.UsuarioCreateOrConnectWithoutProyectoInput = UsuarioCreateOrConnectWithoutProyectoInput;
