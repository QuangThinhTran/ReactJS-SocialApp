import React from "react";
import { USER } from "../../../common/enums/route";
import { useAuth } from "../../../common/hooks/useAuth";
import useFetch from "../../../common/hooks/useFetch";
import Account from "../../origanism/Account"
import Container from "../../origanism/Container"
import style from './index.module.scss'

type IPeople = {
    name?: string;
    email?: string;
}

const People:React.FC<IPeople> = ({...props}) => {

    const { username } = useAuth();

    const { data, error } = useFetch(USER.GET + '?username=' + username);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Container>
            <hr />
            <h4>People</h4>
            <div className={style['account']}>
                <div className={style['account_container']}>
                {
                    data?.map((user: any) => (
                        <Account key={user.id} {...user} />
                    ))
                }
                </div>
            </div>
        </Container>
    )
}

export default People
