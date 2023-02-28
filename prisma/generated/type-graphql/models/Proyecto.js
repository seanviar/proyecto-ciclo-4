"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyecto = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Proyecto_1 = require("../enums/Enum_Estado_Proyecto");
const Enum_Fase_Proyecto_1 = require("../enums/Enum_Fase_Proyecto");
const ProyectoCount_1 = require("../resolvers/outputs/ProyectoCount");
let Proyecto = class Proyecto {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Proyecto.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Proyecto.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Proyecto.prototype, "objetivosGenerales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Proyecto.prototype, "objetivosEspesificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Proyecto.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Proyecto.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Proyecto.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Proyecto.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Proyecto_1.Enum_Estado_Proyecto, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Proyecto.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Fase_Proyecto_1.Enum_Fase_Proyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Proyecto.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCount_1.ProyectoCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCount_1.ProyectoCount)
], Proyecto.prototype, "_count", void 0);
Proyecto = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Proyecto", {
        isAbstract: true
    })
], Proyecto);
exports.Proyecto = Proyecto;
