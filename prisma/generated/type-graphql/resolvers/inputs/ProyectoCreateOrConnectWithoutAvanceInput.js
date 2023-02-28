"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateOrConnectWithoutAvanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutAvanceInput_1 = require("../inputs/ProyectoCreateWithoutAvanceInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateOrConnectWithoutAvanceInput = class ProyectoCreateOrConnectWithoutAvanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateOrConnectWithoutAvanceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutAvanceInput_1.ProyectoCreateWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutAvanceInput_1.ProyectoCreateWithoutAvanceInput)
], ProyectoCreateOrConnectWithoutAvanceInput.prototype, "create", void 0);
ProyectoCreateOrConnectWithoutAvanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutAvanceInput", {
        isAbstract: true
    })
], ProyectoCreateOrConnectWithoutAvanceInput);
exports.ProyectoCreateOrConnectWithoutAvanceInput = ProyectoCreateOrConnectWithoutAvanceInput;
