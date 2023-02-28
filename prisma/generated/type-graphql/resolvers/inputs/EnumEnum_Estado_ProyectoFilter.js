"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_Estado_ProyectoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_Estado_ProyectoFilter_1 = require("../inputs/NestedEnumEnum_Estado_ProyectoFilter");
const Enum_Estado_Proyecto_1 = require("../../enums/Enum_Estado_Proyecto");
let EnumEnum_Estado_ProyectoFilter = class EnumEnum_Estado_ProyectoFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Proyecto_1.Enum_Estado_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_Estado_ProyectoFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Proyecto_1.Enum_Estado_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_ProyectoFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Proyecto_1.Enum_Estado_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_ProyectoFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_ProyectoFilter_1.NestedEnumEnum_Estado_ProyectoFilter)
], EnumEnum_Estado_ProyectoFilter.prototype, "not", void 0);
EnumEnum_Estado_ProyectoFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_Estado_ProyectoFilter", {
        isAbstract: true
    })
], EnumEnum_Estado_ProyectoFilter);
exports.EnumEnum_Estado_ProyectoFilter = EnumEnum_Estado_ProyectoFilter;
