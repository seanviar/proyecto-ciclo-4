"use strict";
var InscripcionScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_Estado_InscripcionFilter_1 = require("../inputs/EnumEnum_Estado_InscripcionFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let InscripcionScalarWhereInput = InscripcionScalarWhereInput_1 = class InscripcionScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InscripcionScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_Estado_InscripcionFilter_1.EnumEnum_Estado_InscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_Estado_InscripcionFilter_1.EnumEnum_Estado_InscripcionFilter)
], InscripcionScalarWhereInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InscripcionScalarWhereInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InscripcionScalarWhereInput.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InscripcionScalarWhereInput.prototype, "proyectoId", void 0);
InscripcionScalarWhereInput = InscripcionScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionScalarWhereInput", {
        isAbstract: true
    })
], InscripcionScalarWhereInput);
exports.InscripcionScalarWhereInput = InscripcionScalarWhereInput;
