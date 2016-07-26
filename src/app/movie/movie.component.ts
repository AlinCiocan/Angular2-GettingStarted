import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.component.html'
})
export class MovieComponent implements OnInit {
    constructor(private _moviesService: MoviesService) { }

    ngOnInit() { }

}