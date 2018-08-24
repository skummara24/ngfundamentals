// tslint:disable-next-line:semicolon
import { Component } from '@angular/core'

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
<event-thumbnail [event] = "event1"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '8/23/2018',
        time: '4:02 pm',
        price: '599.99',
        imgUrl: '/assets/images/angularconnect/-shield.png',
        location: {
        address: '1057 DT',
        city: 'London',
        country: 'England',
        }

    };

}
