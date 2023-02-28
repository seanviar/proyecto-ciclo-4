"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateNestedOneWithoutInscripcionInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutInscripcionInput");
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let InscripcionCreateWithoutProyectoInput = class InscripcionCreateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutInscripcionInput_1.UsuarioCreateNestedOneWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateNestedOneWithoutInscripcionInput_1.UsuarioCreateNestedOneWithoutInscripcionInput)
], InscripcionCreateWithoutProyectoInput.prototype, "estudiante", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateWithoutProyectoInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateWithoutProyectoInput.prototype, "fechaIngreso", void 0);
InscripcionCreateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateWithoutProyectoInput", {
        isAbstract: true
    })
], InscripcionCreateWithoutProyectoInput);
exports.InscripcionCreateWithoutProyectoInput = InscripcionCreateWithoutProyectoInput;
