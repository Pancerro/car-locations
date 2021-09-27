import {ActiveGuard} from "./shared/guard/active.guard";
import {Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'map-poi';
  constructor(private guard: ActiveGuard,
              private router: Router) {
  }
  ngOnInit() {
    if (!this.guard.getActive()) {
      this.router.navigate(['/home'])
    }
  }
}

