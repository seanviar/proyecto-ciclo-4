"use strict";
var NestedEnumEnum_Estado_ProyectoWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_Estado_ProyectoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_Estado_ProyectoFilter_1 = require("../inputs/NestedEnumEnum_Estado_ProyectoFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Estado_Proyecto_1 = require("../../enums/Enum_Estado_Proyecto");
let NestedEnumEnum_Estado_ProyectoWithAggregatesFilter = NestedEnumEnum_Estado_ProyectoWithAggregatesFilter_1 = class NestedEnumEnum_Estado_ProyectoWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Proyecto_1.Enum_Estado_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Proyecto_1.Enum_Estado_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Proyecto_1.Enum_Estado_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_ProyectoWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_ProyectoWithAggregatesFilter)
], NestedEnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter)
], NestedEnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter)
], NestedEnumEnum_Estado_ProyectoWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_Estado_ProyectoWithAggregatesFilter = NestedEnumEnum_Estado_ProyectoWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_Estado_ProyectoWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_Estado_ProyectoWithAggregatesFilter);
exports.NestedEnumEnum_Estado_ProyectoWithAggregatesFilter = NestedEnumEnum_Estado_ProyectoWithAggregatesFilter;
