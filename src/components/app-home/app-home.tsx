import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
})
export class AppHome {
  render() {
    return (
        <div class="container">
          <p>
              Welcome stencil Training section.
          </p>

          <stencil-route-link class="btn btn-primary mr-2" url='/profile/junaid-farooqui'>Profile page</stencil-route-link>
          <stencil-route-link class="btn btn-primary mr-2" url='/library/'>Book Shop</stencil-route-link>
          <stencil-route-link class="btn btn-primary mr-2" url='/components/'>Components List</stencil-route-link>
      </div>
    );
  }
}
