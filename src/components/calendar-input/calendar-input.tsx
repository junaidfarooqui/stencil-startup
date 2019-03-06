import { Component } from '@stencil/core'
import flatpickr from "flatpickr";

@Component({
    tag: 'calendar-input',
    styleUrl: 'calendar-input.css',
})

export class CalendarInput {

    private dateTime?: HTMLInputElement;

    componentDidLoad() {
        flatpickr(this.dateTime, {
            enableTime: true,
            dateFormat: "Y-m-dTH:i",
        });
    }

    render() {
        return (
        <div class="calendar">
            <input ref={el => this.dateTime = el as HTMLInputElement} class="form-control dt-picker" type="text" placeholder="Select Date.." data-id="datetime" readonly="readonly" />
        </div>
        )
    }
}