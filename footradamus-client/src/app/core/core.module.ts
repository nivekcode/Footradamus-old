/**
 * Created by kevinkreuzer on 18.02.17.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import NavbarComponent from "./navbar/navabar.component";

@NgModule({
  imports: [RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export default class CoreModule{

}
