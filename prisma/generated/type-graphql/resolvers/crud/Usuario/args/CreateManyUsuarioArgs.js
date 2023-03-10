"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateManyInput_1 = require("../../../inputs/UsuarioCreateManyInput");
let CreateManyUsuarioArgs = class CreateManyUsuarioArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioCreateManyInput_1.UsuarioCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyUsuarioArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyUsuarioArgs.prototype, "skipDuplicates", void 0);
CreateManyUsuarioArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUsuarioArgs);
exports.CreateManyUsuarioArgs = CreateManyUsuarioArgs;
