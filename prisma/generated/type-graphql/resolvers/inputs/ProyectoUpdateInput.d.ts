import { AvanceUpdateManyWithoutProyectoNestedInput } from "../inputs/AvanceUpdateManyWithoutProyectoNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_Estado_ProyectoFieldUpdateOperationsInput } from "../inputs/EnumEnum_Estado_ProyectoFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { InscripcionUpdateManyWithoutProyectoNestedInput } from "../inputs/InscripcionUpdateManyWithoutProyectoNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput } from "../inputs/NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutProyectoNestedInput } from "../inputs/UsuarioUpdateOneRequiredWithoutProyectoNestedInput";
export declare class ProyectoUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    objetivosGenerales?: StringFieldUpdateOperationsInput | undefined;
    objetivosEspesificos?: StringFieldUpdateOperationsInput | undefined;
    presupuesto?: FloatFieldUpdateOperationsInput | undefined;
    fechaInicio?: DateTimeFieldUpdateOperationsInput | undefined;
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    lider?: UsuarioUpdateOneRequiredWithoutProyectoNestedInput | undefined;
    estado?: EnumEnum_Estado_ProyectoFieldUpdateOperationsInput | undefined;
    fase?: NullableEnumEnum_Fase_ProyectoFieldUpdateOperationsInput | undefined;
    avance?: AvanceUpdateManyWithoutProyectoNestedInput | undefined;
    inscripcion?: InscripcionUpdateManyWithoutProyectoNestedInput | undefined;
}
