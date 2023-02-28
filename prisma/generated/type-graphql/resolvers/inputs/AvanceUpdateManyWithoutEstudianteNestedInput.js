"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateManyWithoutEstudianteNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateManyEstudianteInputEnvelope_1 = require("../inputs/AvanceCreateManyEstudianteInputEnvelope");
const AvanceCreateOrConnectWithoutEstudianteInput_1 = require("../inputs/AvanceCreateOrConnectWithoutEstudianteInput");
const AvanceCreateWithoutEstudianteInput_1 = require("../inputs/AvanceCreateWithoutEstudianteInput");
const AvanceScalarWhereInput_1 = require("../inputs/AvanceScalarWhereInput");
const AvanceUpdateManyWithWhereWithoutEstudianteInput_1 = require("../inputs/AvanceUpdateManyWithWhereWithoutEstudianteInput");
const AvanceUpdateWithWhereUniqueWithoutEstudianteInput_1 = require("../inputs/AvanceUpdateWithWhereUniqueWithoutEstudianteInput");
const AvanceUpsertWithWhereUniqueWithoutEstudianteInput_1 = require("../inputs/AvanceUpsertWithWhereUniqueWithoutEstudianteInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceUpdateManyWithoutEstudianteNestedInput = class AvanceUpdateManyWithoutEstudianteNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceCreateWithoutEstudianteInput_1.AvanceCreateWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutEstudianteInput_1.AvanceCreateOrConnectWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceUpsertWithWhereUniqueWithoutEstudianteInput_1.AvanceUpsertWithWhereUniqueWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceCreateManyEstudianteInputEnvelope_1.AvanceCreateManyEstudianteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceCreateManyEstudianteInputEnvelope_1.AvanceCreateManyEstudianteInputEnvelope)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceUpdateWithWhereUniqueWithoutEstudianteInput_1.AvanceUpdateWithWhereUniqueWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceUpdateManyWithWhereWithoutEstudianteInput_1.AvanceUpdateManyWithWhereWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceScalarWhereInput_1.AvanceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceUpdateManyWithoutEstudianteNestedInput.prototype, "deleteMany", void 0);
AvanceUpdateManyWithoutEstudianteNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceUpdateManyWithoutEstudianteNestedInput", {
        isAbstract: true
    })
], AvanceUpdateManyWithoutEstudianteNestedInput);
exports.AvanceUpdateManyWithoutEstudianteNestedInput = AvanceUpdateManyWithoutEstudianteNestedInput;
