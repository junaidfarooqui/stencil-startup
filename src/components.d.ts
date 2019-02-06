/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import '@stencil/redux';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface BooksList {
    'books': Array<any>;
  }
  interface BooksListAttributes extends StencilHTMLAttributes {
    'books'?: Array<any>;
  }

  interface SavedBooks {}
  interface SavedBooksAttributes extends StencilHTMLAttributes {}

  interface SearchBox {}
  interface SearchBoxAttributes extends StencilHTMLAttributes {}

  interface UserInformation {
    'match': MatchResults;
  }
  interface UserInformationAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'BooksList': Components.BooksList;
    'SavedBooks': Components.SavedBooks;
    'SearchBox': Components.SearchBox;
    'UserInformation': Components.UserInformation;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'books-list': Components.BooksListAttributes;
    'saved-books': Components.SavedBooksAttributes;
    'search-box': Components.SearchBoxAttributes;
    'user-information': Components.UserInformationAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLBooksListElement extends Components.BooksList, HTMLStencilElement {}
  var HTMLBooksListElement: {
    prototype: HTMLBooksListElement;
    new (): HTMLBooksListElement;
  };

  interface HTMLSavedBooksElement extends Components.SavedBooks, HTMLStencilElement {}
  var HTMLSavedBooksElement: {
    prototype: HTMLSavedBooksElement;
    new (): HTMLSavedBooksElement;
  };

  interface HTMLSearchBoxElement extends Components.SearchBox, HTMLStencilElement {}
  var HTMLSearchBoxElement: {
    prototype: HTMLSearchBoxElement;
    new (): HTMLSearchBoxElement;
  };

  interface HTMLUserInformationElement extends Components.UserInformation, HTMLStencilElement {}
  var HTMLUserInformationElement: {
    prototype: HTMLUserInformationElement;
    new (): HTMLUserInformationElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'books-list': HTMLBooksListElement
    'saved-books': HTMLSavedBooksElement
    'search-box': HTMLSearchBoxElement
    'user-information': HTMLUserInformationElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'books-list': HTMLBooksListElement;
    'saved-books': HTMLSavedBooksElement;
    'search-box': HTMLSearchBoxElement;
    'user-information': HTMLUserInformationElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
