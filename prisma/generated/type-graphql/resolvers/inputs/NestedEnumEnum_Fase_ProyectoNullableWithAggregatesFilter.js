"use strict";
var NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_Fase_ProyectoNullableFilter_1 = require("../inputs/NestedEnumEnum_Fase_ProyectoNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Enum_Fase_Proyecto_1 = require("../../enums/Enum_Fase_Proyecto");
let NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter = NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter_1 = class NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Fase_Proyecto_1.Enum_Fase_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Fase_Proyecto_1.Enum_Fase_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Fase_Proyecto_1.Enum_Fase_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter)
], NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Fase_ProyectoNullableFilter_1.NestedEnumEnum_Fase_ProyectoNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Fase_ProyectoNullableFilter_1.NestedEnumEnum_Fase_ProyectoNullableFilter)
], NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Fase_ProyectoNullableFilter_1.NestedEnumEnum_Fase_ProyectoNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Fase_ProyectoNullableFilter_1.NestedEnumEnum_Fase_ProyectoNullableFilter)
], NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter = NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter);
exports.NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter = NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter;
