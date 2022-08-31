import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// REDUX
import { StoreModule } from '@ngrx/store';
import { reducer } from '../redux/reducer'
import { postReducer } from 'src/redux/postReducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      message: reducer,
      post: postReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
