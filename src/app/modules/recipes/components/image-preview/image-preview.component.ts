import {Component, Input, OnInit} from '@angular/core';
import {urls} from "../../../../contants";

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  @Input()
  imageName: string;
  @Input()
  isBigSize: boolean;

  imagePath: string = urls.recipeImage;

  constructor() {}

  ngOnInit(): void {
      this.imagePath = this.imagePath+this.imageName;
    console.log(this.isBigSize);
    console.log(this.imageName);
  }

}
