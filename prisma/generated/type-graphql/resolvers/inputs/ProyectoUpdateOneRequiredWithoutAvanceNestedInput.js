"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateOneRequiredWithoutAvanceNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutAvanceInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutAvanceInput");
const ProyectoCreateWithoutAvanceInput_1 = require("../inputs/ProyectoCreateWithoutAvanceInput");
const ProyectoUpdateWithoutAvanceInput_1 = require("../inputs/ProyectoUpdateWithoutAvanceInput");
const ProyectoUpsertWithoutAvanceInput_1 = require("../inputs/ProyectoUpsertWithoutAvanceInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoUpdateOneRequiredWithoutAvanceNestedInput = class ProyectoUpdateOneRequiredWithoutAvanceNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutAvanceInput_1.ProyectoCreateWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutAvanceInput_1.ProyectoCreateWithoutAvanceInput)
], ProyectoUpdateOneRequiredWithoutAvanceNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutAvanceInput_1.ProyectoCreateOrConnectWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutAvanceInput_1.ProyectoCreateOrConnectWithoutAvanceInput)
], ProyectoUpdateOneRequiredWithoutAvanceNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpsertWithoutAvanceInput_1.ProyectoUpsertWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpsertWithoutAvanceInput_1.ProyectoUpsertWithoutAvanceInput)
], ProyectoUpdateOneRequiredWithoutAvanceNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoUpdateOneRequiredWithoutAvanceNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutAvanceInput_1.ProyectoUpdateWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutAvanceInput_1.ProyectoUpdateWithoutAvanceInput)
], ProyectoUpdateOneRequiredWithoutAvanceNestedInput.prototype, "update", void 0);
ProyectoUpdateOneRequiredWithoutAvanceNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateOneRequiredWithoutAvanceNestedInput", {
        isAbstract: true
    })
], ProyectoUpdateOneRequiredWithoutAvanceNestedInput);
exports.ProyectoUpdateOneRequiredWithoutAvanceNestedInput = ProyectoUpdateOneRequiredWithoutAvanceNestedInput;
