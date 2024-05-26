import { Component} from "@angular/core";

@Component({
    selector: 'app-header', //selector reveals whether the comp is a parent of a child, in this case its child comp
    standalone: true,

    templateUrl: './header.component.html', //contains markup of the child comp
    styleUrl: './header.component.css'

})




export class HeaderComponent {}