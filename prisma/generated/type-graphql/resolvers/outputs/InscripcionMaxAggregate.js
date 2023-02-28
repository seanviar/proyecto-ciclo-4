"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let InscripcionMaxAggregate = class InscripcionMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxAggregate.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionMaxAggregate.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxAggregate.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxAggregate.prototype, "proyectoId", void 0);
InscripcionMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InscripcionMaxAggregate", {
        isAbstract: true
    })
], InscripcionMaxAggregate);
exports.InscripcionMaxAggregate = InscripcionMaxAggregate;
