"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutProyectoInput_1 = require("../inputs/UsuarioCreateWithoutProyectoInput");
const UsuarioUpdateWithoutProyectoInput_1 = require("../inputs/UsuarioUpdateWithoutProyectoInput");
let UsuarioUpsertWithoutProyectoInput = class UsuarioUpsertWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutProyectoInput_1.UsuarioUpdateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutProyectoInput_1.UsuarioUpdateWithoutProyectoInput)
], UsuarioUpsertWithoutProyectoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectoInput_1.UsuarioCreateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutProyectoInput_1.UsuarioCreateWithoutProyectoInput)
], UsuarioUpsertWithoutProyectoInput.prototype, "create", void 0);
UsuarioUpsertWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpsertWithoutProyectoInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutProyectoInput);
exports.UsuarioUpsertWithoutProyectoInput = UsuarioUpsertWithoutProyectoInput;
