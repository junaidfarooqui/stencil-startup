import '@stencil/router';
import { Component, Prop } from '@stencil/core';
import { Store } from '@stencil/redux'
import { configureStore } from '../../store/index'


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @Prop({ context: 'store' }) store: Store

  componentWillLoad() {
    this.store.setStore(configureStore({}))
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/' component='saved-books' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/view/:name' component='user-information' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
