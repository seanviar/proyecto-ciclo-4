"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateNestedOneWithoutInscripcionInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutInscripcionInput");
const UsuarioCreateNestedOneWithoutInscripcionInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutInscripcionInput");
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let InscripcionCreateInput = class InscripcionCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutInscripcionInput_1.ProyectoCreateNestedOneWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedOneWithoutInscripcionInput_1.ProyectoCreateNestedOneWithoutInscripcionInput)
], InscripcionCreateInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutInscripcionInput_1.UsuarioCreateNestedOneWithoutInscripcionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateNestedOneWithoutInscripcionInput_1.UsuarioCreateNestedOneWithoutInscripcionInput)
], InscripcionCreateInput.prototype, "estudiante", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateInput.prototype, "fechaIngreso", void 0);
InscripcionCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateInput", {
        isAbstract: true
    })
], InscripcionCreateInput);
exports.InscripcionCreateInput = InscripcionCreateInput;
