"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByAvanceArgs_1 = require("./args/GroupByAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const AvanceGroupBy_1 = require("../../outputs/AvanceGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAvanceResolver = class GroupByAvanceResolver {
    async groupByAvance(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AvanceGroupBy_1.AvanceGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAvanceArgs_1.GroupByAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAvanceResolver.prototype, "groupByAvance", null);
GroupByAvanceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], GroupByAvanceResolver);
exports.GroupByAvanceResolver = GroupByAvanceResolver;
