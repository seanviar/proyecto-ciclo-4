"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceUpdateManyWithWhereWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceScalarWhereInput_1 = require("../inputs/AvanceScalarWhereInput");
const AvanceUpdateManyMutationInput_1 = require("../inputs/AvanceUpdateManyMutationInput");
let AvanceUpdateManyWithWhereWithoutEstudianteInput = class AvanceUpdateManyWithWhereWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceScalarWhereInput_1.AvanceScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceScalarWhereInput_1.AvanceScalarWhereInput)
], AvanceUpdateManyWithWhereWithoutEstudianteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateManyMutationInput_1.AvanceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceUpdateManyMutationInput_1.AvanceUpdateManyMutationInput)
], AvanceUpdateManyWithWhereWithoutEstudianteInput.prototype, "data", void 0);
AvanceUpdateManyWithWhereWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceUpdateManyWithWhereWithoutEstudianteInput", {
        isAbstract: true
    })
], AvanceUpdateManyWithWhereWithoutEstudianteInput);
exports.AvanceUpdateManyWithWhereWithoutEstudianteInput = AvanceUpdateManyWithWhereWithoutEstudianteInput;
