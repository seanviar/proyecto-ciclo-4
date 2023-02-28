"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateWithWhereUniqueWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceUpdateWithoutEstudianteInput_1 = require("../inputs/AvanceUpdateWithoutEstudianteInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceUpdateWithWhereUniqueWithoutEstudianteInput = class AvanceUpdateWithWhereUniqueWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], AvanceUpdateWithWhereUniqueWithoutEstudianteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateWithoutEstudianteInput_1.AvanceUpdateWithoutEstudianteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceUpdateWithoutEstudianteInput_1.AvanceUpdateWithoutEstudianteInput)
], AvanceUpdateWithWhereUniqueWithoutEstudianteInput.prototype, "data", void 0);
AvanceUpdateWithWhereUniqueWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceUpdateWithWhereUniqueWithoutEstudianteInput", {
        isAbstract: true
    })
], AvanceUpdateWithWhereUniqueWithoutEstudianteInput);
exports.AvanceUpdateWithWhereUniqueWithoutEstudianteInput = AvanceUpdateWithWhereUniqueWithoutEstudianteInput;
