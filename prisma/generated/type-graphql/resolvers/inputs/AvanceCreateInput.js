"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateNestedOneWithoutAvanceInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutAvanceInput");
const UsuarioCreateNestedOneWithoutAvanceInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutAvanceInput");
let AvanceCreateInput = class AvanceCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutAvanceInput_1.ProyectoCreateNestedOneWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedOneWithoutAvanceInput_1.ProyectoCreateNestedOneWithoutAvanceInput)
], AvanceCreateInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AvanceCreateInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutAvanceInput_1.UsuarioCreateNestedOneWithoutAvanceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateNestedOneWithoutAvanceInput_1.UsuarioCreateNestedOneWithoutAvanceInput)
], AvanceCreateInput.prototype, "estudiante", void 0);
AvanceCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceCreateInput", {
        isAbstract: true
    })
], AvanceCreateInput);
exports.AvanceCreateInput = AvanceCreateInput;
