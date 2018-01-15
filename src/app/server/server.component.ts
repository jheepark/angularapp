import { Component } from '@angular/core'
//decorator
@Component({
//selector is the html tage wich you're able to use this component with later in our other component templates. The sector must be a string and it should be a unique selector
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus
  }
}
