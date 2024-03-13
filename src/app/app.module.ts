import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/components/layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { IndexComponent } from './index/index.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { TestPrepartionGreCoachingComponent } from './test-prepartion-gre-coaching/test-prepartion-gre-coaching.component';
import { BlogComponent } from './blog/blog.component';
import { ApplicationGuidanceComponent } from './application-guidance/application-guidance.component';
import { TestPrepartionIELTSCoachingComponent } from './test-prepartion-ielts-coaching/test-prepartion-ielts-coaching.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactUsComponent,
    AboutComponent,
    TestPrepartionGreCoachingComponent,
    BlogComponent,
    ApplicationGuidanceComponent,
    TestPrepartionIELTSCoachingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
