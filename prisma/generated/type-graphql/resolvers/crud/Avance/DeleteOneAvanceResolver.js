"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneAvanceArgs_1 = require("./args/DeleteOneAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let DeleteOneAvanceResolver = class DeleteOneAvanceResolver {
    async deleteOneAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAvanceArgs_1.DeleteOneAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneAvanceResolver.prototype, "deleteOneAvance", null);
DeleteOneAvanceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], DeleteOneAvanceResolver);
exports.DeleteOneAvanceResolver = DeleteOneAvanceResolver;
