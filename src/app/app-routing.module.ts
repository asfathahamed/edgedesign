import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNewComponent } from './home-new/home-new.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { InteriorComponent } from './interior/interior.component';
import { DesignComponent } from './design/design.component';


const routes: Routes = [{
  path: '',
  component: HomeNewComponent
}, {
  path: 'gallery',
  component: GalleryComponent
}, {
  path: 'architecture',
  component: ArchitectureComponent
}, {
  path: 'interior',
  component: InteriorComponent
}, {
  path: 'design',
  component: DesignComponent
}, {
  path: 'contact',
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
