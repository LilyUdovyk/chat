import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import { IRootAction, IRootState } from "../../store/rootReducer";
import * as mediaActions from "../../store/media/actions";
import * as userActions from "../../store/user/actions";

import style from './style.module.css'
import userAvatar from '../../img/user_avatar.png'

const mapStateToProps = (state: IRootState) =>
 ({
  activeUserId: state.auth.authData.id,
  avatar: state.user.userData.avatar ? `http://chat.fs.a-level.com.ua/${state.user.userData.avatar.url}` : userAvatar,
  imageId: state.media.fileData._id,
  imageUrl: `http://chat.fs.a-level.com.ua/${state.media.fileData.url}`
});

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      uploadAvatar: mediaActions.uploadFile.request,
      updateUser: userActions.updateUser.request,
    },
    dispatch
  );

type SettingsProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const Settings: React.FC<SettingsProps> = props => {
  const [nick, setNick] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const uploadRef = React.useRef<HTMLFormElement>(null);
  
  const settingsHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.updateUser({ user_id: props.activeUserId, image_id: props.imageId, nick, login, password })
  }

  const uploadAvatar = (form: HTMLFormElement) => {
    props.uploadAvatar(form)
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.header}>
          <h2>User's Settings</h2>
        </div>
        <form action="" onSubmit={settingsHandler} id="form" className={style.form}>
          <div className={style.avatarBlock}>
            <img src={props.imageId ? props.imageUrl : props.avatar} />
            <form className={style.uploadForm}
              ref={uploadRef}
              method="post"
              action='/upload'
              encType="multipart/form-data"
              id="form"
            >
            <div className={style.uploadBtnWrapper}>
                <button className={style.changeButton}>
                  Change avatar
                </button>
                <input
                  className={style.uploadInput}
                  type="file"
                  name="media"
                  id="media"
                  onChange={() => { if (uploadRef.current) uploadAvatar(uploadRef.current) }}
                />
              </div>
            </form>
          </div>  
          <div className={style.formControl}>
            <label htmlFor="login">Change login</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="nick">Change nick</label>
            <input
              type="text"
              id="nick"
              value={nick}
              onChange={e => setNick(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="password">Change password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className={style.buttonBlock}>
            <button type="submit" className={style.submitBtn}>Save</button>
            <button className={style.submitBtn}>
              <Link to="/profile">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Settings));