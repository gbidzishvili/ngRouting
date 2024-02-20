import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-inner',
  templateUrl: './gallery-inner.component.html',
  styleUrl: './gallery-inner.component.css',
})
export class GalleryInnerComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    let date = this.activatedRoute.snapshot.params['date'];
  }
}
