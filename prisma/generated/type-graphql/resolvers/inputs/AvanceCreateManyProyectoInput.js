"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateManyProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AvanceCreateManyProyectoInput = class AvanceCreateManyProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateManyProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AvanceCreateManyProyectoInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateManyProyectoInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateManyProyectoInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvanceCreateManyProyectoInput.prototype, "usuarioId", void 0);
AvanceCreateManyProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceCreateManyProyectoInput", {
        isAbstract: true
    })
], AvanceCreateManyProyectoInput);
exports.AvanceCreateManyProyectoInput = AvanceCreateManyProyectoInput;
