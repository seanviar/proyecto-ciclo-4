export declare class ProyectoCreateManyLiderInput {
    id?: string | undefined;
    nombre: string;
    objetivosGenerales: string;
    objetivosEspesificos: string;
    presupuesto: number;
    fechaInicio?: Date | undefined;
    fechaFin?: Date | undefined;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "En_Desarrollo" | "Terminado" | undefined;
}
