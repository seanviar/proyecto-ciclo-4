"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioWhereInput_1 = require("../../../inputs/UsuarioWhereInput");
let DeleteManyUsuarioArgs = class DeleteManyUsuarioArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereInput_1.UsuarioWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereInput_1.UsuarioWhereInput)
], DeleteManyUsuarioArgs.prototype, "where", void 0);
DeleteManyUsuarioArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyUsuarioArgs);
exports.DeleteManyUsuarioArgs = DeleteManyUsuarioArgs;
