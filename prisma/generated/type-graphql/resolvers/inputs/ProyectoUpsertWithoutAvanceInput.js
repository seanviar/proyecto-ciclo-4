"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpsertWithoutAvanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutAvanceInput_1 = require("../inputs/ProyectoCreateWithoutAvanceInput");
const ProyectoUpdateWithoutAvanceInput_1 = require("../inputs/ProyectoUpdateWithoutAvanceInput");
let ProyectoUpsertWithoutAvanceInput = class ProyectoUpsertWithoutAvanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutAvanceInput_1.ProyectoUpdateWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutAvanceInput_1.ProyectoUpdateWithoutAvanceInput)
], ProyectoUpsertWithoutAvanceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutAvanceInput_1.ProyectoCreateWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutAvanceInput_1.ProyectoCreateWithoutAvanceInput)
], ProyectoUpsertWithoutAvanceInput.prototype, "create", void 0);
ProyectoUpsertWithoutAvanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpsertWithoutAvanceInput", {
        isAbstract: true
    })
], ProyectoUpsertWithoutAvanceInput);
exports.ProyectoUpsertWithoutAvanceInput = ProyectoUpsertWithoutAvanceInput;
