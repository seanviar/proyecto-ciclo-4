import { ProyectoCreateOrConnectWithoutInscripcionInput } from "../inputs/ProyectoCreateOrConnectWithoutInscripcionInput";
import { ProyectoCreateWithoutInscripcionInput } from "../inputs/ProyectoCreateWithoutInscripcionInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoCreateNestedOneWithoutInscripcionInput {
    create?: ProyectoCreateWithoutInscripcionInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutInscripcionInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
}
