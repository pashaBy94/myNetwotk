import React from "react";
import CrossOrZero from "./CrossOrZero";
import { compose } from "redux";
import { connect } from "react-redux";
import { setCurrentMove, setCombinationRed, setCombinationBlue, crossOrZeroExamination, setNewGameCrossOrZero, setNameRed, setNameBlue } from "../../../redux/gamesReducer.ts";
import { getCountMove, getCurrentMove, getCombinationRed, getCombinationBlue, getCurrentVictoriCrossOrZero, getVictoriRed, getVictoriBlue, getNameBlue, getNameRed } from "../../../redux/selectors";

class CrossOrZeroContainer extends React.Component{
    render(){
        return(
            <CrossOrZero 
            setCurrentMove={this.props.setCurrentMove}
            countMove={this.props.countMove}
            currentMove={this.props.currentMove}
            setCombinationRed={this.props.setCombinationRed}
            setCombinationBlue={this.props.setCombinationBlue}
            combinationRed={this.props.combinationRed}
            combinationBlue={this.props.combinationBlue}
            examination={this.props.crossOrZeroExamination}
            currentVictori={this.props.currentVictori}
            crossOrZeroExamination={this.props.crossOrZeroExamination}
            setNewGameCrossOrZero={this.props.setNewGameCrossOrZero}
            victoriRed={this.props.victoriRed}
            victoriBlue={this.props.victoriBlue}
            setNameRed={this.props.setNameRed}
            setNameBlue={this.props.setNameBlue}
            nameRed={this.props.nameRed}
            nameBlue={this.props.nameBlue}
            />
            )
        }
    }

const mapStateToProps = state => ({
    countMove: getCountMove(state),
    currentMove: getCurrentMove(state),
    combinationRed: getCombinationRed(state),
    combinationBlue: getCombinationBlue(state),
    currentVictori: getCurrentVictoriCrossOrZero(state),
    victoriRed: getVictoriRed(state),
    victoriBlue: getVictoriBlue(state),
    nameRed: getNameRed(state),
    nameBlue: getNameBlue(state)
    });

export default compose(connect(mapStateToProps, {setCurrentMove, setCombinationRed, setCombinationBlue, crossOrZeroExamination, setNewGameCrossOrZero, setNameRed, setNameBlue}))(CrossOrZeroContainer) 
