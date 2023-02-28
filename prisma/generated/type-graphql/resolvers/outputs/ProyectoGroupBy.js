"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoAvgAggregate_1 = require("../outputs/ProyectoAvgAggregate");
const ProyectoCountAggregate_1 = require("../outputs/ProyectoCountAggregate");
const ProyectoMaxAggregate_1 = require("../outputs/ProyectoMaxAggregate");
const ProyectoMinAggregate_1 = require("../outputs/ProyectoMinAggregate");
const ProyectoSumAggregate_1 = require("../outputs/ProyectoSumAggregate");
const Enum_Estado_Proyecto_1 = require("../../enums/Enum_Estado_Proyecto");
const Enum_Fase_Proyecto_1 = require("../../enums/Enum_Fase_Proyecto");
let ProyectoGroupBy = class ProyectoGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoGroupBy.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoGroupBy.prototype, "objetivosGenerales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoGroupBy.prototype, "objetivosEspesificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoGroupBy.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoGroupBy.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoGroupBy.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoGroupBy.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Proyecto_1.Enum_Estado_Proyecto, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoGroupBy.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Fase_Proyecto_1.Enum_Fase_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoGroupBy.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCountAggregate_1.ProyectoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCountAggregate_1.ProyectoCountAggregate)
], ProyectoGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoAvgAggregate_1.ProyectoAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoAvgAggregate_1.ProyectoAvgAggregate)
], ProyectoGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoSumAggregate_1.ProyectoSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoSumAggregate_1.ProyectoSumAggregate)
], ProyectoGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoMinAggregate_1.ProyectoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoMinAggregate_1.ProyectoMinAggregate)
], ProyectoGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoMaxAggregate_1.ProyectoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoMaxAggregate_1.ProyectoMaxAggregate)
], ProyectoGroupBy.prototype, "_max", void 0);
ProyectoGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProyectoGroupBy", {
        isAbstract: true
    })
], ProyectoGroupBy);
exports.ProyectoGroupBy = ProyectoGroupBy;
