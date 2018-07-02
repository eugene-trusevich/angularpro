import {
  Component,
  ComponentFactoryResolver, ContentChild,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DataService} from '../common/services/data.service';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';
import {Child3Component} from './child3/child3.component';
import {Child4Component} from './child4/child4.component';
import {Child5Component} from './child5/child5.component';
import {HostDirective} from '../common/directives/host.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(HostDirective) host: HostDirective;

  public widgets: Array<any> = [];
  public loading: boolean = false;

  private entryComponentsMap: any = {
    'child1': Child1Component,
    'child2': Child2Component,
    'child3': Child3Component,
    'child4': Child4Component,
    'child5': Child5Component
  };

  constructor(
    private _dataService: DataService,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _view: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.getWidgetsRequest();
  }

  getWidgetsRequest() {
    this.loading = true;
    this._dataService.getWidgets().subscribe((widgets) => {
      this.widgets = widgets;
      this.loading = false;

      widgets.map(widget => {
        let factory = this._componentFactoryResolver.resolveComponentFactory(this.entryComponentsMap[widget.name]);
        this.host._view.createComponent(factory);
      });


    });
  }

}
