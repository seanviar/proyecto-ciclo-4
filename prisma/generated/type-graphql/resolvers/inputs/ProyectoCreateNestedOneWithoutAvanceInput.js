"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateNestedOneWithoutAvanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutAvanceInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutAvanceInput");
const ProyectoCreateWithoutAvanceInput_1 = require("../inputs/ProyectoCreateWithoutAvanceInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateNestedOneWithoutAvanceInput = class ProyectoCreateNestedOneWithoutAvanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutAvanceInput_1.ProyectoCreateWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutAvanceInput_1.ProyectoCreateWithoutAvanceInput)
], ProyectoCreateNestedOneWithoutAvanceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutAvanceInput_1.ProyectoCreateOrConnectWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutAvanceInput_1.ProyectoCreateOrConnectWithoutAvanceInput)
], ProyectoCreateNestedOneWithoutAvanceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateNestedOneWithoutAvanceInput.prototype, "connect", void 0);
ProyectoCreateNestedOneWithoutAvanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateNestedOneWithoutAvanceInput", {
        isAbstract: true
    })
], ProyectoCreateNestedOneWithoutAvanceInput);
exports.ProyectoCreateNestedOneWithoutAvanceInput = ProyectoCreateNestedOneWithoutAvanceInput;
