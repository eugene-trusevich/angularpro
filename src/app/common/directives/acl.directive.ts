import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from '../services/user.service';

@Directive({
  selector: '[acl]'
})
export class AclDirective implements OnInit {

  @Input() acl: string;

  constructor(
    private _userService: UserService,
    private _view: ViewContainerRef,
    private _template: TemplateRef<ElementRef>,
  ) {

  }

  ngOnInit() {
    this.checkUserRole(this.acl);
  }

  checkUserRole(userRole: string) {
    if (!userRole) {
      return false;
    }

    let aclRoleArray = userRole.split(',');

    this._userService.getUserRole().subscribe(userRole => {

      let include = aclRoleArray.includes(userRole);

      if(include){
        this._view.createEmbeddedView(this._template)
      }
    });
  }

}
