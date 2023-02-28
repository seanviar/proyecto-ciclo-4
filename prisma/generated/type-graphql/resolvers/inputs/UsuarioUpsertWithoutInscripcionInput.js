"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutInscripcionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutInscripcionInput_1 = require("../inputs/UsuarioCreateWithoutInscripcionInput");
const UsuarioUpdateWithoutInscripcionInput_1 = require("../inputs/UsuarioUpdateWithoutInscripcionInput");
let UsuarioUpsertWithoutInscripcionInput = class UsuarioUpsertWithoutInscripcionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutInscripcionInput_1.UsuarioUpdateWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutInscripcionInput_1.UsuarioUpdateWithoutInscripcionInput)
], UsuarioUpsertWithoutInscripcionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionInput_1.UsuarioCreateWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutInscripcionInput_1.UsuarioCreateWithoutInscripcionInput)
], UsuarioUpsertWithoutInscripcionInput.prototype, "create", void 0);
UsuarioUpsertWithoutInscripcionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpsertWithoutInscripcionInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutInscripcionInput);
exports.UsuarioUpsertWithoutInscripcionInput = UsuarioUpsertWithoutInscripcionInput;
