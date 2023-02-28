"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioWhereUniqueInput_1 = require("../../../inputs/UsuarioWhereUniqueInput");
let DeleteOneUsuarioArgs = class DeleteOneUsuarioArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], DeleteOneUsuarioArgs.prototype, "where", void 0);
DeleteOneUsuarioArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneUsuarioArgs);
exports.DeleteOneUsuarioArgs = DeleteOneUsuarioArgs;
