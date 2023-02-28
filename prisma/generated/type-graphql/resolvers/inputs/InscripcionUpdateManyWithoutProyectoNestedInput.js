"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateManyWithoutProyectoNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateManyProyectoInputEnvelope_1 = require("../inputs/InscripcionCreateManyProyectoInputEnvelope");
const InscripcionCreateOrConnectWithoutProyectoInput_1 = require("../inputs/InscripcionCreateOrConnectWithoutProyectoInput");
const InscripcionCreateWithoutProyectoInput_1 = require("../inputs/InscripcionCreateWithoutProyectoInput");
const InscripcionScalarWhereInput_1 = require("../inputs/InscripcionScalarWhereInput");
const InscripcionUpdateManyWithWhereWithoutProyectoInput_1 = require("../inputs/InscripcionUpdateManyWithWhereWithoutProyectoInput");
const InscripcionUpdateWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/InscripcionUpdateWithWhereUniqueWithoutProyectoInput");
const InscripcionUpsertWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/InscripcionUpsertWithWhereUniqueWithoutProyectoInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionUpdateManyWithoutProyectoNestedInput = class InscripcionUpdateManyWithoutProyectoNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateWithoutProyectoInput_1.InscripcionCreateWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateOrConnectWithoutProyectoInput_1.InscripcionCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionUpsertWithWhereUniqueWithoutProyectoInput_1.InscripcionUpsertWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateManyProyectoInputEnvelope_1.InscripcionCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCreateManyProyectoInputEnvelope_1.InscripcionCreateManyProyectoInputEnvelope)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionUpdateWithWhereUniqueWithoutProyectoInput_1.InscripcionUpdateWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionUpdateManyWithWhereWithoutProyectoInput_1.InscripcionUpdateManyWithWhereWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarWhereInput_1.InscripcionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoNestedInput.prototype, "deleteMany", void 0);
InscripcionUpdateManyWithoutProyectoNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateManyWithoutProyectoNestedInput", {
        isAbstract: true
    })
], InscripcionUpdateManyWithoutProyectoNestedInput);
exports.InscripcionUpdateManyWithoutProyectoNestedInput = InscripcionUpdateManyWithoutProyectoNestedInput;
