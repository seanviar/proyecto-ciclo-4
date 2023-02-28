"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneRequiredWithoutInscripcionNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutInscripcionInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutInscripcionInput");
const UsuarioCreateWithoutInscripcionInput_1 = require("../inputs/UsuarioCreateWithoutInscripcionInput");
const UsuarioUpdateWithoutInscripcionInput_1 = require("../inputs/UsuarioUpdateWithoutInscripcionInput");
const UsuarioUpsertWithoutInscripcionInput_1 = require("../inputs/UsuarioUpsertWithoutInscripcionInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneRequiredWithoutInscripcionNestedInput = class UsuarioUpdateOneRequiredWithoutInscripcionNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionInput_1.UsuarioCreateWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutInscripcionInput_1.UsuarioCreateWithoutInscripcionInput)
], UsuarioUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutInscripcionInput_1.UsuarioCreateOrConnectWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutInscripcionInput_1.UsuarioCreateOrConnectWithoutInscripcionInput)
], UsuarioUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutInscripcionInput_1.UsuarioUpsertWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpsertWithoutInscripcionInput_1.UsuarioUpsertWithoutInscripcionInput)
], UsuarioUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutInscripcionInput_1.UsuarioUpdateWithoutInscripcionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutInscripcionInput_1.UsuarioUpdateWithoutInscripcionInput)
], UsuarioUpdateOneRequiredWithoutInscripcionNestedInput.prototype, "update", void 0);
UsuarioUpdateOneRequiredWithoutInscripcionNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutInscripcionNestedInput", {
        isAbstract: true
    })
], UsuarioUpdateOneRequiredWithoutInscripcionNestedInput);
exports.UsuarioUpdateOneRequiredWithoutInscripcionNestedInput = UsuarioUpdateOneRequiredWithoutInscripcionNestedInput;
