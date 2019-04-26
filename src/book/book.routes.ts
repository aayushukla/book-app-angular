import { Routes } from "@angular/router";
import { BookDetailsComponent } from './book-details.component';
import { BookListComponent } from './book-list.componenet';

export const bookRoutes: Routes = [
    {path:"books/:category",component: BookListComponent},
    {path: "book/:bookid", component: BookDetailsComponent}

];




























