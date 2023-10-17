import React from "react";
import CrossOrZero from "./CrossOrZero";
import { compose } from "redux";
import { connect } from "react-redux";
import { actionsGames } from "../../../redux/gamesReducer";
import { getCountMove, getCurrentMove, getCombinationRed, getCombinationBlue, getCurrentVictoriCrossOrZero, getVictoriRed, getVictoriBlue, getNameBlue, getNameRed } from "../../../redux/selectors";
import { GlobalStateType } from "../../../typeAndInterface/typeAndInterface";

type CrossStateType = {
    countMove: number;
    currentMove: string;
    combinationRed: any;
    combinationBlue: any;
    currentVictori: string;
    victoriRed: number;
    victoriBlue: number;
    nameRed: string;
    nameBlue: string;
    examination?: any;
}
type CrossDispatchType = {
    setCurrentMove:any,
    setCombinationRed:any, 
    setCombinationBlue:any, 
    crossOrZeroExamination:any, 
    setNewGameCrossOrZero:any, 
    setNameRed:any, 
    setNameBlue:any
}
type PropType = {};
export type CrossOrZeroType = CrossStateType & CrossDispatchType & PropType;

class CrossOrZeroContainer extends React.Component<CrossOrZeroType>{
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

const mapStateToProps = (state:GlobalStateType) => ({
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
export default compose(connect<CrossStateType, CrossDispatchType, PropType, GlobalStateType>(mapStateToProps, {...actionsGames}))(CrossOrZeroContainer) 
