import { AvanceCreateManyEstudianteInputEnvelope } from "../inputs/AvanceCreateManyEstudianteInputEnvelope";
import { AvanceCreateOrConnectWithoutEstudianteInput } from "../inputs/AvanceCreateOrConnectWithoutEstudianteInput";
import { AvanceCreateWithoutEstudianteInput } from "../inputs/AvanceCreateWithoutEstudianteInput";
import { AvanceScalarWhereInput } from "../inputs/AvanceScalarWhereInput";
import { AvanceUpdateManyWithWhereWithoutEstudianteInput } from "../inputs/AvanceUpdateManyWithWhereWithoutEstudianteInput";
import { AvanceUpdateWithWhereUniqueWithoutEstudianteInput } from "../inputs/AvanceUpdateWithWhereUniqueWithoutEstudianteInput";
import { AvanceUpsertWithWhereUniqueWithoutEstudianteInput } from "../inputs/AvanceUpsertWithWhereUniqueWithoutEstudianteInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";
export declare class AvanceUpdateManyWithoutEstudianteNestedInput {
    create?: AvanceCreateWithoutEstudianteInput[] | undefined;
    connectOrCreate?: AvanceCreateOrConnectWithoutEstudianteInput[] | undefined;
    upsert?: AvanceUpsertWithWhereUniqueWithoutEstudianteInput[] | undefined;
    createMany?: AvanceCreateManyEstudianteInputEnvelope | undefined;
    set?: AvanceWhereUniqueInput[] | undefined;
    disconnect?: AvanceWhereUniqueInput[] | undefined;
    delete?: AvanceWhereUniqueInput[] | undefined;
    connect?: AvanceWhereUniqueInput[] | undefined;
    update?: AvanceUpdateWithWhereUniqueWithoutEstudianteInput[] | undefined;
    updateMany?: AvanceUpdateManyWithWhereWithoutEstudianteInput[] | undefined;
    deleteMany?: AvanceScalarWhereInput[] | undefined;
}
