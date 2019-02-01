import {Component, Prop} from '@stencil/core';
import {MatchResults} from "@stencil/router";

@Component({
    tag: 'user-information',
    styleUrl: 'user-information.css',
    shadow: true
})

export class UserInformation {
    @Prop() match: MatchResults;

    normalize(name: string): string {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    }

    render () {
        return (
            <div class="user-information">
                <p>
                    Hello! This information is for {this.normalize(this.match.params.name)}. and passed through route.
                </p>
            </div>
        )
    }
}