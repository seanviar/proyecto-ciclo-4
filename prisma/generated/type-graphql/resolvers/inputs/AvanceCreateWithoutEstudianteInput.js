"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateNestedOneWithoutAvanceInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutAvanceInput");
let AvanceCreateWithoutEstudianteInput = class AvanceCreateWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateWithoutEstudianteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutAvanceInput_1.ProyectoCreateNestedOneWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedOneWithoutAvanceInput_1.ProyectoCreateNestedOneWithoutAvanceInput)
], AvanceCreateWithoutEstudianteInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AvanceCreateWithoutEstudianteInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateWithoutEstudianteInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateWithoutEstudianteInput.prototype, "observaciones", void 0);
AvanceCreateWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceCreateWithoutEstudianteInput", {
        isAbstract: true
    })
], AvanceCreateWithoutEstudianteInput);
exports.AvanceCreateWithoutEstudianteInput = AvanceCreateWithoutEstudianteInput;
