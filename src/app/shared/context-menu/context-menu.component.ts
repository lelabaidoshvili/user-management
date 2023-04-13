import { Component, EventEmitter, Output, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {
  @Output() itemClicked: EventEmitter<string> = new EventEmitter();
  @Input() showContextMenu = false;
  @Input() contextMenuX = 0;
  @Input() contextMenuY = 0;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.showContextMenu) {
      const target = event.target as HTMLElement;
      const contextMenu = target.closest('.context-menu');

      if (!contextMenu) {
        this.showContextMenu = false;
      }
    }
  }
  public onItemClick(item: string): void {
    this.itemClicked.emit(item);
  }

}
