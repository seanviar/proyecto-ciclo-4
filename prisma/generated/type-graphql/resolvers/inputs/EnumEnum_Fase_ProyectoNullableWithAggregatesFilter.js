"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_Fase_ProyectoNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_Fase_ProyectoNullableFilter_1 = require("../inputs/NestedEnumEnum_Fase_ProyectoNullableFilter");
const NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Enum_Fase_Proyecto_1 = require("../../enums/Enum_Fase_Proyecto");
let EnumEnum_Fase_ProyectoNullableWithAggregatesFilter = class EnumEnum_Fase_ProyectoNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Fase_Proyecto_1.Enum_Fase_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Fase_Proyecto_1.Enum_Fase_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Fase_Proyecto_1.Enum_Fase_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter_1.NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter_1.NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter)
], EnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Fase_ProyectoNullableFilter_1.NestedEnumEnum_Fase_ProyectoNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Fase_ProyectoNullableFilter_1.NestedEnumEnum_Fase_ProyectoNullableFilter)
], EnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Fase_ProyectoNullableFilter_1.NestedEnumEnum_Fase_ProyectoNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Fase_ProyectoNullableFilter_1.NestedEnumEnum_Fase_ProyectoNullableFilter)
], EnumEnum_Fase_ProyectoNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_Fase_ProyectoNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_Fase_ProyectoNullableWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_Fase_ProyectoNullableWithAggregatesFilter);
exports.EnumEnum_Fase_ProyectoNullableWithAggregatesFilter = EnumEnum_Fase_ProyectoNullableWithAggregatesFilter;
