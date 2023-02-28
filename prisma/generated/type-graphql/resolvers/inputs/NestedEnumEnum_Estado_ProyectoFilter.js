"use strict";
var NestedEnumEnum_Estado_ProyectoFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_Estado_ProyectoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Proyecto_1 = require("../../enums/Enum_Estado_Proyecto");
let NestedEnumEnum_Estado_ProyectoFilter = NestedEnumEnum_Estado_ProyectoFilter_1 = class NestedEnumEnum_Estado_ProyectoFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Proyecto_1.Enum_Estado_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_Estado_ProyectoFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Proyecto_1.Enum_Estado_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_ProyectoFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Proyecto_1.Enum_Estado_Proyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_ProyectoFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_ProyectoFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_ProyectoFilter)
], NestedEnumEnum_Estado_ProyectoFilter.prototype, "not", void 0);
NestedEnumEnum_Estado_ProyectoFilter = NestedEnumEnum_Estado_ProyectoFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_Estado_ProyectoFilter", {
        isAbstract: true
    })
], NestedEnumEnum_Estado_ProyectoFilter);
exports.NestedEnumEnum_Estado_ProyectoFilter = NestedEnumEnum_Estado_ProyectoFilter;
