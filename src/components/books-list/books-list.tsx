import {Component, Prop} from "@stencil/core";

@Component({
    tag: 'books-list',
    styleUrl: 'books-list.scss'
})

export class BooksList {
    @Prop() books: Array<any> = [];

    render() {
        const { books } = this;

        return (
            <ul>
                {books.map(book => {
                    const {previewLink, title, imageLinks, authors} = book.volumeInfo;
                    const thumbnail = imageLinks ? imageLinks.thumbnail : '';
                    const _authors = authors ? authors.join(', ') : 'unknown';

                    return (
                        <li>
                            <a href={previewLink} target='__blank'></a>
                            <img src={thumbnail} class='cover'/>
                            <div class='info'>
                                <div class='title'>{title}</div>
                                <div class='authors'>{_authors}</div>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        )
    }
}