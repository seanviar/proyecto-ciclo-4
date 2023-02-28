"use strict";
var NestedEnumEnum_Estado_UsuarioWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_Estado_UsuarioWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_Estado_UsuarioFilter_1 = require("../inputs/NestedEnumEnum_Estado_UsuarioFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Estado_Usuario_1 = require("../../enums/Enum_Estado_Usuario");
let NestedEnumEnum_Estado_UsuarioWithAggregatesFilter = NestedEnumEnum_Estado_UsuarioWithAggregatesFilter_1 = class NestedEnumEnum_Estado_UsuarioWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Usuario_1.Enum_Estado_Usuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Usuario_1.Enum_Estado_Usuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Usuario_1.Enum_Estado_Usuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_UsuarioWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_UsuarioWithAggregatesFilter)
], NestedEnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_UsuarioFilter_1.NestedEnumEnum_Estado_UsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_UsuarioFilter_1.NestedEnumEnum_Estado_UsuarioFilter)
], NestedEnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_UsuarioFilter_1.NestedEnumEnum_Estado_UsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_UsuarioFilter_1.NestedEnumEnum_Estado_UsuarioFilter)
], NestedEnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_Estado_UsuarioWithAggregatesFilter = NestedEnumEnum_Estado_UsuarioWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_Estado_UsuarioWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_Estado_UsuarioWithAggregatesFilter);
exports.NestedEnumEnum_Estado_UsuarioWithAggregatesFilter = NestedEnumEnum_Estado_UsuarioWithAggregatesFilter;
