"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AvanceOrderByRelationAggregateInput = class AvanceOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvanceOrderByRelationAggregateInput.prototype, "_count", void 0);
AvanceOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceOrderByRelationAggregateInput", {
        isAbstract: true
    })
], AvanceOrderByRelationAggregateInput);
exports.AvanceOrderByRelationAggregateInput = AvanceOrderByRelationAggregateInput;
