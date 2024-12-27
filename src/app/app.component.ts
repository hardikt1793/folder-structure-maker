import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NodeModel } from './model/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  folderName = new FormControl('', [Validators.required]);

  // store the tree structure data
  folderStructureData: NodeModel[] = [];

  // it is use to hide or show add folder section in root
  showHideFolderSection = false;

  /**
   * It's for checking form validation and push new data.
   * 
   */
  addFolderToRoot() {
    if (this.folderName.invalid) {
      this.folderName.markAsTouched();
      return;
    }
    
    this.folderStructureData.push({
      type: 'folder',
      name: this.folderName.value,
      children: [],
      id: Math.random().toString(36).substring(2, 9),
    })

    this.folderName.reset();

    this.showHideFolderSection = !this.showHideFolderSection;
  }
}
