"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateManyProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let InscripcionCreateManyProyectoInput = class InscripcionCreateManyProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateManyProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateManyProyectoInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateManyProyectoInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateManyProyectoInput.prototype, "usuarioId", void 0);
InscripcionCreateManyProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateManyProyectoInput", {
        isAbstract: true
    })
], InscripcionCreateManyProyectoInput);
exports.InscripcionCreateManyProyectoInput = InscripcionCreateManyProyectoInput;
