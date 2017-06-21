import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TodoListComponent } from './todoList.component';
import { DisplayGroupComponent } from './displayGroup.component';

import { StateFilterPipe } from './shared/state-filter.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    DisplayGroupComponent,
    StateFilterPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
