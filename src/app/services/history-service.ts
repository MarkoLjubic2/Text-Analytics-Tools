import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private history: { timestamp: string, request: string }[] = [];

  constructor() {}

  addHistory(request: string): void {
    const timestamp = new Date().toLocaleString();
    this.history.push({ timestamp, request });
  }

  getHistory(): { timestamp: string, request: string }[] {
    return this.history;
  }
}
