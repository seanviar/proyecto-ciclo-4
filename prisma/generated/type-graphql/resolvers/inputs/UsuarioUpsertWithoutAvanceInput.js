"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutAvanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutAvanceInput_1 = require("../inputs/UsuarioCreateWithoutAvanceInput");
const UsuarioUpdateWithoutAvanceInput_1 = require("../inputs/UsuarioUpdateWithoutAvanceInput");
let UsuarioUpsertWithoutAvanceInput = class UsuarioUpsertWithoutAvanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutAvanceInput_1.UsuarioUpdateWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutAvanceInput_1.UsuarioUpdateWithoutAvanceInput)
], UsuarioUpsertWithoutAvanceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvanceInput_1.UsuarioCreateWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutAvanceInput_1.UsuarioCreateWithoutAvanceInput)
], UsuarioUpsertWithoutAvanceInput.prototype, "create", void 0);
UsuarioUpsertWithoutAvanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpsertWithoutAvanceInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutAvanceInput);
exports.UsuarioUpsertWithoutAvanceInput = UsuarioUpsertWithoutAvanceInput;
