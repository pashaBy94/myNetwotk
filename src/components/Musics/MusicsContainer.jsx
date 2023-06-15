import React from "react";
import { connect } from "react-redux";
import Musics from "./Musics";
import { compose } from "redux";
import Preloader from "./../general/Preloader/Preloader";
import { getSuperCurrentProfile, getListMusics } from "../../redux/selectors.ts";

class MusicsContainer extends React.Component {
    componentDidMount() {

    }
    componentDidUpdate(prevProp) {

    }
    render() {
        if (!this.props.listMusics) return <Preloader />
        return (<Musics listMusics={this.props.listMusics} />)
    }
}

const mapStateToProp = state => ({
    listMusics: getListMusics(state),
    listTest: getSuperCurrentProfile(state),
});

export default compose(
    connect(mapStateToProp, {})
)(MusicsContainer)