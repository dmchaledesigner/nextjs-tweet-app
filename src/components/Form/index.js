import React from 'react';
import styles from './Form.module.scss';



const PostForm = (props) => {
  return (

    <form className={styles.formPost}>
      <textarea></textarea>
      <button>{props.title}</button>
    </form>
  )
}


PostForm.defaultProps = {
  title: 'add new Post',
}

export default PostForm
