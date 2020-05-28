import * as React from "react";
import styles from './NavMenu.module.css';
import {connect} from "react-redux";
import {actions, ActionsType} from "../../../redux-store/actions";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux-store/store";
import Menu from "./Menu";

function NavMenu(props: PropsType) {
    let width = window.innerWidth
    if (width > 480) {
        return <Menu/>
    } else return (
        <>
            {
                props.navMenu ?
                    <Menu highNavMenu={props.highNavMenu}/>
                    :
                    <div className={styles.burgerMenu} onClick={props.showNavMenu}>
                        <div className={styles.menu}/>
                        <div className={styles.menu}/>
                        <div className={styles.menu}/>
                    </div>}
        </>

    );
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        navMenu: state.navMenu.navMenu
    };
};

let mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => {
    return {
        showNavMenu: () => {
            dispatch(actions.showNavMenu());
        },
        highNavMenu: () => {
            dispatch(actions.highNavMenu());
        }
    };
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, ownProps, AppStateType>(mapStateToProps, mapDispatchToProps)(NavMenu);


type PropsType = mapDispatchToPropsType & mapStateToPropsType & ownProps

type DispatchType = Dispatch<ActionsType>

type mapDispatchToPropsType = {
    showNavMenu: () => void
    highNavMenu: () => void
}
type mapStateToPropsType = {
    navMenu: boolean
}

type ownProps = {}