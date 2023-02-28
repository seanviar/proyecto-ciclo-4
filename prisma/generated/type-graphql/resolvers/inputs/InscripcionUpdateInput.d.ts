import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_Estado_InscripcionFieldUpdateOperationsInput } from "../inputs/EnumEnum_Estado_InscripcionFieldUpdateOperationsInput";
import { ProyectoUpdateOneRequiredWithoutInscripcionNestedInput } from "../inputs/ProyectoUpdateOneRequiredWithoutInscripcionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutInscripcionNestedInput } from "../inputs/UsuarioUpdateOneRequiredWithoutInscripcionNestedInput";
export declare class InscripcionUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    proyecto?: ProyectoUpdateOneRequiredWithoutInscripcionNestedInput | undefined;
    estudiante?: UsuarioUpdateOneRequiredWithoutInscripcionNestedInput | undefined;
    estado?: EnumEnum_Estado_InscripcionFieldUpdateOperationsInput | undefined;
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | undefined;
}
