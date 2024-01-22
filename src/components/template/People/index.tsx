import Account from "../../origanism/Account"
import Container from "../../origanism/Container"
import style from './index.module.scss'

const People = () => {
    return (
        <Container>
            <hr />
            <h4>People</h4>
            <div className={style['account']}>
                <div className={style['account_container']}>
                    <Account />
                    <Account />
                </div>
            </div>
        </Container>
    )
}

export default People
