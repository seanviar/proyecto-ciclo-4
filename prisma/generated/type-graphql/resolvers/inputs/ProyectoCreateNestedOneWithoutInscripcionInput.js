"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateNestedOneWithoutInscripcionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutInscripcionInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutInscripcionInput");
const ProyectoCreateWithoutInscripcionInput_1 = require("../inputs/ProyectoCreateWithoutInscripcionInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateNestedOneWithoutInscripcionInput = class ProyectoCreateNestedOneWithoutInscripcionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionInput_1.ProyectoCreateWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutInscripcionInput_1.ProyectoCreateWithoutInscripcionInput)
], ProyectoCreateNestedOneWithoutInscripcionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutInscripcionInput_1.ProyectoCreateOrConnectWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutInscripcionInput_1.ProyectoCreateOrConnectWithoutInscripcionInput)
], ProyectoCreateNestedOneWithoutInscripcionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateNestedOneWithoutInscripcionInput.prototype, "connect", void 0);
ProyectoCreateNestedOneWithoutInscripcionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateNestedOneWithoutInscripcionInput", {
        isAbstract: true
    })
], ProyectoCreateNestedOneWithoutInscripcionInput);
exports.ProyectoCreateNestedOneWithoutInscripcionInput = ProyectoCreateNestedOneWithoutInscripcionInput;
