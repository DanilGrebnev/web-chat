export interface MessageDTO {
    _id: string
    text: string
    senderId: string
    dialogId: string
    createdAt: string
    updatedAt: string
}

export interface DialogDTO {
    receiverId: string
    senderId: string
}
