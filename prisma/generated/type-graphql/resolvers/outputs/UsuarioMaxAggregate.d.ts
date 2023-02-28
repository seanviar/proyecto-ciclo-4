export declare class UsuarioMaxAggregate {
    id: string | null;
    correo: string | null;
    identificacion: string | null;
    nombre: string | null;
    apellido: string | null;
    rol: "Estudiante" | "Administrador" | "Lider" | null;
    estado: "Pendiente" | "Autorizado" | "Desautorizado" | null;
}
