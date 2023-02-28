"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_Estado_ProyectoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_Estado_ProyectoFilter_1 = require("../inputs/NestedEnumEnum_Estado_ProyectoFilter");
const NestedEnumEnum_Estado_ProyectoWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_Estado_ProyectoWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Estado_Proyecto_1 = require("../../enums/Enum_Estado_Proyecto");
let EnumEnum_Estado_ProyectoWithAggregatesFilter = class EnumEnum_Estado_ProyectoWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Proyecto_1.Enum_Estado_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Proyecto_1.Enum_Estado_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Proyecto_1.Enum_Estado_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_ProyectoWithAggregatesFilter_1.NestedEnumEnum_Estado_ProyectoWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_ProyectoWithAggregatesFilter_1.NestedEnumEnum_Estado_ProyectoWithAggregatesFilter)
], EnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter)
], EnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter)
], EnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_Estado_ProyectoWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_Estado_ProyectoWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_Estado_ProyectoWithAggregatesFilter);
exports.EnumEnum_Estado_ProyectoWithAggregatesFilter = EnumEnum_Estado_ProyectoWithAggregatesFilter;
