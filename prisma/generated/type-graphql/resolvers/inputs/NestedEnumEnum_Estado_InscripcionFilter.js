"use strict";
var NestedEnumEnum_Estado_InscripcionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_Estado_InscripcionFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let NestedEnumEnum_Estado_InscripcionFilter = NestedEnumEnum_Estado_InscripcionFilter_1 = class NestedEnumEnum_Estado_InscripcionFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_Estado_InscripcionFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_InscripcionFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_Estado_InscripcionFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_Estado_InscripcionFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_Estado_InscripcionFilter)
], NestedEnumEnum_Estado_InscripcionFilter.prototype, "not", void 0);
NestedEnumEnum_Estado_InscripcionFilter = NestedEnumEnum_Estado_InscripcionFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_Estado_InscripcionFilter", {
        isAbstract: true
    })
], NestedEnumEnum_Estado_InscripcionFilter);
exports.NestedEnumEnum_Estado_InscripcionFilter = NestedEnumEnum_Estado_InscripcionFilter;
