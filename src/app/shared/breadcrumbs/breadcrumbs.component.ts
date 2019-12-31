import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.getDataRoute().subscribe(data => {
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: data.description
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {}

  getDataRoute(): Observable<any> {
    return this.router.events.pipe(
      // Filtramos los eventos de tipo ActivationEnd
      filter(event => event instanceof ActivationEnd),
      // Filtramos los eventos ActivationEnd con firstChild nulo
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      // Obtenemos la configuración de las rutas de los eventos antes filtrados
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
