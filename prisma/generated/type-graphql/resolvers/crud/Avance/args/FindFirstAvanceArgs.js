"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceOrderByWithRelationInput_1 = require("../../../inputs/AvanceOrderByWithRelationInput");
const AvanceWhereInput_1 = require("../../../inputs/AvanceWhereInput");
const AvanceWhereUniqueInput_1 = require("../../../inputs/AvanceWhereUniqueInput");
const AvanceScalarFieldEnum_1 = require("../../../../enums/AvanceScalarFieldEnum");
let FindFirstAvanceArgs = class FindFirstAvanceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceWhereInput_1.AvanceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceWhereInput_1.AvanceWhereInput)
], FindFirstAvanceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceOrderByWithRelationInput_1.AvanceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAvanceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceWhereUniqueInput_1.AvanceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvanceWhereUniqueInput_1.AvanceWhereUniqueInput)
], FindFirstAvanceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAvanceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAvanceArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceScalarFieldEnum_1.AvanceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAvanceArgs.prototype, "distinct", void 0);
FindFirstAvanceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAvanceArgs);
exports.FindFirstAvanceArgs = FindFirstAvanceArgs;
