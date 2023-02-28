"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateManyWithoutEstudianteNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateManyEstudianteInputEnvelope_1 = require("../inputs/InscripcionCreateManyEstudianteInputEnvelope");
const InscripcionCreateOrConnectWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateOrConnectWithoutEstudianteInput");
const InscripcionCreateWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateWithoutEstudianteInput");
const InscripcionScalarWhereInput_1 = require("../inputs/InscripcionScalarWhereInput");
const InscripcionUpdateManyWithWhereWithoutEstudianteInput_1 = require("../inputs/InscripcionUpdateManyWithWhereWithoutEstudianteInput");
const InscripcionUpdateWithWhereUniqueWithoutEstudianteInput_1 = require("../inputs/InscripcionUpdateWithWhereUniqueWithoutEstudianteInput");
const InscripcionUpsertWithWhereUniqueWithoutEstudianteInput_1 = require("../inputs/InscripcionUpsertWithWhereUniqueWithoutEstudianteInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionUpdateManyWithoutEstudianteNestedInput = class InscripcionUpdateManyWithoutEstudianteNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateWithoutEstudianteInput_1.InscripcionCreateWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateOrConnectWithoutEstudianteInput_1.InscripcionCreateOrConnectWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionUpsertWithWhereUniqueWithoutEstudianteInput_1.InscripcionUpsertWithWhereUniqueWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateManyEstudianteInputEnvelope_1.InscripcionCreateManyEstudianteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCreateManyEstudianteInputEnvelope_1.InscripcionCreateManyEstudianteInputEnvelope)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionUpdateWithWhereUniqueWithoutEstudianteInput_1.InscripcionUpdateWithWhereUniqueWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionUpdateManyWithWhereWithoutEstudianteInput_1.InscripcionUpdateManyWithWhereWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarWhereInput_1.InscripcionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutEstudianteNestedInput.prototype, "deleteMany", void 0);
InscripcionUpdateManyWithoutEstudianteNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateManyWithoutEstudianteNestedInput", {
        isAbstract: true
    })
], InscripcionUpdateManyWithoutEstudianteNestedInput);
exports.InscripcionUpdateManyWithoutEstudianteNestedInput = InscripcionUpdateManyWithoutEstudianteNestedInput;
