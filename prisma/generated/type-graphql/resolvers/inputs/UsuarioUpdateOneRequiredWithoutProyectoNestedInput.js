"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneRequiredWithoutProyectoNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutProyectoInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutProyectoInput");
const UsuarioCreateWithoutProyectoInput_1 = require("../inputs/UsuarioCreateWithoutProyectoInput");
const UsuarioUpdateWithoutProyectoInput_1 = require("../inputs/UsuarioUpdateWithoutProyectoInput");
const UsuarioUpsertWithoutProyectoInput_1 = require("../inputs/UsuarioUpsertWithoutProyectoInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneRequiredWithoutProyectoNestedInput = class UsuarioUpdateOneRequiredWithoutProyectoNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectoInput_1.UsuarioCreateWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutProyectoInput_1.UsuarioCreateWithoutProyectoInput)
], UsuarioUpdateOneRequiredWithoutProyectoNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutProyectoInput_1.UsuarioCreateOrConnectWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutProyectoInput_1.UsuarioCreateOrConnectWithoutProyectoInput)
], UsuarioUpdateOneRequiredWithoutProyectoNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutProyectoInput_1.UsuarioUpsertWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpsertWithoutProyectoInput_1.UsuarioUpsertWithoutProyectoInput)
], UsuarioUpdateOneRequiredWithoutProyectoNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneRequiredWithoutProyectoNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutProyectoInput_1.UsuarioUpdateWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutProyectoInput_1.UsuarioUpdateWithoutProyectoInput)
], UsuarioUpdateOneRequiredWithoutProyectoNestedInput.prototype, "update", void 0);
UsuarioUpdateOneRequiredWithoutProyectoNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutProyectoNestedInput", {
        isAbstract: true
    })
], UsuarioUpdateOneRequiredWithoutProyectoNestedInput);
exports.UsuarioUpdateOneRequiredWithoutProyectoNestedInput = UsuarioUpdateOneRequiredWithoutProyectoNestedInput;
