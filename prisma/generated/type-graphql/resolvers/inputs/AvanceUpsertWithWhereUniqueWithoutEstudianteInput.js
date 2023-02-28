"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpsertWithWhereUniqueWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateWithoutEstudianteInput_1 = require("../inputs/AvanceCreateWithoutEstudianteInput");
const AvanceUpdateWithoutEstudianteInput_1 = require("../inputs/AvanceUpdateWithoutEstudianteInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceUpsertWithWhereUniqueWithoutEstudianteInput = class AvanceUpsertWithWhereUniqueWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], AvanceUpsertWithWhereUniqueWithoutEstudianteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateWithoutEstudianteInput_1.AvanceUpdateWithoutEstudianteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceUpdateWithoutEstudianteInput_1.AvanceUpdateWithoutEstudianteInput)
], AvanceUpsertWithWhereUniqueWithoutEstudianteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceCreateWithoutEstudianteInput_1.AvanceCreateWithoutEstudianteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceCreateWithoutEstudianteInput_1.AvanceCreateWithoutEstudianteInput)
], AvanceUpsertWithWhereUniqueWithoutEstudianteInput.prototype, "create", void 0);
AvanceUpsertWithWhereUniqueWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceUpsertWithWhereUniqueWithoutEstudianteInput", {
        isAbstract: true
    })
], AvanceUpsertWithWhereUniqueWithoutEstudianteInput);
exports.AvanceUpsertWithWhereUniqueWithoutEstudianteInput = AvanceUpsertWithWhereUniqueWithoutEstudianteInput;
