"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateNestedOneWithoutAvanceInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutAvanceInput");
let AvanceCreateWithoutProyectoInput = class AvanceCreateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AvanceCreateWithoutProyectoInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateWithoutProyectoInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateWithoutProyectoInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutAvanceInput_1.UsuarioCreateNestedOneWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateNestedOneWithoutAvanceInput_1.UsuarioCreateNestedOneWithoutAvanceInput)
], AvanceCreateWithoutProyectoInput.prototype, "estudiante", void 0);
AvanceCreateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceCreateWithoutProyectoInput", {
        isAbstract: true
    })
], AvanceCreateWithoutProyectoInput);
exports.AvanceCreateWithoutProyectoInput = AvanceCreateWithoutProyectoInput;
