"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateManyEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AvanceCreateManyEstudianteInput = class AvanceCreateManyEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateManyEstudianteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateManyEstudianteInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AvanceCreateManyEstudianteInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateManyEstudianteInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateManyEstudianteInput.prototype, "observaciones", void 0);
AvanceCreateManyEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceCreateManyEstudianteInput", {
        isAbstract: true
    })
], AvanceCreateManyEstudianteInput);
exports.AvanceCreateManyEstudianteInput = AvanceCreateManyEstudianteInput;
