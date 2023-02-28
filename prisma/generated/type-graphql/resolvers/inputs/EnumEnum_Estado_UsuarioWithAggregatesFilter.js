"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_Estado_UsuarioWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_Estado_UsuarioFilter_1 = require("../inputs/NestedEnumEnum_Estado_UsuarioFilter");
const NestedEnumEnum_Estado_UsuarioWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_Estado_UsuarioWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Estado_Usuario_1 = require("../../enums/Enum_Estado_Usuario");
let EnumEnum_Estado_UsuarioWithAggregatesFilter = class EnumEnum_Estado_UsuarioWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Usuario_1.Enum_Estado_Usuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Usuario_1.Enum_Estado_Usuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Usuario_1.Enum_Estado_Usuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_UsuarioWithAggregatesFilter_1.NestedEnumEnum_Estado_UsuarioWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_UsuarioWithAggregatesFilter_1.NestedEnumEnum_Estado_UsuarioWithAggregatesFilter)
], EnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_UsuarioFilter_1.NestedEnumEnum_Estado_UsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_UsuarioFilter_1.NestedEnumEnum_Estado_UsuarioFilter)
], EnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_UsuarioFilter_1.NestedEnumEnum_Estado_UsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_UsuarioFilter_1.NestedEnumEnum_Estado_UsuarioFilter)
], EnumEnum_Estado_UsuarioWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_Estado_UsuarioWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_Estado_UsuarioWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_Estado_UsuarioWithAggregatesFilter);
exports.EnumEnum_Estado_UsuarioWithAggregatesFilter = EnumEnum_Estado_UsuarioWithAggregatesFilter;
