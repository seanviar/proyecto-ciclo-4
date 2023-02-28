"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Usuario: crudResolvers.UsuarioCrudResolver,
    Inscripcion: crudResolvers.InscripcionCrudResolver,
    Proyecto: crudResolvers.ProyectoCrudResolver,
    Avance: crudResolvers.AvanceCrudResolver
};
const actionResolversMap = {
    Usuario: {
        aggregateUsuario: actionResolvers.AggregateUsuarioResolver,
        createManyUsuario: actionResolvers.CreateManyUsuarioResolver,
        createOneUsuario: actionResolvers.CreateOneUsuarioResolver,
        deleteManyUsuario: actionResolvers.DeleteManyUsuarioResolver,
        deleteOneUsuario: actionResolvers.DeleteOneUsuarioResolver,
        findFirstUsuario: actionResolvers.FindFirstUsuarioResolver,
        findFirstUsuarioOrThrow: actionResolvers.FindFirstUsuarioOrThrowResolver,
        usuarios: actionResolvers.FindManyUsuarioResolver,
        usuario: actionResolvers.FindUniqueUsuarioResolver,
        getUsuario: actionResolvers.FindUniqueUsuarioOrThrowResolver,
        groupByUsuario: actionResolvers.GroupByUsuarioResolver,
        updateManyUsuario: actionResolvers.UpdateManyUsuarioResolver,
        updateOneUsuario: actionResolvers.UpdateOneUsuarioResolver,
        upsertOneUsuario: actionResolvers.UpsertOneUsuarioResolver
    },
    Inscripcion: {
        aggregateInscripcion: actionResolvers.AggregateInscripcionResolver,
        createManyInscripcion: actionResolvers.CreateManyInscripcionResolver,
        createOneInscripcion: actionResolvers.CreateOneInscripcionResolver,
        deleteManyInscripcion: actionResolvers.DeleteManyInscripcionResolver,
        deleteOneInscripcion: actionResolvers.DeleteOneInscripcionResolver,
        findFirstInscripcion: actionResolvers.FindFirstInscripcionResolver,
        findFirstInscripcionOrThrow: actionResolvers.FindFirstInscripcionOrThrowResolver,
        inscripcions: actionResolvers.FindManyInscripcionResolver,
        inscripcion: actionResolvers.FindUniqueInscripcionResolver,
        getInscripcion: actionResolvers.FindUniqueInscripcionOrThrowResolver,
        groupByInscripcion: actionResolvers.GroupByInscripcionResolver,
        updateManyInscripcion: actionResolvers.UpdateManyInscripcionResolver,
        updateOneInscripcion: actionResolvers.UpdateOneInscripcionResolver,
        upsertOneInscripcion: actionResolvers.UpsertOneInscripcionResolver
    },
    Proyecto: {
        aggregateProyecto: actionResolvers.AggregateProyectoResolver,
        createManyProyecto: actionResolvers.CreateManyProyectoResolver,
        createOneProyecto: actionResolvers.CreateOneProyectoResolver,
        deleteManyProyecto: actionResolvers.DeleteManyProyectoResolver,
        deleteOneProyecto: actionResolvers.DeleteOneProyectoResolver,
        findFirstProyecto: actionResolvers.FindFirstProyectoResolver,
        findFirstProyectoOrThrow: actionResolvers.FindFirstProyectoOrThrowResolver,
        proyectos: actionResolvers.FindManyProyectoResolver,
        proyecto: actionResolvers.FindUniqueProyectoResolver,
        getProyecto: actionResolvers.FindUniqueProyectoOrThrowResolver,
        groupByProyecto: actionResolvers.GroupByProyectoResolver,
        updateManyProyecto: actionResolvers.UpdateManyProyectoResolver,
        updateOneProyecto: actionResolvers.UpdateOneProyectoResolver,
        upsertOneProyecto: actionResolvers.UpsertOneProyectoResolver
    },
    Avance: {
        aggregateAvance: actionResolvers.AggregateAvanceResolver,
        createManyAvance: actionResolvers.CreateManyAvanceResolver,
        createOneAvance: actionResolvers.CreateOneAvanceResolver,
        deleteManyAvance: actionResolvers.DeleteManyAvanceResolver,
        deleteOneAvance: actionResolvers.DeleteOneAvanceResolver,
        findFirstAvance: actionResolvers.FindFirstAvanceResolver,
        findFirstAvanceOrThrow: actionResolvers.FindFirstAvanceOrThrowResolver,
        avances: actionResolvers.FindManyAvanceResolver,
        avance: actionResolvers.FindUniqueAvanceResolver,
        getAvance: actionResolvers.FindUniqueAvanceOrThrowResolver,
        groupByAvance: actionResolvers.GroupByAvanceResolver,
        updateManyAvance: actionResolvers.UpdateManyAvanceResolver,
        updateOneAvance: actionResolvers.UpdateOneAvanceResolver,
        upsertOneAvance: actionResolvers.UpsertOneAvanceResolver
    }
};
const crudResolversInfo = {
    Usuario: ["aggregateUsuario", "createManyUsuario", "createOneUsuario", "deleteManyUsuario", "deleteOneUsuario", "findFirstUsuario", "findFirstUsuarioOrThrow", "usuarios", "usuario", "getUsuario", "groupByUsuario", "updateManyUsuario", "updateOneUsuario", "upsertOneUsuario"],
    Inscripcion: ["aggregateInscripcion", "createManyInscripcion", "createOneInscripcion", "deleteManyInscripcion", "deleteOneInscripcion", "findFirstInscripcion", "findFirstInscripcionOrThrow", "inscripcions", "inscripcion", "getInscripcion", "groupByInscripcion", "updateManyInscripcion", "updateOneInscripcion", "upsertOneInscripcion"],
    Proyecto: ["aggregateProyecto", "createManyProyecto", "createOneProyecto", "deleteManyProyecto", "deleteOneProyecto", "findFirstProyecto", "findFirstProyectoOrThrow", "proyectos", "proyecto", "getProyecto", "groupByProyecto", "updateManyProyecto", "updateOneProyecto", "upsertOneProyecto"],
    Avance: ["aggregateAvance", "createManyAvance", "createOneAvance", "deleteManyAvance", "deleteOneAvance", "findFirstAvance", "findFirstAvanceOrThrow", "avances", "avance", "getAvance", "groupByAvance", "updateManyAvance", "updateOneAvance", "upsertOneAvance"]
};
const argsInfo = {
    AggregateUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUsuarioArgs: ["data", "skipDuplicates"],
    CreateOneUsuarioArgs: ["data"],
    DeleteManyUsuarioArgs: ["where"],
    DeleteOneUsuarioArgs: ["where"],
    FindFirstUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUsuarioOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUsuarioArgs: ["where"],
    FindUniqueUsuarioOrThrowArgs: ["where"],
    GroupByUsuarioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUsuarioArgs: ["data", "where"],
    UpdateOneUsuarioArgs: ["data", "where"],
    UpsertOneUsuarioArgs: ["where", "create", "update"],
    AggregateInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyInscripcionArgs: ["data", "skipDuplicates"],
    CreateOneInscripcionArgs: ["data"],
    DeleteManyInscripcionArgs: ["where"],
    DeleteOneInscripcionArgs: ["where"],
    FindFirstInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstInscripcionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueInscripcionArgs: ["where"],
    FindUniqueInscripcionOrThrowArgs: ["where"],
    GroupByInscripcionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyInscripcionArgs: ["data", "where"],
    UpdateOneInscripcionArgs: ["data", "where"],
    UpsertOneInscripcionArgs: ["where", "create", "update"],
    AggregateProyectoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyProyectoArgs: ["data", "skipDuplicates"],
    CreateOneProyectoArgs: ["data"],
    DeleteManyProyectoArgs: ["where"],
    DeleteOneProyectoArgs: ["where"],
    FindFirstProyectoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstProyectoOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProyectoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProyectoArgs: ["where"],
    FindUniqueProyectoOrThrowArgs: ["where"],
    GroupByProyectoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProyectoArgs: ["data", "where"],
    UpdateOneProyectoArgs: ["data", "where"],
    UpsertOneProyectoArgs: ["where", "create", "update"],
    AggregateAvanceArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAvanceArgs: ["data", "skipDuplicates"],
    CreateOneAvanceArgs: ["data"],
    DeleteManyAvanceArgs: ["where"],
    DeleteOneAvanceArgs: ["where"],
    FindFirstAvanceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAvanceOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAvanceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAvanceArgs: ["where"],
    FindUniqueAvanceOrThrowArgs: ["where"],
    GroupByAvanceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAvanceArgs: ["data", "where"],
    UpdateOneAvanceArgs: ["data", "where"],
    UpsertOneAvanceArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    var _a;
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = (_a = resolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Usuario: relationResolvers.UsuarioRelationsResolver,
    Inscripcion: relationResolvers.InscripcionRelationsResolver,
    Proyecto: relationResolvers.ProyectoRelationsResolver,
    Avance: relationResolvers.AvanceRelationsResolver
};
const relationResolversInfo = {
    Usuario: ["inscripcion", "proyecto", "avance"],
    Inscripcion: ["proyecto", "estudiante"],
    Proyecto: ["lider", "avance", "inscripcion"],
    Avance: ["proyecto", "estudiante"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    var _a;
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = (_a = relationResolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Usuario: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado"],
    Inscripcion: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    Proyecto: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
    Avance: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUsuario: ["_count", "_min", "_max"],
    UsuarioGroupBy: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "_count", "_min", "_max"],
    AggregateInscripcion: ["_count", "_min", "_max"],
    InscripcionGroupBy: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId", "_count", "_min", "_max"],
    AggregateProyecto: ["_count", "_avg", "_sum", "_min", "_max"],
    ProyectoGroupBy: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAvance: ["_count", "_min", "_max"],
    AvanceGroupBy: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UsuarioCount: ["inscripcion", "proyecto", "avance"],
    UsuarioCountAggregate: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "_all"],
    UsuarioMinAggregate: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado"],
    UsuarioMaxAggregate: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado"],
    InscripcionCountAggregate: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId", "_all"],
    InscripcionMinAggregate: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    InscripcionMaxAggregate: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    ProyectoCount: ["avance", "inscripcion"],
    ProyectoCountAggregate: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase", "_all"],
    ProyectoAvgAggregate: ["presupuesto"],
    ProyectoSumAggregate: ["presupuesto"],
    ProyectoMinAggregate: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
    ProyectoMaxAggregate: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
    AvanceCountAggregate: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId", "_all"],
    AvanceMinAggregate: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId"],
    AvanceMaxAggregate: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UsuarioWhereInput: ["AND", "OR", "NOT", "id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "inscripcion", "proyecto", "avance"],
    UsuarioOrderByWithRelationInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "inscripcion", "proyecto", "avance"],
    UsuarioWhereUniqueInput: ["id", "correo", "identificacion"],
    UsuarioOrderByWithAggregationInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "_count", "_max", "_min"],
    UsuarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "correo", "identificacion", "nombre", "apellido", "rol", "estado"],
    InscripcionWhereInput: ["AND", "OR", "NOT", "id", "proyecto", "estudiante", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    InscripcionOrderByWithRelationInput: ["id", "proyecto", "estudiante", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    InscripcionWhereUniqueInput: ["id"],
    InscripcionOrderByWithAggregationInput: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId", "_count", "_max", "_min"],
    InscripcionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    ProyectoWhereInput: ["AND", "OR", "NOT", "id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "lider", "usuarioId", "estado", "fase", "avance", "inscripcion"],
    ProyectoOrderByWithRelationInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "lider", "usuarioId", "estado", "fase", "avance", "inscripcion"],
    ProyectoWhereUniqueInput: ["id"],
    ProyectoOrderByWithAggregationInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase", "_count", "_avg", "_max", "_min", "_sum"],
    ProyectoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
    AvanceWhereInput: ["AND", "OR", "NOT", "id", "proyecto", "proyectoId", "fecha", "descripcion", "observaciones", "estudiante", "usuarioId"],
    AvanceOrderByWithRelationInput: ["id", "proyecto", "proyectoId", "fecha", "descripcion", "observaciones", "estudiante", "usuarioId"],
    AvanceWhereUniqueInput: ["id"],
    AvanceOrderByWithAggregationInput: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId", "_count", "_max", "_min"],
    AvanceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId"],
    UsuarioCreateInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "inscripcion", "proyecto", "avance"],
    UsuarioUpdateInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "inscripcion", "proyecto", "avance"],
    UsuarioCreateManyInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado"],
    UsuarioUpdateManyMutationInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado"],
    InscripcionCreateInput: ["id", "proyecto", "estudiante", "estado", "fechaIngreso"],
    InscripcionUpdateInput: ["id", "proyecto", "estudiante", "estado", "fechaIngreso"],
    InscripcionCreateManyInput: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    InscripcionUpdateManyMutationInput: ["id", "estado", "fechaIngreso"],
    ProyectoCreateInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "lider", "estado", "fase", "avance", "inscripcion"],
    ProyectoUpdateInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "lider", "estado", "fase", "avance", "inscripcion"],
    ProyectoCreateManyInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
    ProyectoUpdateManyMutationInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase"],
    AvanceCreateInput: ["id", "proyecto", "fecha", "descripcion", "observaciones", "estudiante"],
    AvanceUpdateInput: ["id", "proyecto", "fecha", "descripcion", "observaciones", "estudiante"],
    AvanceCreateManyInput: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId"],
    AvanceUpdateManyMutationInput: ["id", "fecha", "descripcion", "observaciones"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumEnum_RolFilter: ["equals", "in", "notIn", "not"],
    EnumEnum_Estado_UsuarioFilter: ["equals", "in", "notIn", "not"],
    InscripcionListRelationFilter: ["every", "some", "none"],
    ProyectoListRelationFilter: ["every", "some", "none"],
    AvanceListRelationFilter: ["every", "some", "none"],
    InscripcionOrderByRelationAggregateInput: ["_count"],
    ProyectoOrderByRelationAggregateInput: ["_count"],
    AvanceOrderByRelationAggregateInput: ["_count"],
    UsuarioCountOrderByAggregateInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado"],
    UsuarioMaxOrderByAggregateInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado"],
    UsuarioMinOrderByAggregateInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumEnum_RolWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumEnum_Estado_UsuarioWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    ProyectoRelationFilter: ["is", "isNot"],
    UsuarioRelationFilter: ["is", "isNot"],
    EnumEnum_Estado_InscripcionFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    InscripcionCountOrderByAggregateInput: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    InscripcionMaxOrderByAggregateInput: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    InscripcionMinOrderByAggregateInput: ["id", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    EnumEnum_Estado_InscripcionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumEnum_Estado_ProyectoFilter: ["equals", "in", "notIn", "not"],
    EnumEnum_Fase_ProyectoNullableFilter: ["equals", "in", "notIn", "not"],
    ProyectoCountOrderByAggregateInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
    ProyectoAvgOrderByAggregateInput: ["presupuesto"],
    ProyectoMaxOrderByAggregateInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
    ProyectoMinOrderByAggregateInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
    ProyectoSumOrderByAggregateInput: ["presupuesto"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    EnumEnum_Estado_ProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumEnum_Fase_ProyectoNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    AvanceCountOrderByAggregateInput: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId"],
    AvanceMaxOrderByAggregateInput: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId"],
    AvanceMinOrderByAggregateInput: ["id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId"],
    InscripcionCreateNestedManyWithoutEstudianteInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProyectoCreateNestedManyWithoutLiderInput: ["create", "connectOrCreate", "createMany", "connect"],
    AvanceCreateNestedManyWithoutEstudianteInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    EnumEnum_RolFieldUpdateOperationsInput: ["set"],
    EnumEnum_Estado_UsuarioFieldUpdateOperationsInput: ["set"],
    InscripcionUpdateManyWithoutEstudianteNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProyectoUpdateManyWithoutLiderNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AvanceUpdateManyWithoutEstudianteNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProyectoCreateNestedOneWithoutInscripcionInput: ["create", "connectOrCreate", "connect"],
    UsuarioCreateNestedOneWithoutInscripcionInput: ["create", "connectOrCreate", "connect"],
    ProyectoUpdateOneRequiredWithoutInscripcionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UsuarioUpdateOneRequiredWithoutInscripcionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    EnumEnum_Estado_InscripcionFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UsuarioCreateNestedOneWithoutProyectoInput: ["create", "connectOrCreate", "connect"],
    AvanceCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
    InscripcionCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    UsuarioUpdateOneRequiredWithoutProyectoNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    EnumEnum_Estado_ProyectoFieldUpdateOperationsInput: ["set"],
    NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput: ["set"],
    AvanceUpdateManyWithoutProyectoNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    InscripcionUpdateManyWithoutProyectoNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProyectoCreateNestedOneWithoutAvanceInput: ["create", "connectOrCreate", "connect"],
    UsuarioCreateNestedOneWithoutAvanceInput: ["create", "connectOrCreate", "connect"],
    ProyectoUpdateOneRequiredWithoutAvanceNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UsuarioUpdateOneRequiredWithoutAvanceNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumEnum_RolFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_Estado_UsuarioFilter: ["equals", "in", "notIn", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_RolWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_Estado_UsuarioWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_Estado_InscripcionFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_Estado_InscripcionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_Estado_ProyectoFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_Fase_ProyectoNullableFilter: ["equals", "in", "notIn", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_Estado_ProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    InscripcionCreateWithoutEstudianteInput: ["id", "proyecto", "estado", "fechaIngreso"],
    InscripcionCreateOrConnectWithoutEstudianteInput: ["where", "create"],
    InscripcionCreateManyEstudianteInputEnvelope: ["data", "skipDuplicates"],
    ProyectoCreateWithoutLiderInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "avance", "inscripcion"],
    ProyectoCreateOrConnectWithoutLiderInput: ["where", "create"],
    ProyectoCreateManyLiderInputEnvelope: ["data", "skipDuplicates"],
    AvanceCreateWithoutEstudianteInput: ["id", "proyecto", "fecha", "descripcion", "observaciones"],
    AvanceCreateOrConnectWithoutEstudianteInput: ["where", "create"],
    AvanceCreateManyEstudianteInputEnvelope: ["data", "skipDuplicates"],
    InscripcionUpsertWithWhereUniqueWithoutEstudianteInput: ["where", "update", "create"],
    InscripcionUpdateWithWhereUniqueWithoutEstudianteInput: ["where", "data"],
    InscripcionUpdateManyWithWhereWithoutEstudianteInput: ["where", "data"],
    InscripcionScalarWhereInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "usuarioId", "proyectoId"],
    ProyectoUpsertWithWhereUniqueWithoutLiderInput: ["where", "update", "create"],
    ProyectoUpdateWithWhereUniqueWithoutLiderInput: ["where", "data"],
    ProyectoUpdateManyWithWhereWithoutLiderInput: ["where", "data"],
    ProyectoScalarWhereInput: ["AND", "OR", "NOT", "id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
    AvanceUpsertWithWhereUniqueWithoutEstudianteInput: ["where", "update", "create"],
    AvanceUpdateWithWhereUniqueWithoutEstudianteInput: ["where", "data"],
    AvanceUpdateManyWithWhereWithoutEstudianteInput: ["where", "data"],
    AvanceScalarWhereInput: ["AND", "OR", "NOT", "id", "proyectoId", "fecha", "descripcion", "observaciones", "usuarioId"],
    ProyectoCreateWithoutInscripcionInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "lider", "estado", "fase", "avance"],
    ProyectoCreateOrConnectWithoutInscripcionInput: ["where", "create"],
    UsuarioCreateWithoutInscripcionInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "proyecto", "avance"],
    UsuarioCreateOrConnectWithoutInscripcionInput: ["where", "create"],
    ProyectoUpsertWithoutInscripcionInput: ["update", "create"],
    ProyectoUpdateWithoutInscripcionInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "lider", "estado", "fase", "avance"],
    UsuarioUpsertWithoutInscripcionInput: ["update", "create"],
    UsuarioUpdateWithoutInscripcionInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "proyecto", "avance"],
    UsuarioCreateWithoutProyectoInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "inscripcion", "avance"],
    UsuarioCreateOrConnectWithoutProyectoInput: ["where", "create"],
    AvanceCreateWithoutProyectoInput: ["id", "fecha", "descripcion", "observaciones", "estudiante"],
    AvanceCreateOrConnectWithoutProyectoInput: ["where", "create"],
    AvanceCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
    InscripcionCreateWithoutProyectoInput: ["id", "estudiante", "estado", "fechaIngreso"],
    InscripcionCreateOrConnectWithoutProyectoInput: ["where", "create"],
    InscripcionCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
    UsuarioUpsertWithoutProyectoInput: ["update", "create"],
    UsuarioUpdateWithoutProyectoInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "inscripcion", "avance"],
    AvanceUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
    AvanceUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
    AvanceUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
    InscripcionUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
    InscripcionUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
    InscripcionUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
    ProyectoCreateWithoutAvanceInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "lider", "estado", "fase", "inscripcion"],
    ProyectoCreateOrConnectWithoutAvanceInput: ["where", "create"],
    UsuarioCreateWithoutAvanceInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "inscripcion", "proyecto"],
    UsuarioCreateOrConnectWithoutAvanceInput: ["where", "create"],
    ProyectoUpsertWithoutAvanceInput: ["update", "create"],
    ProyectoUpdateWithoutAvanceInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "lider", "estado", "fase", "inscripcion"],
    UsuarioUpsertWithoutAvanceInput: ["update", "create"],
    UsuarioUpdateWithoutAvanceInput: ["id", "correo", "identificacion", "nombre", "apellido", "rol", "estado", "inscripcion", "proyecto"],
    InscripcionCreateManyEstudianteInput: ["id", "estado", "fechaIngreso", "proyectoId"],
    ProyectoCreateManyLiderInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase"],
    AvanceCreateManyEstudianteInput: ["id", "proyectoId", "fecha", "descripcion", "observaciones"],
    InscripcionUpdateWithoutEstudianteInput: ["id", "proyecto", "estado", "fechaIngreso"],
    ProyectoUpdateWithoutLiderInput: ["id", "nombre", "objetivosGenerales", "objetivosEspesificos", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "avance", "inscripcion"],
    AvanceUpdateWithoutEstudianteInput: ["id", "proyecto", "fecha", "descripcion", "observaciones"],
    AvanceCreateManyProyectoInput: ["id", "fecha", "descripcion", "observaciones", "usuarioId"],
    InscripcionCreateManyProyectoInput: ["id", "estado", "fechaIngreso", "usuarioId"],
    AvanceUpdateWithoutProyectoInput: ["id", "fecha", "descripcion", "observaciones", "estudiante"],
    InscripcionUpdateWithoutProyectoInput: ["id", "estudiante", "estado", "fechaIngreso"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
