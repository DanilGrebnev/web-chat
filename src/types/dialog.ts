import { MessageDTO } from '.'

export interface IDialog {
    _id: string
    members: any[]
    lastMessage: MessageDTO
}
