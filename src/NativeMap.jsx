import { Component, createElement } from "react";

import PolygonCreator from "./components/PolygonCreator";

export class NativeMap extends Component {
    render() {
        return (
            <PolygonCreator
                latitude={this.props.yourLatitude.value}
                longitude={this.props.yourLongitude.value}
                latitudeDelta={this.props.yourLatitudeDelta.value}
            />
        );
    }
}
