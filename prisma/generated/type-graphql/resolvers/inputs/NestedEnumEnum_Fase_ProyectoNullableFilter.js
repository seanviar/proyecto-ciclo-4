"use strict";
var NestedEnumEnum_Fase_ProyectoNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_Fase_ProyectoNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Fase_Proyecto_1 = require("../../enums/Enum_Fase_Proyecto");
let NestedEnumEnum_Fase_ProyectoNullableFilter = NestedEnumEnum_Fase_ProyectoNullableFilter_1 = class NestedEnumEnum_Fase_ProyectoNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Fase_Proyecto_1.Enum_Fase_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_Fase_ProyectoNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Fase_Proyecto_1.Enum_Fase_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Fase_ProyectoNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Fase_Proyecto_1.Enum_Fase_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Fase_ProyectoNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Fase_ProyectoNullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Fase_ProyectoNullableFilter)
], NestedEnumEnum_Fase_ProyectoNullableFilter.prototype, "not", void 0);
NestedEnumEnum_Fase_ProyectoNullableFilter = NestedEnumEnum_Fase_ProyectoNullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_Fase_ProyectoNullableFilter", {
        isAbstract: true
    })
], NestedEnumEnum_Fase_ProyectoNullableFilter);
exports.NestedEnumEnum_Fase_ProyectoNullableFilter = NestedEnumEnum_Fase_ProyectoNullableFilter;
