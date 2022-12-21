import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { CardComponent } from './cvTech/card/card.component';
import { ListeComponent } from './cvTech/liste/liste.component';
import { DetailCVComponent } from './cvTech/detail-cv/detail-cv.component';
import { ItemComponent } from './cvTech/item/item.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClasseComponent } from './directive/classe/classe.component';
import { HighlightDirective } from './directive/highlight.directive';
import RainbowDirective from './directive/rainbow.directive';
import { StructurelleComponent } from './directive/structurelle/structurelle.component';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './cvTech/error/error.component';
import { AuthComponent } from './cvTech/auth/auth.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    GrandChildComponent,
    ColorComponent,
    FilsComponent,
    CardComponent,
    ListeComponent,
    DetailCVComponent,
    ItemComponent,
    CvComponent,
    StyleComponent,
    ClasseComponent,
    HighlightDirective,
    RainbowDirective,
    StructurelleComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
    AddCvComponent,
    DeleteCvComponent,
    ErrorComponent,
    AuthComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
