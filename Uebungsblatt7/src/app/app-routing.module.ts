import { ArtikelEditorComponent } from './artikel-editor/artikel-editor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtikelListeComponent } from '../app/artikel-liste/artikel-liste.component';
import { ImpressumComponent } from '../app/impressum/impressum.component';
import { KontaktComponent } from '../app/kontakt/kontakt.component';
import { ArtikelComponent } from '../app/artikel/artikel.component';
import { NeuenArtikelErstellenComponent } from './neuen-artikel-erstellen/neuen-artikel-erstellen.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
	{ path: '', component: ArtikelListeComponent },
	{ path: 'articles', component: ArtikelListeComponent },
	{ path: 'impressum', component: ImpressumComponent },
	{ path: 'kontakt', component: KontaktComponent },
	{ path: 'article', component: ArtikelComponent },
	{ path: 'artikel/:id', component: ArtikelComponent },
	{ path: 'neuerArtikel', component: NeuenArtikelErstellenComponent },
	{ path: 'artikelBearbeiten/:id', component: ArtikelEditorComponent },
	{ path: 'tags', component: TagsComponent },
	{ path: '**', component: ArtikelListeComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
