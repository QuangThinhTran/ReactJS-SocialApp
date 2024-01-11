import Account from "../../origanism/Account"
import style from './index.module.scss'

const People = () => {
    return (
        <div className='home_container'>
            <hr />
            <h4>People</h4>
            <div className={style['account']}>
                <div className={style['account_container']}>
                    <Account />
                    <Account />
                </div>
            </div>
        </div>
    )
}

export default People
