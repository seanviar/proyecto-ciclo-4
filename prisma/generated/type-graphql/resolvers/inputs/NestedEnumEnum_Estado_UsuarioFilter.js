"use strict";
var NestedEnumEnum_Estado_UsuarioFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_Estado_UsuarioFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Usuario_1 = require("../../enums/Enum_Estado_Usuario");
let NestedEnumEnum_Estado_UsuarioFilter = NestedEnumEnum_Estado_UsuarioFilter_1 = class NestedEnumEnum_Estado_UsuarioFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Usuario_1.Enum_Estado_Usuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_Estado_UsuarioFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Usuario_1.Enum_Estado_Usuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_UsuarioFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Usuario_1.Enum_Estado_Usuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_UsuarioFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_UsuarioFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_UsuarioFilter)
], NestedEnumEnum_Estado_UsuarioFilter.prototype, "not", void 0);
NestedEnumEnum_Estado_UsuarioFilter = NestedEnumEnum_Estado_UsuarioFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_Estado_UsuarioFilter", {
        isAbstract: true
    })
], NestedEnumEnum_Estado_UsuarioFilter);
exports.NestedEnumEnum_Estado_UsuarioFilter = NestedEnumEnum_Estado_UsuarioFilter;
