import React, { useState } from 'react'
import './Content.css'

const Content = () => {
    const [input, setInput] = useState('')
    const [status, setStatus] = useState(false)
    const [imgInput, setImgInput] = useState('')
    const [cmntinput, setCmntInput] = useState('')
    const [showCommentPanel, setShowCommentPanel] = useState(false);
    const [postlike, setPostLIke] = useState([])

    const email = localStorage.getItem("loggedUser");
    const post = JSON.parse(localStorage.getItem('posts'));
   
    const submitCmntFn = (index) => {
        let comment = {
            commentid: '',
            postid: '',
            userid: '',
            content: ''
        }
        // parseInt(Math.random() * 10000000)
        comment.postid = id;
        comment.userid = email;
        comment.content = cmntinput;
        comment.likecount = 0;
        comment.commentcount = 0;
        comment.image = imgInput;
        let temp = JSON.parse(localStorage.getItem('comment')) || [];
        localStorage.setItem('comment', JSON.stringify([...temp, comment]))
        console.log('comentcontentposttemp.....', temp)
    }

    const submitPost = () => {
        let post = {
            postid: '',
            userid: '',
            content: '',
            likecount: 0,
            commentcount: 0,
            image: '',
            comentpanel: false
        }
        post.postid = parseInt(Math.random() * 10000000);
        post.userid = email;
        post.content = input;
        post.likecount = 0;
        post.commentcount = 0;
        post.image = imgInput;
        post.comentpanel = false
        let temp = JSON.parse(localStorage.getItem('posts')) || [];
        localStorage.setItem('posts', JSON.stringify([post, ...temp]))
        setInput('');
        setImgInput('');
    }

    const clickFn = (index) => {
        let list = JSON.parse(localStorage.getItem('posts')) || []
        list[index].comentpanel = !list[index].comentpanel;
        localStorage.setItem('posts', JSON.stringify([...list]))
        setStatus(!status)
        setShowCommentPanel(!showCommentPanel)

    }
        const deletePost = (index) => {
            const temp = JSON.parse(localStorage.getItem('posts')) || []
            temp.splice(index, 1)
            localStorage.setItem('posts', JSON.stringify([...temp]))
            setStatus(!status)
        }
       

        const likeFn = (postid) => {
            const posts = JSON.parse(localStorage.getItem('posts'));
            const newPosts = posts.map((item) => {
                if (item.postid === postid) {
                    item.likecount = item.likecount + 1
                }
                return item;
            })
            localStorage.setItem('posts', JSON.stringify(newPosts));
            setPostLIke(!postlike)
        }
    
    return (
        <div>
            <div className='MiddleBar'>
                <div className='PostShare'>
                    {/* {name} */}
                    <div className='flex'>
                        <i className="fa fa-user-circle-o shareIcon" ></i>
                        <input type="search" className='searchInput' placeholder=' Start Post' value={input} onChange={e => setInput(e.target.value)} />
                        <button className='postBtn' onClick={submitPost}>Add Post</button>
                    </div>
                    <div className='PostSharinp'>
                        URL :- <input type="search" className='searchInput' placeholder='Post image by url ' onChange={e => setImgInput(e.target.value)} />
                        <button onClick={submitPost} className='postBtn ' >Add Post</button>
                    </div>
                </div>
                <div>
                    {post && post.map((item, index) => (
                        <div>
                            <div className='postDiv'>
                                <i className="fa fa-user-circle-o postME" ></i>
                                <h2>{item.userid}</h2>
                                <hr></hr>
                                <h3 className='testingHeading'>{item.content}</h3>
                                {
                                    item.image && <div className='postImg flex justify-center '> <img src={item.image} style={{ width: '100%' }} />  </div>
                                }

                                <hr></hr>
                                <i className="fa fa-thumbs-o-up likeArrow" onClick={() => likeFn(item.postid)}></i>
                                <span>{item.likecount}</span>
                                <i className="fa fa-comments commentArrow" onClick={() => clickFn(index)}><span>Comment</span></i>
                                <i className="fa fa-trash commentArrow" onClick={() => deletePost(index)} ><span>Delete</span></i>

                            </div>
                            {
                                item.comentpanel && <div className='commentDiv '>
                                    <input onChange={(e) => setCmntInput(e.target.value)} placeholder='Write your comment here' />
                                    <button className='buttonCmt' onClick={() => submitCmntFn(item.id, index)}>Comment</button>
                                  
                                </div>
                            }
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Content
