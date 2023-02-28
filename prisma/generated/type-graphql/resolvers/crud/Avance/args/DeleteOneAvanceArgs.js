"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceWhereUniqueInput_1 = require("../../../inputs/AvanceWhereUniqueInput");
let DeleteOneAvanceArgs = class DeleteOneAvanceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], DeleteOneAvanceArgs.prototype, "where", void 0);
DeleteOneAvanceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneAvanceArgs);
exports.DeleteOneAvanceArgs = DeleteOneAvanceArgs;
