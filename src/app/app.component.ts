import { Component, OnInit } from "@angular/core";
import { MovieComponent, MoviesComponent, MoviesService, MovieModel } from "./movie/index";


@Component({
    selector: "app-component",
    templateUrl: "app/app.component.html",
    directives: [MovieComponent, MoviesComponent],
    providers: [MoviesService]
})
export class AppComponent implements OnInit {
    
    
    
    constructor(private _moviesService: MoviesService) { 

        
    }

    ngOnInit() { 
        var movies = this._moviesService.getMovies();
        console.log(movies);
    }

}