"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioUpdateInput_1 = require("../../../inputs/UsuarioUpdateInput");
const UsuarioWhereUniqueInput_1 = require("../../../inputs/UsuarioWhereUniqueInput");
let UpdateOneUsuarioArgs = class UpdateOneUsuarioArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateInput_1.UsuarioUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateInput_1.UsuarioUpdateInput)
], UpdateOneUsuarioArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UpdateOneUsuarioArgs.prototype, "where", void 0);
UpdateOneUsuarioArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUsuarioArgs);
exports.UpdateOneUsuarioArgs = UpdateOneUsuarioArgs;
