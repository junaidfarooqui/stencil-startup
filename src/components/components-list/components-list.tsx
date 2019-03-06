import { Component } from '@stencil/core';

@Component({
    tag: 'components-list',
    styleUrl: 'components-list.css',
})

export class ComponentsList {

    render () {
        return (
            <div class="container">
                <p>Components build on stencils Js</p>
                <div class="col-4">
                    <h4>Calender:</h4>
                    <calendar-input></calendar-input>
                </div>
            </div>
        )
    }
}