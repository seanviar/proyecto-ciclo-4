"use strict";
var UsuarioWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceListRelationFilter_1 = require("../inputs/AvanceListRelationFilter");
const EnumEnum_Estado_UsuarioFilter_1 = require("../inputs/EnumEnum_Estado_UsuarioFilter");
const EnumEnum_RolFilter_1 = require("../inputs/EnumEnum_RolFilter");
const InscripcionListRelationFilter_1 = require("../inputs/InscripcionListRelationFilter");
const ProyectoListRelationFilter_1 = require("../inputs/ProyectoListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let UsuarioWhereInput = UsuarioWhereInput_1 = class UsuarioWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsuarioWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsuarioWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsuarioWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "correo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RolFilter_1.EnumEnum_RolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RolFilter_1.EnumEnum_RolFilter)
], UsuarioWhereInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_UsuarioFilter_1.EnumEnum_Estado_UsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_UsuarioFilter_1.EnumEnum_Estado_UsuarioFilter)
], UsuarioWhereInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionListRelationFilter_1.InscripcionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionListRelationFilter_1.InscripcionListRelationFilter)
], UsuarioWhereInput.prototype, "inscripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoListRelationFilter_1.ProyectoListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoListRelationFilter_1.ProyectoListRelationFilter)
], UsuarioWhereInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceListRelationFilter_1.AvanceListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceListRelationFilter_1.AvanceListRelationFilter)
], UsuarioWhereInput.prototype, "avance", void 0);
UsuarioWhereInput = UsuarioWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioWhereInput", {
        isAbstract: true
    })
], UsuarioWhereInput);
exports.UsuarioWhereInput = UsuarioWhereInput;
