export declare class UsuarioCreateManyInput {
    id?: string | undefined;
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: "Estudiante" | "Administrador" | "Lider";
    estado?: "Pendiente" | "Autorizado" | "Desautorizado" | undefined;
}
