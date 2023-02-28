"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateOneRequiredWithoutInscripcionNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutInscripcionInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutInscripcionInput");
const ProyectoCreateWithoutInscripcionInput_1 = require("../inputs/ProyectoCreateWithoutInscripcionInput");
const ProyectoUpdateWithoutInscripcionInput_1 = require("../inputs/ProyectoUpdateWithoutInscripcionInput");
const ProyectoUpsertWithoutInscripcionInput_1 = require("../inputs/ProyectoUpsertWithoutInscripcionInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoUpdateOneRequiredWithoutInscripcionNestedInput = class ProyectoUpdateOneRequiredWithoutInscripcionNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionInput_1.ProyectoCreateWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutInscripcionInput_1.ProyectoCreateWithoutInscripcionInput)
], ProyectoUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutInscripcionInput_1.ProyectoCreateOrConnectWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutInscripcionInput_1.ProyectoCreateOrConnectWithoutInscripcionInput)
], ProyectoUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpsertWithoutInscripcionInput_1.ProyectoUpsertWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpsertWithoutInscripcionInput_1.ProyectoUpsertWithoutInscripcionInput)
], ProyectoUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutInscripcionInput_1.ProyectoUpdateWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutInscripcionInput_1.ProyectoUpdateWithoutInscripcionInput)
], ProyectoUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "update", void 0);
ProyectoUpdateOneRequiredWithoutInscripcionNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateOneRequiredWithoutInscripcionNestedInput", {
        isAbstract: true
    })
], ProyectoUpdateOneRequiredWithoutInscripcionNestedInput);
exports.ProyectoUpdateOneRequiredWithoutInscripcionNestedInput = ProyectoUpdateOneRequiredWithoutInscripcionNestedInput;
