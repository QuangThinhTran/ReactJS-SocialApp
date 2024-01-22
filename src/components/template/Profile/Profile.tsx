import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Blog from '../../origanism/Blog';
import Container from '../../origanism/Container';

interface Profile {
  name: string,
  email: string,
  description: string,
  followers: number,
}

const Profile = () => {
  return (
    <Container>
      <div className={style['profile']}>
        <div className={style['profile_container'] + ' card'}>
          <div className={style['profile_content']}>
            <div className={style['profile_user']}>
              <img style={{ width: 150 }} src="https://api.dicebear.com/6.x/fun-emoji/svg?seed=Mario" alt="Mario Avatar" />
              <div>
                <a href="#"><h4> Mario</h4></a>
                <p>@mario</p>
              </div>
            </div>
            <div className={style['profile_infor']}>
              <h4>About :</h4>
              <p>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
              <div className={style['profile_infor--icon']}>
                <FontAwesomeIcon icon={faUser} className={style['iconStyle']} /> <p>120 Folowers</p>
              </div>
              <button className='btn-submit'>Follow</button>
            </div>
          </div>
        </div>
        <Blog />
      </div>
    </Container>
  )
}

export default Profile
