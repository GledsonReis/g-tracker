import { NotificationType } from "@/interfaces/INotification";
import { store } from "@/store";
import { NOTIFY } from "@/store/mutations";

export const notificationMixin = {
    methods: {
        notify(type: NotificationType, title: string, text: string): void {
            store.commit(NOTIFY, {
                title,
                text,
                type
            })
        }
    }
}