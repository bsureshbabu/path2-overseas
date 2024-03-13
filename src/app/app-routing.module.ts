import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApplicationGuidanceComponent } from './application-guidance/application-guidance.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './index/index.component';
import { TestPrepartionGreCoachingComponent } from './test-prepartion-gre-coaching/test-prepartion-gre-coaching.component';
import { TestPrepartionIELTSCoachingComponent } from './test-prepartion-ielts-coaching/test-prepartion-ielts-coaching.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'guidance', component: ApplicationGuidanceComponent },
  { path: 'test-prepartion-gre-coaching',component: TestPrepartionGreCoachingComponent },
  { path: 'test-prepartion-ielts-coaching', component: TestPrepartionIELTSCoachingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'  // scroll to top when route changed
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

