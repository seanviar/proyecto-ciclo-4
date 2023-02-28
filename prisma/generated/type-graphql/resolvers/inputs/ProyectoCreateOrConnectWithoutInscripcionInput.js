"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateOrConnectWithoutInscripcionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutInscripcionInput_1 = require("../inputs/ProyectoCreateWithoutInscripcionInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateOrConnectWithoutInscripcionInput = class ProyectoCreateOrConnectWithoutInscripcionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateOrConnectWithoutInscripcionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionInput_1.ProyectoCreateWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutInscripcionInput_1.ProyectoCreateWithoutInscripcionInput)
], ProyectoCreateOrConnectWithoutInscripcionInput.prototype, "create", void 0);
ProyectoCreateOrConnectWithoutInscripcionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutInscripcionInput", {
        isAbstract: true
    })
], ProyectoCreateOrConnectWithoutInscripcionInput);
exports.ProyectoCreateOrConnectWithoutInscripcionInput = ProyectoCreateOrConnectWithoutInscripcionInput;
