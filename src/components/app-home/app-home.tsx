import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
})
export class AppHome {
  render() {
    return (
      <div class='app-home'>
          <p>
              Welcome stencil Training section.
          </p>

          <stencil-route-link url='/profile/junaid-farooqui'><button>Profile page</button></stencil-route-link>
          <stencil-route-link url='/library/'><button>Book Shop</button></stencil-route-link>
      </div>
    );
  }
}
