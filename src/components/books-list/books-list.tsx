import {Component, Prop} from "@stencil/core";

@Component({
    tag: 'books-list',
    styleUrl: 'books-list.scss'
})

export class BooksList {
    @Prop() books: Array<any> = []

    render() {
        const { book } = this

        return (
            <ul>
                
            </ul>
        )
    }
}