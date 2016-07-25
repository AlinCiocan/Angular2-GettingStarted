import { Injectable } from '@angular/core';
import { MovieModel } from "./movie.model";

@Injectable()
export class MoviesService {
    constructor() { }

    public getMovies() {
        return [
            new MovieModel("Hercules"),
            new MovieModel("Django"),
            new MovieModel("Finding Nemo")
        ];
    }
}