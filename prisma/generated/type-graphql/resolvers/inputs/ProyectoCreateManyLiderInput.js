"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateManyLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Proyecto_1 = require("../../enums/Enum_Estado_Proyecto");
const Enum_Fase_Proyecto_1 = require("../../enums/Enum_Fase_Proyecto");
let ProyectoCreateManyLiderInput = class ProyectoCreateManyLiderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "objetivosGenerales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "objetivosEspesificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoCreateManyLiderInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateManyLiderInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateManyLiderInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Proyecto_1.Enum_Estado_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Fase_Proyecto_1.Enum_Fase_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "fase", void 0);
ProyectoCreateManyLiderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateManyLiderInput", {
        isAbstract: true
    })
], ProyectoCreateManyLiderInput);
exports.ProyectoCreateManyLiderInput = ProyectoCreateManyLiderInput;
