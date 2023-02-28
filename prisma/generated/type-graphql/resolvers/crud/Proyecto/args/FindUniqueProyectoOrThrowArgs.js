"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProyectoOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
let FindUniqueProyectoOrThrowArgs = class FindUniqueProyectoOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], FindUniqueProyectoOrThrowArgs.prototype, "where", void 0);
FindUniqueProyectoOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProyectoOrThrowArgs);
exports.FindUniqueProyectoOrThrowArgs = FindUniqueProyectoOrThrowArgs;
