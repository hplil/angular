import { NgModule } from "@angular/core";
import { AppComponentDemo } from "./app.componentDemo";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponentDemo],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponentDemo]
})
export class AppModuleDemo { }
