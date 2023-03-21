import React, { useEffect, useState } from 'react'
import './Content.css'

const Content = () => {
    const [input, setInput] = useState('')
    const [imgInput, setImgInput] = useState('')
    const [cmntinput, setCmntInput] = useState('')
    const [post, setPost] = useState([])

    const name = localStorage.getItem("name")
    console.log('cmntinput......', cmntinput)
    console.log('imginput......', imgInput)
    const submitCmntFn = (index) => {
        let temparr = [...post]
        temparr[index].coment.push(cmntinput)
        setPost(temparr)
    }

    const submitPost = () => {
        let obj = { msg: input, clicked: false, coment: [], img: imgInput }
        setPost([obj, ...post])
        setInput('')

    }

    const clickFn = (index) => {
        const list = [...post]
        console.log('list......', list)
        list[index].clicked = true;
        setPost([...list])
    }
    const deletePost = (index) => {
        console.log(index)
        const temp = post
        temp.splice(index, 1)
        setPost([...temp])

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
                    <br></br>
                    <i className="fa fa-picture-o photoIcon"><p className='photos'>Photos</p></i>
                    <i className="fa fa-video-camera videosIcon" ><p className='video'>Video</p></i>
                    <i className="fa fa-calendar eventsIcon" ><p className='events'>Events</p></i>
                    <i className="fa fa-pencil-square-o articleIcon"><p className='article'>Article</p></i>
                </div>
                <div className='PostSharinp'>
                    URL :- <input type="search" className='searchInput' placeholder='Post image ' onChange={e => setImgInput(e.target.value)} />
                    <button onClick={submitPost} className='postBtn' >Add Post</button>
                </div>
                <hr></hr>
                <div>
                    {post.map((item, index) => (
                        <div>
                            <div className='postDiv'>
                                <i className="fa fa-user-circle-o postME" ></i>
                                <h2>{name}</h2>
                                {/* <p className='testingPara'>This is Testing Para</p> */}
                                <hr></hr>
                                <h3 className='testingHeading'>{item.msg}</h3>
                               {
                                item.img && <div className='postImg flex justify-center '> <img src={item.img}  />  </div>
                               }
                                
                                <hr></hr>
                                <i className="fa fa-thumbs-o-up likeArrow"></i> <i className="fa fa-thumbs-o-down dislikeArrow"></i>
                                <i className="fa fa-comments commentArrow" onClick={() => { clickFn(index) }}><span>Comment</span></i>
                                <i className="fa fa-retweet commentArrow"><span>Repost</span></i>
                                <i className="fa fa-paper-plane commentArrow" ><span>Send</span></i>
                                <i className="fa fa-trash commentArrow" onClick={() => { deletePost(index) }} ><span>Delete</span></i>

                            </div>
                            {
                                item.clicked && <div className='commentDiv '>
                                    <input onChange={(e) => setCmntInput(e.target.value)} placeholder='Write your comment here' /><button className='buttonCmt' onClick={() => submitCmntFn(index)}>comment</button>
                                    {
                                        item.coment.map((val) => (
                                            <div>
                                                <i className="fa fa-user-circle-o comntMe"><h5 className='h5'>{name}</h5><p>{val}</p></i>
                                            </div>
                                        ))
                                    }
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

// {item.clicked && <ShareAble posts={post} setpost={setPost} index={index} />}





{/* <span onClick={() => setLike(!like)}>{like ? <span>DisLike</span> : <span>Like</span>}</span> */ }