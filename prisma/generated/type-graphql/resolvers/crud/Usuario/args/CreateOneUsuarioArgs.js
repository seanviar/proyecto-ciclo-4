"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateInput_1 = require("../../../inputs/UsuarioCreateInput");
let CreateOneUsuarioArgs = class CreateOneUsuarioArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateInput_1.UsuarioCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateInput_1.UsuarioCreateInput)
], CreateOneUsuarioArgs.prototype, "data", void 0);
CreateOneUsuarioArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneUsuarioArgs);
exports.CreateOneUsuarioArgs = CreateOneUsuarioArgs;
