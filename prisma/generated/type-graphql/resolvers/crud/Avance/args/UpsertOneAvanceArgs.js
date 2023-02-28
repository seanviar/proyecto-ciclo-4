"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateInput_1 = require("../../../inputs/AvanceCreateInput");
const AvanceUpdateInput_1 = require("../../../inputs/AvanceUpdateInput");
const AvanceWhereUniqueInput_1 = require("../../../inputs/AvanceWhereUniqueInput");
let UpsertOneAvanceArgs = class UpsertOneAvanceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], UpsertOneAvanceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceCreateInput_1.AvanceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceCreateInput_1.AvanceCreateInput)
], UpsertOneAvanceArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateInput_1.AvanceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceUpdateInput_1.AvanceUpdateInput)
], UpsertOneAvanceArgs.prototype, "update", void 0);
UpsertOneAvanceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAvanceArgs);
exports.UpsertOneAvanceArgs = UpsertOneAvanceArgs;
