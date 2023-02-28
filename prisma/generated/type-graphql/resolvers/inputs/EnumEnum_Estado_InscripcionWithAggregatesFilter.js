"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_Estado_InscripcionWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_Estado_InscripcionFilter_1 = require("../inputs/NestedEnumEnum_Estado_InscripcionFilter");
const NestedEnumEnum_Estado_InscripcionWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_Estado_InscripcionWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let EnumEnum_Estado_InscripcionWithAggregatesFilter = class EnumEnum_Estado_InscripcionWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_Estado_InscripcionWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_InscripcionWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_InscripcionWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_InscripcionWithAggregatesFilter_1.NestedEnumEnum_Estado_InscripcionWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_InscripcionWithAggregatesFilter_1.NestedEnumEnum_Estado_InscripcionWithAggregatesFilter)
], EnumEnum_Estado_InscripcionWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_Estado_InscripcionWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_InscripcionFilter_1.NestedEnumEnum_Estado_InscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_InscripcionFilter_1.NestedEnumEnum_Estado_InscripcionFilter)
], EnumEnum_Estado_InscripcionWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_InscripcionFilter_1.NestedEnumEnum_Estado_InscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_InscripcionFilter_1.NestedEnumEnum_Estado_InscripcionFilter)
], EnumEnum_Estado_InscripcionWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_Estado_InscripcionWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_Estado_InscripcionWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_Estado_InscripcionWithAggregatesFilter);
exports.EnumEnum_Estado_InscripcionWithAggregatesFilter = EnumEnum_Estado_InscripcionWithAggregatesFilter;
