import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { MovieModel } from './movie.model';

@Component({
    moduleId: module.id,
    selector: 'movies-list',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent implements OnInit {
    private _movies : MovieModel[];
    
    
    constructor(private _moviesService: MoviesService) { }

    ngOnInit() { 
        this._movies = this._moviesService.getMovies();
    }

}