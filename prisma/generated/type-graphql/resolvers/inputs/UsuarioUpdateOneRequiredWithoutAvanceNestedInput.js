"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneRequiredWithoutAvanceNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutAvanceInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutAvanceInput");
const UsuarioCreateWithoutAvanceInput_1 = require("../inputs/UsuarioCreateWithoutAvanceInput");
const UsuarioUpdateWithoutAvanceInput_1 = require("../inputs/UsuarioUpdateWithoutAvanceInput");
const UsuarioUpsertWithoutAvanceInput_1 = require("../inputs/UsuarioUpsertWithoutAvanceInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneRequiredWithoutAvanceNestedInput = class UsuarioUpdateOneRequiredWithoutAvanceNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvanceInput_1.UsuarioCreateWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutAvanceInput_1.UsuarioCreateWithoutAvanceInput)
], UsuarioUpdateOneRequiredWithoutAvanceNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAvanceInput_1.UsuarioCreateOrConnectWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutAvanceInput_1.UsuarioCreateOrConnectWithoutAvanceInput)
], UsuarioUpdateOneRequiredWithoutAvanceNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutAvanceInput_1.UsuarioUpsertWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpsertWithoutAvanceInput_1.UsuarioUpsertWithoutAvanceInput)
], UsuarioUpdateOneRequiredWithoutAvanceNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneRequiredWithoutAvanceNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutAvanceInput_1.UsuarioUpdateWithoutAvanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutAvanceInput_1.UsuarioUpdateWithoutAvanceInput)
], UsuarioUpdateOneRequiredWithoutAvanceNestedInput.prototype, "update", void 0);
UsuarioUpdateOneRequiredWithoutAvanceNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutAvanceNestedInput", {
        isAbstract: true
    })
], UsuarioUpdateOneRequiredWithoutAvanceNestedInput);
exports.UsuarioUpdateOneRequiredWithoutAvanceNestedInput = UsuarioUpdateOneRequiredWithoutAvanceNestedInput;
