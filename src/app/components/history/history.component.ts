import {Component, OnInit} from '@angular/core';
import {HistoryService} from "../../services/history-service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  requests: { timestamp: string, request: string }[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.requests = this.historyService.getHistory();
  }
}
