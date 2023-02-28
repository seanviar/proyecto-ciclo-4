"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateOrConnectWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateWithoutEstudianteInput_1 = require("../inputs/AvanceCreateWithoutEstudianteInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceCreateOrConnectWithoutEstudianteInput = class AvanceCreateOrConnectWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], AvanceCreateOrConnectWithoutEstudianteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceCreateWithoutEstudianteInput_1.AvanceCreateWithoutEstudianteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceCreateWithoutEstudianteInput_1.AvanceCreateWithoutEstudianteInput)
], AvanceCreateOrConnectWithoutEstudianteInput.prototype, "create", void 0);
AvanceCreateOrConnectWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceCreateOrConnectWithoutEstudianteInput", {
        isAbstract: true
    })
], AvanceCreateOrConnectWithoutEstudianteInput);
exports.AvanceCreateOrConnectWithoutEstudianteInput = AvanceCreateOrConnectWithoutEstudianteInput;
