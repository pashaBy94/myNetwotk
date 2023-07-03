import React from "react";
import { connect } from "react-redux";
import Musics from "./Musics";
import { compose } from "redux";
import Preloader from "../general/Preloader/Preloader";
import { GlobalStateType, MusicStateType } from "../../typeAndInterface/typeAndInterface";
import { getListMusics } from "../../redux/selectors";


class MusicsContainer extends React.Component<MusicStateType> {
    render() {
        if (!this.props.listMusics) return <Preloader />
        return (<Musics listMusics={this.props.listMusics} />)
    }
}

const mapStateToProp = (state: GlobalStateType): MusicStateType => ({
    listMusics: getListMusics(state),
});

export default compose(
    connect(mapStateToProp, {})
)(MusicsContainer)