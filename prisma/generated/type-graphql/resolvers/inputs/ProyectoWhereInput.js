"use strict";
var ProyectoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceListRelationFilter_1 = require("../inputs/AvanceListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumEnum_Estado_ProyectoFilter_1 = require("../inputs/EnumEnum_Estado_ProyectoFilter");
const EnumEnum_Fase_ProyectoNullableFilter_1 = require("../inputs/EnumEnum_Fase_ProyectoNullableFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const InscripcionListRelationFilter_1 = require("../inputs/InscripcionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UsuarioRelationFilter_1 = require("../inputs/UsuarioRelationFilter");
let ProyectoWhereInput = ProyectoWhereInput_1 = class ProyectoWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "objetivosGenerales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "objetivosEspesificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], ProyectoWhereInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProyectoWhereInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ProyectoWhereInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioRelationFilter_1.UsuarioRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioRelationFilter_1.UsuarioRelationFilter)
], ProyectoWhereInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_ProyectoFilter_1.EnumEnum_Estado_ProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_ProyectoFilter_1.EnumEnum_Estado_ProyectoFilter)
], ProyectoWhereInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Fase_ProyectoNullableFilter_1.EnumEnum_Fase_ProyectoNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Fase_ProyectoNullableFilter_1.EnumEnum_Fase_ProyectoNullableFilter)
], ProyectoWhereInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceListRelationFilter_1.AvanceListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceListRelationFilter_1.AvanceListRelationFilter)
], ProyectoWhereInput.prototype, "avance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionListRelationFilter_1.InscripcionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionListRelationFilter_1.InscripcionListRelationFilter)
], ProyectoWhereInput.prototype, "inscripcion", void 0);
ProyectoWhereInput = ProyectoWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoWhereInput", {
        isAbstract: true
    })
], ProyectoWhereInput);
exports.ProyectoWhereInput = ProyectoWhereInput;
