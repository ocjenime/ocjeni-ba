import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async sendWelcomeEmail(userId: string): Promise<void> {
    // TODO: Implementirati slanje emaila
    console.log(`Šaljem dobrodošlicu korisniku: ${userId}`);
  }

  async sendReviewNotification(businessId: string, reviewId: string): Promise<void> {
    // TODO: Implementirati notifikaciju vlasnika tvrtke
    console.log(`Nova recenzija za tvrtku ${businessId}: ${reviewId}`);
  }

  async sendModerationNotification(reviewId: string, status: string): Promise<void> {
    // TODO: Implementirati notifikaciju korisnika
    console.log(`Recenzija ${reviewId} je ${status}`);
  }
}
