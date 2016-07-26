import { Injectable } from '@angular/core';
import { MovieModel } from "./movie.model";

@Injectable()
export class MoviesService {
    private _movies: MovieModel[];


    constructor() { 
        this._movies = [
            new MovieModel("Hercules"),
            new MovieModel("Django"),
            new MovieModel("Finding Nemo")
        ];
    }

    public getMovies() {
        return this._movies.slice();
    }


    public addMovie(movie:MovieModel) {
        this._movies.push(movie);
    }
}