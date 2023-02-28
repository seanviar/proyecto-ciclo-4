"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateNestedOneWithoutInscripcionInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutInscripcionInput");
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let InscripcionCreateWithoutEstudianteInput = class InscripcionCreateWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateWithoutEstudianteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutInscripcionInput_1.ProyectoCreateNestedOneWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedOneWithoutInscripcionInput_1.ProyectoCreateNestedOneWithoutInscripcionInput)
], InscripcionCreateWithoutEstudianteInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateWithoutEstudianteInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateWithoutEstudianteInput.prototype, "fechaIngreso", void 0);
InscripcionCreateWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateWithoutEstudianteInput", {
        isAbstract: true
    })
], InscripcionCreateWithoutEstudianteInput);
exports.InscripcionCreateWithoutEstudianteInput = InscripcionCreateWithoutEstudianteInput;
