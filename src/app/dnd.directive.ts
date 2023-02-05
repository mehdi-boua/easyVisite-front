import { Output, Directive, HostListener, HostBinding, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  
  @HostBinding('class.fileover') private fileOver: boolean
  @Output() fileDropped = new EventEmitter<any>();
  
  constructor() { }
  // Dragover Listener
  @HostListener('dragover',['$event']) onDragOver(ev){
    ev.preventDefault()
    ev.stopPropagation()

    console.log("dragover")
  }
  
  @HostListener('dragleave',['$event']) onDragLeave(ev){
    ev.preventDefault()
    ev.stopPropagation()
    
    console.log("dragleave")
  }
  
  @HostListener('drop',['$event']) onDrop(ev){
    ev.preventDefault()
    ev.stopPropagation()
    
    this.fileOver = false
    var file = ev.dataTransfer.files[0]
    this.fileDropped.emit(file)
    console.log("drop")
  }
}
