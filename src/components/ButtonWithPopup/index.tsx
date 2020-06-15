import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IRootAction, IRootState } from "../../store/rootReducer";
import * as authActions from "../../store/auth/actions";

import style from './style.module.css'
import userAvatar from '../../img/user_avatar.png'

const mapStateToProps = (state: IRootState) =>
 ({
  nick: state.user.userData.nick,
  login: state.user.userData.login,
  avatar: state.user.userData.avatar ? `http://chat.fs.a-level.com.ua/${state.user.userData.avatar.url}` : userAvatar,
});

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      logout: authActions.logout,
    },
    dispatch
  );

type ButtonWithPopupProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

interface State {
  isOpenedPopup: boolean
  isAvatarUpload: boolean
}

class ButtonWithPopup extends React.PureComponent<ButtonWithPopupProps> {

  state = {
    isOpenedPopup: false,
    isAvatarUpload: false
  };

  myRef = React.createRef<HTMLDivElement>()

  closePopup = (event: any) => {
    if (this.myRef.current && !(this.myRef.current.contains(event.target))) {
      this.setState({
        isOpenedPopup: false
      })
    }
  };

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.isOpenedPopup === this.state.isOpenedPopup) {
      return;
    }
    if (this.state.isOpenedPopup) {
      document.addEventListener("click", this.closePopup);
    } else {
      document.removeEventListener("click", this.closePopup);
    }
  }

  togglePopup = () => {
    this.setState({
      isOpenedPopup: !this.state.isOpenedPopup
    })
  }

  logoutHandler = () => {
    this.props.logout()
  }

  render() {
    const { isOpenedPopup, isAvatarUpload } = this.state;
    return (
      <div className={style.buttonWithPopup}>
        <button onClick={this.togglePopup} className={style.navOpener}>
          <FontAwesomeIcon icon="bars" />
        </button>
        {isOpenedPopup &&
          <div ref={this.myRef} className={style.popup}>
            <div className={style.popupHeader}>
              <img src={this.props.avatar} />
              <p>{ this.props.nick || this.props.login}</p>
            </div>
            <nav className={style.navSidebar}>
              <ul className={style.navList}>
                <li
                  className={style.navItem}
                >
                  <Link to="/new_group">
                    <FontAwesomeIcon icon="comments" />
                    New group
                  </Link>
                </li>
                <li
                  className={style.navItem}
                >
                  <Link to="/settings">
                    <FontAwesomeIcon icon="cogs" />
                    Settings
                  </Link>
                </li>
                <li 
                  className={style.navItem}
                  onClick={() => this.logoutHandler()}
                >
                  <FontAwesomeIcon icon="sign-out-alt" />
                  Exit
                </li>
              </ul>
            </nav>
          </div>
        }
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonWithPopup);