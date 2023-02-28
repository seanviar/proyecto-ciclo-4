import { ProyectoCreateOrConnectWithoutInscripcionInput } from "../inputs/ProyectoCreateOrConnectWithoutInscripcionInput";
import { ProyectoCreateWithoutInscripcionInput } from "../inputs/ProyectoCreateWithoutInscripcionInput";
import { ProyectoUpdateWithoutInscripcionInput } from "../inputs/ProyectoUpdateWithoutInscripcionInput";
import { ProyectoUpsertWithoutInscripcionInput } from "../inputs/ProyectoUpsertWithoutInscripcionInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoUpdateOneRequiredWithoutInscripcionNestedInput {
    create?: ProyectoCreateWithoutInscripcionInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutInscripcionInput | undefined;
    upsert?: ProyectoUpsertWithoutInscripcionInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
    update?: ProyectoUpdateWithoutInscripcionInput | undefined;
}
