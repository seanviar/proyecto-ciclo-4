"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceOrderByRelationAggregateInput_1 = require("../inputs/AvanceOrderByRelationAggregateInput");
const InscripcionOrderByRelationAggregateInput_1 = require("../inputs/InscripcionOrderByRelationAggregateInput");
const UsuarioOrderByWithRelationInput_1 = require("../inputs/UsuarioOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProyectoOrderByWithRelationInput = class ProyectoOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "objetivosGenerales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "objetivosEspesificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput)
], ProyectoOrderByWithRelationInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceOrderByRelationAggregateInput_1.AvanceOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceOrderByRelationAggregateInput_1.AvanceOrderByRelationAggregateInput)
], ProyectoOrderByWithRelationInput.prototype, "avance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput)
], ProyectoOrderByWithRelationInput.prototype, "inscripcion", void 0);
ProyectoOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoOrderByWithRelationInput", {
        isAbstract: true
    })
], ProyectoOrderByWithRelationInput);
exports.ProyectoOrderByWithRelationInput = ProyectoOrderByWithRelationInput;
