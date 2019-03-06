import '@stencil/router';
import { Component, Prop } from '@stencil/core';
import { Store } from '@stencil/redux'
import { configureStore } from '../../store/index'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  @Prop({ context: 'store' }) store: Store;
  @Prop({ context: 'isServer' }) private isServer: boolean;


    componentWillLoad() {
        let preloadedState = {}

        if (!this.isServer) {
            preloadedState = {
                books: {
                    items: JSON.parse(localStorage.getItem('items') || '[]'),
                    savedItems: JSON.parse(localStorage.getItem('savedItems') || '[]')
                }
            }
        }
        this.store.setStore(configureStore(preloadedState))
  }

  render() {
    return (
      <div>
        <header class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <h1 class="navbar-brand">Stencil App Starter</h1>
        </header>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/saved' component='saved-books' />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/view/:name' component='user-information' />
              <stencil-route url='/library/' component='book-model' />
              <stencil-route url='/components/' component='components-list' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
