import {Component, Prop, State} from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { searchBooks } from "../../store/actions";

@Component({
    tag: 'search-box',
    styleUrl: 'search-box.scss'
})

export class SearchBox {
    @Prop({ context: 'store' }) store: Store;
    @State() value: string = '';

    searchBooks: Action;

    componentWillLoad () {
        const { mapDispatchToProps } = this.store;

        mapDispatchToProps(this, {
            searchBooks
        })
    }

    render() {
        return (
            <div>
                <input value={this.value} onInput={this.handleChange} />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }

    handleChange = e => {
        this.value = e.target.value
    }

    search = () => {
        const value = this.value.trim()
        if (value) {
            // call API
        } else {
            alert('Please enter at least 1 character')
        }
    }
}