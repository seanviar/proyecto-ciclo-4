"use strict";
var AvanceWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ProyectoRelationFilter_1 = require("../inputs/ProyectoRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UsuarioRelationFilter_1 = require("../inputs/UsuarioRelationFilter");
let AvanceWhereInput = AvanceWhereInput_1 = class AvanceWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvanceWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoRelationFilter_1.ProyectoRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoRelationFilter_1.ProyectoRelationFilter)
], AvanceWhereInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvanceWhereInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AvanceWhereInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvanceWhereInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvanceWhereInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioRelationFilter_1.UsuarioRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioRelationFilter_1.UsuarioRelationFilter)
], AvanceWhereInput.prototype, "estudiante", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvanceWhereInput.prototype, "usuarioId", void 0);
AvanceWhereInput = AvanceWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceWhereInput", {
        isAbstract: true
    })
], AvanceWhereInput);
exports.AvanceWhereInput = AvanceWhereInput;
