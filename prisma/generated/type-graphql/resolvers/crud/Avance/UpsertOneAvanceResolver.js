"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneAvanceArgs_1 = require("./args/UpsertOneAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let UpsertOneAvanceResolver = class UpsertOneAvanceResolver {
    async upsertOneAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAvanceArgs_1.UpsertOneAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneAvanceResolver.prototype, "upsertOneAvance", null);
UpsertOneAvanceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], UpsertOneAvanceResolver);
exports.UpsertOneAvanceResolver = UpsertOneAvanceResolver;
