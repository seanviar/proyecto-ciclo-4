"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceOrderByRelationAggregateInput_1 = require("../inputs/AvanceOrderByRelationAggregateInput");
const InscripcionOrderByRelationAggregateInput_1 = require("../inputs/InscripcionOrderByRelationAggregateInput");
const ProyectoOrderByRelationAggregateInput_1 = require("../inputs/ProyectoOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UsuarioOrderByWithRelationInput = class UsuarioOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "correo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioOrderByWithRelationInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput)
], UsuarioOrderByWithRelationInput.prototype, "inscripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoOrderByRelationAggregateInput_1.ProyectoOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoOrderByRelationAggregateInput_1.ProyectoOrderByRelationAggregateInput)
], UsuarioOrderByWithRelationInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceOrderByRelationAggregateInput_1.AvanceOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceOrderByRelationAggregateInput_1.AvanceOrderByRelationAggregateInput)
], UsuarioOrderByWithRelationInput.prototype, "avance", void 0);
UsuarioOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioOrderByWithRelationInput", {
        isAbstract: true
    })
], UsuarioOrderByWithRelationInput);
exports.UsuarioOrderByWithRelationInput = UsuarioOrderByWithRelationInput;
