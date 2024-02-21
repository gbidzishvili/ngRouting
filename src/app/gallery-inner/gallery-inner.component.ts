import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-gallery-inner',
  templateUrl: './gallery-inner.component.html',
  styleUrl: './gallery-inner.component.css',
})
export class GalleryInnerComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    // let id = this.activatedRoute.snapshot.params['id'];
    // let date = this.activatedRoute.snapshot.params['date'];
    // console.log(this.activatedRoute.snapshot.params, id, date);
    this.activatedRoute.params.subscribe((response) => {
      let id = response['id'];
      let date = response['date'];
      console.log(id, date);
    });
  }
  goToTrainsInnerPage() {
    this.router.navigate(['gallery-inner', 'train', 2024]);
  }
}
