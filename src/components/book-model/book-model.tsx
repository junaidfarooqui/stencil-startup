import { Component, Element, Prop, State, Watch } from '@stencil/core';
import { Store } from "@stencil/redux";

@Component({
    tag: 'book-model',
})

export class BookModel {
    @Element() el: HTMLElement;

    @Prop({ context: 'store' }) store: Store;
    @State() books: Array<any>;

    @Watch('books')
    updateList() {
        this.el.querySelector('books-list').books = this.books
    }

    componentDidLoad() {
        const { mapStateToProps } = this.store;

        mapStateToProps(this, state => {
            return {
                books: state.books.items
            }
        })
    }

    render() {
        return (
            <div class="container">
                <p>
                    Welcome to Book Section, you can find all books here. Please type book name which you looking for.
                </p>
                <stencil-route-link url='/saved'><button>My Books</button></stencil-route-link>
                <search-box></search-box>
                <books-list></books-list>
            </div>
        );
    }
}