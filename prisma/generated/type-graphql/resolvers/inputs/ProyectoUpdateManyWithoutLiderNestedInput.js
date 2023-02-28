"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateManyWithoutLiderNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateManyLiderInputEnvelope_1 = require("../inputs/ProyectoCreateManyLiderInputEnvelope");
const ProyectoCreateOrConnectWithoutLiderInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutLiderInput");
const ProyectoCreateWithoutLiderInput_1 = require("../inputs/ProyectoCreateWithoutLiderInput");
const ProyectoScalarWhereInput_1 = require("../inputs/ProyectoScalarWhereInput");
const ProyectoUpdateManyWithWhereWithoutLiderInput_1 = require("../inputs/ProyectoUpdateManyWithWhereWithoutLiderInput");
const ProyectoUpdateWithWhereUniqueWithoutLiderInput_1 = require("../inputs/ProyectoUpdateWithWhereUniqueWithoutLiderInput");
const ProyectoUpsertWithWhereUniqueWithoutLiderInput_1 = require("../inputs/ProyectoUpsertWithWhereUniqueWithoutLiderInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoUpdateManyWithoutLiderNestedInput = class ProyectoUpdateManyWithoutLiderNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoCreateWithoutLiderInput_1.ProyectoCreateWithoutLiderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoCreateOrConnectWithoutLiderInput_1.ProyectoCreateOrConnectWithoutLiderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoUpsertWithWhereUniqueWithoutLiderInput_1.ProyectoUpsertWithWhereUniqueWithoutLiderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateManyLiderInputEnvelope_1.ProyectoCreateManyLiderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateManyLiderInputEnvelope_1.ProyectoCreateManyLiderInputEnvelope)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoUpdateWithWhereUniqueWithoutLiderInput_1.ProyectoUpdateWithWhereUniqueWithoutLiderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoUpdateManyWithWhereWithoutLiderInput_1.ProyectoUpdateManyWithWhereWithoutLiderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereInput_1.ProyectoScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoUpdateManyWithoutLiderNestedInput.prototype, "deleteMany", void 0);
ProyectoUpdateManyWithoutLiderNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateManyWithoutLiderNestedInput", {
        isAbstract: true
    })
], ProyectoUpdateManyWithoutLiderNestedInput);
exports.ProyectoUpdateManyWithoutLiderNestedInput = ProyectoUpdateManyWithoutLiderNestedInput;
