"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateInput_1 = require("../../../inputs/ProyectoCreateInput");
const ProyectoUpdateInput_1 = require("../../../inputs/ProyectoUpdateInput");
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
let UpsertOneProyectoArgs = class UpsertOneProyectoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], UpsertOneProyectoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateInput_1.ProyectoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateInput_1.ProyectoCreateInput)
], UpsertOneProyectoArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateInput_1.ProyectoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateInput_1.ProyectoUpdateInput)
], UpsertOneProyectoArgs.prototype, "update", void 0);
UpsertOneProyectoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneProyectoArgs);
exports.UpsertOneProyectoArgs = UpsertOneProyectoArgs;
