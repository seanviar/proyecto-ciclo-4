"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateNestedManyWithoutEstudianteInput_1 = require("../inputs/AvanceCreateNestedManyWithoutEstudianteInput");
const InscripcionCreateNestedManyWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutEstudianteInput");
const Enum_Estado_Usuario_1 = require("../../enums/Enum_Estado_Usuario");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UsuarioCreateWithoutProyectoInput = class UsuarioCreateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectoInput.prototype, "correo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectoInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectoInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectoInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectoInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Usuario_1.Enum_Estado_Usuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectoInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput)
], UsuarioCreateWithoutProyectoInput.prototype, "inscripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutEstudianteInput_1.AvanceCreateNestedManyWithoutEstudianteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceCreateNestedManyWithoutEstudianteInput_1.AvanceCreateNestedManyWithoutEstudianteInput)
], UsuarioCreateWithoutProyectoInput.prototype, "avance", void 0);
UsuarioCreateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateWithoutProyectoInput", {
        isAbstract: true
    })
], UsuarioCreateWithoutProyectoInput);
exports.UsuarioCreateWithoutProyectoInput = UsuarioCreateWithoutProyectoInput;
