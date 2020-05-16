import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//bootstrap
import {CollapseModule} from 'ngx-bootstrap/collapse';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//my components
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component';
import { TechComponent } from './tech/tech.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { CertificationsComponent } from './certifications/certifications.component';

var firebaseConfig = {
  apiKey: "AIzaSyBEvqJcMmISacUt4FSYf5xYLyRY4sd_2Sw",
  authDomain: "portfolioproject-66d22.firebaseapp.com",
  databaseURL: "https://portfolioproject-66d22.firebaseio.com",
  projectId: "portfolioproject-66d22",
  storageBucket: "portfolioproject-66d22.appspot.com",
  messagingSenderId: "511874029345"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    FooterComponent,
    ContactComponent,
    TechComponent,
    CertificatesComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
