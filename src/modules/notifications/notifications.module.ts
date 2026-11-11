import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bullmq";
import { NotificationsService } from "./notifications.service";
import { NotificationsController } from "./notifications.controller";
import { NotificationCleanupService } from "./notification-cleanup.service";
import { SlackNotificationsService } from "./slack-notifications.service";
import { DiscordNotificationsService } from "./discord-notifications.service";
import { TeamsNotificationsService } from "./teams-notifications.service";
import { EmailTemplateModule } from "../../common/email/email-template.module";
import { notificationsPubSubProvider } from "./notification-pubsub";
import { WebPushService } from "./web-push.service";

@Module({
  imports: [
    BullModule.registerQueue(
      { name: "email" },
      { name: "slack" },
      { name: "discord" },
      { name: "teams" },
    ),
    EmailTemplateModule,
  ],
  providers: [
    NotificationsService,
    NotificationCleanupService,
    SlackNotificationsService,
    DiscordNotificationsService,
    TeamsNotificationsService,
    WebPushService,
    notificationsPubSubProvider,
  ],
  controllers: [NotificationsController],
  exports: [
    NotificationsService,
    SlackNotificationsService,
    DiscordNotificationsService,
    TeamsNotificationsService,
    WebPushService,
    notificationsPubSubProvider,
  ],
})
export class NotificationsModule {}
