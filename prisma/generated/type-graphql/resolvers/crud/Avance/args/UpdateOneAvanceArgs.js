"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceUpdateInput_1 = require("../../../inputs/AvanceUpdateInput");
const AvanceWhereUniqueInput_1 = require("../../../inputs/AvanceWhereUniqueInput");
let UpdateOneAvanceArgs = class UpdateOneAvanceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceUpdateInput_1.AvanceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceUpdateInput_1.AvanceUpdateInput)
], UpdateOneAvanceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], UpdateOneAvanceArgs.prototype, "where", void 0);
UpdateOneAvanceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAvanceArgs);
exports.UpdateOneAvanceArgs = UpdateOneAvanceArgs;
