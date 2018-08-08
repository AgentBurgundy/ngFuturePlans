import { Routes } from "../../node_modules/@angular/router";

// Components
import { HomeComponent } from "./pages/home/home.component";
import { PagenotfoundComponent } from "./pages/pagenotfound/pagenotfound.component";
import { AboutComponent } from "./pages/about/about.component";
import { HowItWorksComponent } from "./pages/how-it-works/how-it-works.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { SignupComponent } from "./pages/signup/signup.component";

export const appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'how-it-works', component: HowItWorksComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent}
];