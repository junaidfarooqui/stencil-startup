import {Component, State} from "@stencil/core";

@Component({
    tag: 'search-box',
    styleUrl: 'search-box.scss'
})

export class SearchBox {
    @State() value: string = ''

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