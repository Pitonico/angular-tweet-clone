import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private message: string[] = []

  set addMessage(message: string) {
    this.message.push(message);
  }

  get getMessage() {
    return this.message;
  }

  clearMessage() {
    this.message = [];
  }
}
