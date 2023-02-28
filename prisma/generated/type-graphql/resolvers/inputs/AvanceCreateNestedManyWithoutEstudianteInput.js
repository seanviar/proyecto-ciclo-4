"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateNestedManyWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateManyEstudianteInputEnvelope_1 = require("../inputs/AvanceCreateManyEstudianteInputEnvelope");
const AvanceCreateOrConnectWithoutEstudianteInput_1 = require("../inputs/AvanceCreateOrConnectWithoutEstudianteInput");
const AvanceCreateWithoutEstudianteInput_1 = require("../inputs/AvanceCreateWithoutEstudianteInput");
const AvanceWhereUniqueInput_1 = require("../inputs/AvanceWhereUniqueInput");
let AvanceCreateNestedManyWithoutEstudianteInput = class AvanceCreateNestedManyWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceCreateWithoutEstudianteInput_1.AvanceCreateWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceCreateNestedManyWithoutEstudianteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutEstudianteInput_1.AvanceCreateOrConnectWithoutEstudianteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceCreateNestedManyWithoutEstudianteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceCreateManyEstudianteInputEnvelope_1.AvanceCreateManyEstudianteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceCreateManyEstudianteInputEnvelope_1.AvanceCreateManyEstudianteInputEnvelope)
], AvanceCreateNestedManyWithoutEstudianteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereUniqueInput_1.AvanceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceCreateNestedManyWithoutEstudianteInput.prototype, "connect", void 0);
AvanceCreateNestedManyWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceCreateNestedManyWithoutEstudianteInput", {
        isAbstract: true
    })
], AvanceCreateNestedManyWithoutEstudianteInput);
exports.AvanceCreateNestedManyWithoutEstudianteInput = AvanceCreateNestedManyWithoutEstudianteInput;
