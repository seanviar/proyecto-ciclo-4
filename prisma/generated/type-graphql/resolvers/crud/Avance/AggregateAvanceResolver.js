"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAvanceArgs_1 = require("./args/AggregateAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const AggregateAvance_1 = require("../../outputs/AggregateAvance");
const helpers_1 = require("../../../helpers");
let AggregateAvanceResolver = class AggregateAvanceResolver {
    async aggregateAvance(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAvance_1.AggregateAvance, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAvanceArgs_1.AggregateAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAvanceResolver.prototype, "aggregateAvance", null);
AggregateAvanceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], AggregateAvanceResolver);
exports.AggregateAvanceResolver = AggregateAvanceResolver;
