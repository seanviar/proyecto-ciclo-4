"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpsertWithoutInscripcionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutInscripcionInput_1 = require("../inputs/ProyectoCreateWithoutInscripcionInput");
const ProyectoUpdateWithoutInscripcionInput_1 = require("../inputs/ProyectoUpdateWithoutInscripcionInput");
let ProyectoUpsertWithoutInscripcionInput = class ProyectoUpsertWithoutInscripcionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutInscripcionInput_1.ProyectoUpdateWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutInscripcionInput_1.ProyectoUpdateWithoutInscripcionInput)
], ProyectoUpsertWithoutInscripcionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionInput_1.ProyectoCreateWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutInscripcionInput_1.ProyectoCreateWithoutInscripcionInput)
], ProyectoUpsertWithoutInscripcionInput.prototype, "create", void 0);
ProyectoUpsertWithoutInscripcionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpsertWithoutInscripcionInput", {
        isAbstract: true
    })
], ProyectoUpsertWithoutInscripcionInput);
exports.ProyectoUpsertWithoutInscripcionInput = ProyectoUpsertWithoutInscripcionInput;
