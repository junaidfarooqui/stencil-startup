import { Component, Element, Prop, State, Watch } from '@stencil/core';
import { Store } from "@stencil/redux";

@Component({
  tag: 'app-home',
})
export class AppHome {
    @Element() el: HTMLElement

    @Prop({ context: 'store' }) store: Store
    @State() books: Array<any>

    @Watch('books')
    updateList() {
        this.el.querySelector('books-list').books = this.books
    }

    componentDidLoad() {
        const { mapStateToProps } = this.store

        mapStateToProps(this, state => {
            return {
                books: state.books.items
            }
        })
    }
  render() {
    return (
      <div class='app-home'>
          <p>
              Welcome stencil Training section.
          </p>

        <stencil-route-link url='/profile/junaid-farooqui'>
          <button>Profile page</button>
        </stencil-route-link>
          <stencil-route-link url='/saved'><button>My Books</button></stencil-route-link>

          <search-box></search-box>
          <books-list></books-list>
      </div>
    );
  }
}
