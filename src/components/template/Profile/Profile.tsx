import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEdit } from '@fortawesome/free-solid-svg-icons';
import Blog from '../../origanism/Blog';
import Container from '../../origanism/Container';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../common/hooks/useAuth';

interface Profile {
  name: string,
  email: string,
  description: string,
  avatar: string,
  followers: number,
  blog: []
}

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState(profile?.description || '');
  const { token } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get(`http://localhost:3000/user/${username}`);
      const data = response.data.data;  
      setProfile(data);
    };

    fetchProfile();
  }, [username]);

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(e.target.value);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/user/update-description`, 
        { description: newDescription }, 
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (profile) {
        setProfile({ ...profile, description: newDescription });
      }
      setEditMode(false);
    } catch (error) {
      console.error("Error updating description:", error);
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className={style['profile']}>
        <div className={style['profile_container'] + ' card'}>
          <div className={style['profile_content']}>
            <div className={style['profile_user']}>
              <img style={{ width: 150 }} src={"/icon/" + profile.avatar} alt={profile.email} />
              <div>
                <a href="#"><h4>{profile.name}</h4></a>
                <p>@{profile.email}</p>
              </div>
            </div>
            <div className={style['profile_infor']}>
              
              {editMode ? (
                <>
                  <h4>About :</h4>
                  <div className={style['profile_infor-description']}>
                    <textarea value={newDescription} onChange={handleDescriptionChange} />
                    <button onClick={handleSave} className='btn-submit'>Save</button>
                  </div>
                </>
              ) : (
                <>
                <div className={style['profile_infor-edit']}>
                <h4>About :</h4>
                <FontAwesomeIcon icon={faEdit} onClick={() => setEditMode(true)} className={style['icon']} />
                </div>
                <div className={style['profile_infor-description']}>
                  <p>{profile.description}</p>
                </div>
                </>
              )}
              <div className={style['profile_infor--icon']}>
                <FontAwesomeIcon icon={faUser} className={style['iconStyle']} /> <p>{profile.followers} Followers</p>
              </div>
              <button className='btn-submit'>Follow</button>
            </div>
          </div>
        </div>
        
        { profile.blog && profile.blog.map((blog: IBlog) => (
          <Blog {...blog} key={blog.id} name={profile.name}/>
        )) }
      </div>
    </Container>
  )
}

export default Profile
