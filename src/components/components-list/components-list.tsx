import { Component } from '@stencil/core';

@Component({
    tag: 'components-list',
    styleUrl: 'components-list.css',
})

export class ComponentsList {

    render () {
        return (
            <div class="container">
                <h4>Components build on stencils Js</h4>
                <div class="col-4 mt-4">
                    <h4>Calender:</h4>
                    <calendar-input></calendar-input>
                </div>
            </div>
        )
    }
}