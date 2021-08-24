import React from 'react';
import styled from 'styled-components/macro';
import Date from './Date';

const Post = ({ item, color, date }) => {



    return (
        <PostStyled className="post col-md-4" style={{ backgroundColor: color }}>
            <ContentStyled>
                <Date date={date} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </ContentStyled>
            <div className="btn-wrap">
                <LinkStyled href={item.link}>Read More</LinkStyled>
            </div>
        </PostStyled >
    )
}


const PostStyled = styled.div`
height: 300px;
max-height: 300px;
overflow: hidden;
justify-content: space - between;
align-items: flex - start;
flex-wrap: nowrap;
padding: 1.6rem;
 `


const ContentStyled = styled.div`
    color: #ffffff;
`

const LinkStyled = styled.a`
display: inline-block;
border-radius: 6px;
padding: 7px 12px;
text-decoration: none;
background-color: #fff;
border: 1px solid #ea5167;
color: #ea5167;

    &:hover{
    background-color: #ea5167;
    color: #ffffff;
    border: 1px solid #ea5167;
    }
    &:focus{
    outline: none;
    box-shadow: none;
    border: none;
    }
}
`

export default Post;
