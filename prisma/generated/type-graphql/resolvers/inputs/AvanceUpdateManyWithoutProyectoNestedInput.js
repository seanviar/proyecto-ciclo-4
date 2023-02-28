"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateManyWithoutProyectoNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateManyProyectoInputEnvelope_1 = require("../inputs/AvanceCreateManyProyectoInputEnvelope");
const AvanceCreateOrConnectWithoutProyectoInput_1 = require("../inputs/AvanceCreateOrConnectWithoutProyectoInput");
const AvanceCreateWithoutProyectoInput_1 = require("../inputs/AvanceCreateWithoutProyectoInput");
const AvanceScalarWhereInput_1 = require("../inputs/AvanceScalarWhereInput");
const AvanceUpdateManyWithWhereWithoutProyectoInput_1 = require("../inputs/AvanceUpdateManyWithWhereWithoutProyectoInput");
const AvanceUpdateWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/AvanceUpdateWithWhereUniqueWithoutProyectoInput");
const AvanceUpsertWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/AvanceUpsertWithWhereUniqueWithoutProyectoInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceUpdateManyWithoutProyectoNestedInput = class AvanceUpdateManyWithoutProyectoNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceCreateWithoutProyectoInput_1.AvanceCreateWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutProyectoInput_1.AvanceCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceUpsertWithWhereUniqueWithoutProyectoInput_1.AvanceUpsertWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceCreateManyProyectoInputEnvelope_1.AvanceCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceCreateManyProyectoInputEnvelope_1.AvanceCreateManyProyectoInputEnvelope)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceUpdateWithWhereUniqueWithoutProyectoInput_1.AvanceUpdateWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceUpdateManyWithWhereWithoutProyectoInput_1.AvanceUpdateManyWithWhereWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceScalarWhereInput_1.AvanceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutProyectoNestedInput.prototype, "deleteMany", void 0);
AvanceUpdateManyWithoutProyectoNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceUpdateManyWithoutProyectoNestedInput", {
        isAbstract: true
    })
], AvanceUpdateManyWithoutProyectoNestedInput);
exports.AvanceUpdateManyWithoutProyectoNestedInput = AvanceUpdateManyWithoutProyectoNestedInput;
