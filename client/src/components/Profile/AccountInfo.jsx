import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

const AccountInfoContainer = styled.section`
flex: 2;

`

const AccountInfoHeading = styled.h2`
    margin-bottom: 20px;
`
const AccountPhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

`
const PersonalData = styled.div`
 
    margin-left: 15px;
`
const Name = styled.p`
    margin-top: 5px;
`
const Phone = styled(Name)`

`
const Email = styled(Name)`

`
const Message = styled.p`
  
`
const ChangeDataButton = styled.button`
    width: 100%;
    margin-top: 20px;
    color:white;
    background-color: black;
    border: none;
    height: 30px;
    cursor: pointer;
`

function AccountInfo() {
    const user = useSelector(state => state.user.currentUser)
  
  return (
    <AccountInfoContainer>
      <AccountInfoHeading>Account information</AccountInfoHeading>
      <InfoContainer>
        <AccountPhoto src='https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg' />
        <PersonalData>
            <Name>{`Name: `}</Name>
            <Email>{`Email: ${user.email}`}</Email>
            <Phone>{`Phone: `}</Phone>
            <ChangeDataButton>Change your data</ChangeDataButton>
        </PersonalData>
        <Message>{`Thank you for being our client for 6 years`}</Message>
      </InfoContainer>
    </AccountInfoContainer>
  )
}

export default AccountInfo
