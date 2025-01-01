import { Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { NodeModel } from "../model/node.model";

@Component({
  selector: "app-tree-item",
  templateUrl: "./tree-item.component.html",
  styleUrls: ["./tree-item.component.scss"],
})
export class TreeItemComponent {
  // This is to Get child tree structure from parent component
  @Input() children!: NodeModel[];

  // to track the entering name control
  folderName = new FormControl("", [Validators.required]);

  /**
   * Adding new item to the children array.
   *
   * @param item - Item object
   */
  addChild(item: NodeModel): void {
    item.children?.push({
      type: "unset",
      name: "",
      children: [],
      id: Math.random().toString(36).substring(2, 9),
    });
  }

  /**
   * It's for checking form validation and add item name.
   *
   * @param item - Item object
   */
  addName(item: NodeModel): void {
    if (this.folderName.invalid) {
      this.folderName.markAsTouched();
      return;
    }
    item["name"] = this.folderName.value;
    this.folderName.reset();
  }

  /**
   * It's to delete item from children array.
   *
   * @param children - Items array
   * @param index - Item index
   */
  deleteChild(children: NodeModel[], index: number): void {
    children.splice(index, 1);
  }
}
