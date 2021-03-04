import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  const [likes, setLike] = React.useState(props.likesCount);
  const putLike = () => {
    if (likes == props.likesCount ) {
      setLike(likes + 1);
    }
    else if(likes > props.likesCount)
    {
      setLike(likes - 1);
    }
  }
  return (
    <div className={s.item}>
      <img className={s.profilePH} src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' />
      <span className={s.postText}>{props.message}</span>
      <div>
        <span onClick={putLike}><img className={s.like} src={"https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png"}></img></span>
         <span className={s.likesCount}>{likes}</span>
      </div>
    </div>
  )
}

export default Post;