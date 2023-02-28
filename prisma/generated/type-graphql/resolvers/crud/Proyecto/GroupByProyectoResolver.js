"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByProyectoArgs_1 = require("./args/GroupByProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const ProyectoGroupBy_1 = require("../../outputs/ProyectoGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProyectoResolver = class GroupByProyectoResolver {
    async groupByProyecto(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProyectoGroupBy_1.ProyectoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProyectoArgs_1.GroupByProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProyectoResolver.prototype, "groupByProyecto", null);
GroupByProyectoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], GroupByProyectoResolver);
exports.GroupByProyectoResolver = GroupByProyectoResolver;
