"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateManyEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Estado_Inscripcion_1 = require("../../enums/Enum_Estado_Inscripcion");
let InscripcionCreateManyEstudianteInput = class InscripcionCreateManyEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateManyEstudianteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Estado_Inscripcion_1.Enum_Estado_Inscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateManyEstudianteInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateManyEstudianteInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateManyEstudianteInput.prototype, "proyectoId", void 0);
InscripcionCreateManyEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateManyEstudianteInput", {
        isAbstract: true
    })
], InscripcionCreateManyEstudianteInput);
exports.InscripcionCreateManyEstudianteInput = InscripcionCreateManyEstudianteInput;
