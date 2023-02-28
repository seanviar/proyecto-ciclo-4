import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProyectoUpdateOneRequiredWithoutAvanceNestedInput } from "../inputs/ProyectoUpdateOneRequiredWithoutAvanceNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutAvanceNestedInput } from "../inputs/UsuarioUpdateOneRequiredWithoutAvanceNestedInput";
export declare class AvanceUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    proyecto?: ProyectoUpdateOneRequiredWithoutAvanceNestedInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    observaciones?: StringFieldUpdateOperationsInput | undefined;
    estudiante?: UsuarioUpdateOneRequiredWithoutAvanceNestedInput | undefined;
}
