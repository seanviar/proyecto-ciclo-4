"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoUpdateInput_1 = require("../../../inputs/ProyectoUpdateInput");
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
let UpdateOneProyectoArgs = class UpdateOneProyectoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateInput_1.ProyectoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateInput_1.ProyectoUpdateInput)
], UpdateOneProyectoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], UpdateOneProyectoArgs.prototype, "where", void 0);
UpdateOneProyectoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneProyectoArgs);
exports.UpdateOneProyectoArgs = UpdateOneProyectoArgs;
