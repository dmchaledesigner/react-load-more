import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { data } from './db';

import Post from './Post';


const PostsBlock = ({ date }) => {



    const colors = [
        "#8391B5",
        "#290D11",
        "#0C9ABC",
        "#0E17F4",
        "#97BC89",
        "#6B48F7",
        "#584A35",
        "#669F15",
        "#15FC93",
        "#7C8329",
        "#27D792",
        "#4786C8",
    ];



    // posts and count state
    const [posts, setPosts] = useState(data);
    const [count, setCount] = useState(3);
    const [color, setColor] = useState(colors)


    // count handler function
    const loadHandler = () => {
        setCount((prevState) => prevState + 3);
    }


    return (
        <div className="container">
            <div className="row">
                {
                    posts.slice(0, count).map((item, index,) => (
                        <Post item={item} key={index} color={color[index]} date={item.date} />
                    ))
                }
            </div>
            <LoadingStyled>
                <ButtonStyled className={`btn btn-primary ${count === 9 && "limit"}`} onClick={loadHandler}>{count === 9 ? 'All posts loaded' : 'Load more'}</ButtonStyled>
            </LoadingStyled>
        </div>
    )
}


const LoadingStyled = styled.div`
margin-top: 3rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
                `

const ButtonStyled = styled.button`
display: inline-block;
border-radius: 6px;
background-color: #fff;
padding: 7px 12px;
border: 1px solid #ea5167;
color: #ea5167;

s&:hover{
background-color: #ea5167;
color: #ea5167;
border: 1px solid #ea5167;
}
&:focus{
outline: none;
box-shadow: none;
border: none;
}

&.limit{
    pointer-events: none;
}
 `


export default PostsBlock;
