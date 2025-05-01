import type { Notification } from "../model/types/notification";

export const mockNotification = {
  id: "1",
  title: "Уведомление 1",
  description: "Произошло какое-то событие",
} satisfies Notification;

export const mockNotifications = new Array(3).fill(0).map((_, index) => ({
  ...mockNotification,
  id: String(index),
}));
