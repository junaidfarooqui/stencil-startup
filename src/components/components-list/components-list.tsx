import { Component } from '@stencil/core';

@Component({
    tag: 'components-list',
    styleUrl: 'components-list.css',
})

export class ComponentsList {

    render () {
        return (
            <div class="container">
                <p>Components build on stencils</p>
                <h3>Calender:</h3>
                <calendar-input></calendar-input>
            </div>
        )
    }
}