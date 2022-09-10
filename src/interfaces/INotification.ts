export enum NotificationType {
    SUCESSO,
    FALHA,
    ATENCAO
}


export interface INotification {
    title: string
    text: string
    type: NotificationType
    id: number
}