import React, {Component} from 'react'
import {FaTwitter, FaGithubAlt, FaFacebook, FaYoutube} from 'react-icons/lib/fa'
import {MdMessage, MdEmail} from 'react-icons/lib/md'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;

`

const UserIcon = styled.a`
  margin-left: 25px;
  color: white;
  &:hover {
    color: rgba(0, 0, 0, .2);
    border-bottom: none;
  }


`

const iconStyle = {
  color: "#35495E",
  width: '20px',
  height: '20px',
}

class UserLinks extends Component {
  render() {
    return (
      <Container className="user-links">
        <UserIcon href='https://twitter.com/SataivaT'>
          <FaTwitter style={iconStyle} />
        </UserIcon>
        <UserIcon href='https://github.com/sataiva'>
          <FaGithubAlt style={iconStyle} />
        </UserIcon>
        <UserIcon href='https://fb.com/sataiva'>
          <FaFacebook style={iconStyle} />
        </UserIcon>
        <UserIcon href='https://www.youtube.com/channel/UC1F-wHR6SqoSjM7Nyxtkl7g'>
          <FaYoutube style={iconStyle} />
        </UserIcon>
      </Container>
    )
  }
}

export default UserLinks
