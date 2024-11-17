import React from "react";
import useFetch from "../../../common/hooks/useFetch";
import Account from "../../origanism/Account"
import Container from "../../origanism/Container"
import style from './index.module.scss'

const ResultSearch:React.FC<IPeople> = ({...props}) => {
    const { data, error } = useFetch('search' + '?name=' + props?.name + '&email=' + props?.email);
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Container>
            <hr />
            <h4>People</h4>
            <div className={style.account}>
                <div className={style.account_container}>
                    {data && data.length > 0 ? (
                        data.map((user: any) => <Account key={user.id} {...user} />)
                    ) : (
                        <p>Not Found</p>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default ResultSearch
