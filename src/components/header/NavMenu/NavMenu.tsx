import * as React from "react";
import styles from './NavMenu.module.css';
import {connect} from "react-redux";
import {actions, ActionsType} from "../../../redux-store/actions";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux-store/store";
import Menu from "./Menu";

function NavMenu(props: PropsType) {

    const styleNav = props.navMenu ? styles.nav : styles.navShow
    return (
        <div>
            {props.navMenu ?
                <div className={styles.n}>
                    <div className={styles.nav}>
                        <li className={styles.link}><a href='/'>Main</a></li>
                        <li className={styles.link}><a href='/'>Skills</a></li>
                        <li className={styles.link}><a href='/'>Projects</a></li>
                        <li className={styles.link}><a href='/'>Contacts</a></li>
                    </div>
                    <div className={styles.high} onClick={props.highNavMenu}>x</div>
                </div>
                :
                <div className={styles.burgerMenu} onClick={props.showNavMenu}>
                    <div className={styles.menu}/>
                    <div className={styles.menu}/>
                    <div className={styles.menu}/>
                </div>}

        </div>

    );
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        navMenu: state.navMenu.navMenu,
        burger: state.navMenu.burger
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
    burger: boolean
}

type ownProps = {}