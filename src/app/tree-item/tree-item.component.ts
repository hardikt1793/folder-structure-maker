import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NodeModel } from '../model/node.model';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent implements OnInit {
  // This is to Get child tree structure from parent component
  @Input() children: any;

  folderName = new FormControl('', [Validators.required]);
    
  constructor() { 
  }

  ngOnInit(): void {
  }

  /**
   * Adding new item to the children array.
   * 
   * @param item - Item object
   */
  addChild(item: NodeModel) {
    return item.children?.push({
      type: 'unset',
      name: '',
      children: [],
      id: Math.random().toString(36).substring(2, 9),
    });
  }

  /**
   * It's for checking form validation and add item name.
   * 
   * @param item - Item object
   */
  addName(item: NodeModel) {
    if (this.folderName.invalid) {
      this.folderName.markAsTouched();
      return;
    }
    
    item['name'] = this.folderName.value;

    this.folderName.reset();

    return item;
  }

  /**
   * It's to delete item from children array.
   * 
   * @param children - Items array
   * @param index - Item index
   */
  deleteChild(children: NodeModel[], index: number) {
    children.splice(index, 1);

    return children;
  }
}
