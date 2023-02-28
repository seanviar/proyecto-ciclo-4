"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_Estado_InscripcionFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_Estado_InscripcionFilter_1 = require("../inputs/NestedEnumEnum_Estado_InscripcionFilter");
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let EnumEnum_Estado_InscripcionFilter = class EnumEnum_Estado_InscripcionFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_Estado_InscripcionFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_InscripcionFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_Estado_InscripcionFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_InscripcionFilter_1.NestedEnumEnum_Estado_InscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_InscripcionFilter_1.NestedEnumEnum_Estado_InscripcionFilter)
], EnumEnum_Estado_InscripcionFilter.prototype, "not", void 0);
EnumEnum_Estado_InscripcionFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_Estado_InscripcionFilter", {
        isAbstract: true
    })
], EnumEnum_Estado_InscripcionFilter);
exports.EnumEnum_Estado_InscripcionFilter = EnumEnum_Estado_InscripcionFilter;
