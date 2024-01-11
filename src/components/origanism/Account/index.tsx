import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
    return (
        <>
            <div className={style['account_item']}>
                <div className={style['account_header']}>
                    <img src="/icon/avatar.svg" alt="" />
                    <div className={style['account_header--item']}>
                        <a href="">TranleQuangThinh</a>
                        <div className={style['account_header--followers']}>
                            <FontAwesomeIcon icon={faUser} />
                            <h5>120 Followers</h5>
                        </div>
                    </div>
                </div>
                <div className={style['account_footer']}>
                    <button>
                        Follow
                    </button>
                </div>
            </div>
            <hr />
        </>

    )
}

export default Account
