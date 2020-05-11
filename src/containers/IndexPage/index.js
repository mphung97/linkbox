import axios from 'axios'
import { selectCurrentUser } from 'containers/App/selectors'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useInjectSaga } from 'utils/injectSaga'
import AddButton from './AddButton'
import LogoutButton from './LogoutButton'
import saga from './saga'
import { Action, ActionBar, Avatar, Body2, Caption2, Col, Description, Divider, H4, Header, HeaderContent, HeaderWrapper, Item, LinkInfo, LinkWrapper, Row, SearchBox, SearchBoxInput, Title, TitleWrapper } from './styled'
import Tags from './Tags'

const storage = window.localStorage
const key = 'index'

export default () => {
  const { email, username } = useSelector(selectCurrentUser)
  const [links, setLinks] = useState([])

  useInjectSaga({ key, saga })
  useEffect(() => {
    axios
      .get('http://localhost:3001/links', {
        headers: { authorization: storage.getItem('jwt') },
      })
      .then(({ data }) => setLinks(data))
  }, [])

  return (
    <div>
      <HeaderWrapper>
        <Header>
          <Avatar>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#E2E2E2" />
            </svg>
          </Avatar>
          <div>
            <AddButton />
            <LogoutButton />
          </div>
        </Header>
        <HeaderContent>
          <H4>{username}</H4>
          <Body2>{email}</Body2>
        </HeaderContent>
        <Divider my="1.25" />
      </HeaderWrapper>
      <SearchBox>
        <SearchBoxInput type="input" placeholder="Search..." />
      </SearchBox>
      <Row>
        {links.map(({ id, tags, title, url }) => (
          <Col key={id}>
            <Item>
              <LinkWrapper>
                <LinkInfo>
                  <TitleWrapper title={title}>
                    <Title href={url} target="_blank">
                      {title}
                    </Title>
                  </TitleWrapper>
                  <Caption2>
                    <Tags tags={tags} />
                  </Caption2>
                  <Description>{url}</Description>
                </LinkInfo>
                {/* <LinkImg /> */}
              </LinkWrapper>
              <Divider my="0.5" />
              <ActionBar>
                <div>
                  <Action type="button" bg="transparent" bgh="transparent">
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.2013 7.56539C22.7127 7.06089 22.1324 6.66069 21.4938 6.38764C20.8552 6.1146 20.1707 5.97406 19.4794 5.97406C18.7881 5.97406 18.1036 6.1146 17.465 6.38764C16.8264 6.66069 16.2462 7.06089 15.7575 7.56539L14.7433 8.61191L13.7291 7.56539C12.742 6.54682 11.4031 5.97459 10.0071 5.97459C8.61114 5.97459 7.27232 6.54682 6.28521 7.56539C5.29809 8.58396 4.74353 9.96545 4.74353 11.4059C4.74353 12.8464 5.29809 14.2279 6.28521 15.2465L7.29941 16.293L14.7433 23.9741L22.1871 16.293L23.2013 15.2465C23.6903 14.7422 24.0781 14.1435 24.3427 13.4845C24.6073 12.8255 24.7435 12.1192 24.7435 11.4059C24.7435 10.6926 24.6073 9.98631 24.3427 9.32734C24.0781 8.66837 23.6903 8.06965 23.2013 7.56539V7.56539Z"
                        stroke="#999999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Action>
                  <Action type="button" bg="transparent" bgh="transparent">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 4.5C4.72386 4.5 4.5 4.72386 4.5 5V12C4.5 12.2761 4.72386 12.5 5 12.5H8V15.5H5C4.72386 15.5 4.5 15.7239 4.5 16V23C4.5 23.2761 4.72386 23.5 5 23.5H12C12.2761 23.5 12.5 23.2761 12.5 23V20H15.5V23C15.5 23.2761 15.7239 23.5 16 23.5H23C23.2761 23.5 23.5 23.2761 23.5 23V16C23.5 15.7239 23.2761 15.5 23 15.5H16C15.7239 15.5 15.5 15.7239 15.5 16V19H12.5V16C12.5 15.7239 12.2761 15.5 12 15.5H9V12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V5C12.5 4.72386 12.2761 4.5 12 4.5H5ZM5.5 11.5V5.5H11.5V11.5H5.5ZM5.5 22.5V16.5H11.5V22.5H5.5ZM16.5 22.5V16.5H22.5V22.5H16.5Z"
                        fill="#999999"
                      />
                      <path
                        d="M18 6.5C17.7239 6.5 17.5 6.72386 17.5 7V10C17.5 10.2761 17.7239 10.5 18 10.5H21C21.2761 10.5 21.5 10.2761 21.5 10V7C21.5 6.72386 21.2761 6.5 21 6.5H18Z"
                        fill="#999999"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 4.5C15.7239 4.5 15.5 4.72386 15.5 5V12C15.5 12.2761 15.7239 12.5 16 12.5H23C23.2761 12.5 23.5 12.2761 23.5 12V5C23.5 4.72386 23.2761 4.5 23 4.5H16ZM16.5 11.5V5.5H22.5V11.5H16.5Z"
                        fill="#999999"
                      />
                    </svg>
                  </Action>
                </div>
                <Action type="button" bg="transparent" bgh="transparent">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5989 15.2008C15.1512 15.2008 15.5989 14.7531 15.5989 14.2008C15.5989 13.6486 15.1512 13.2008 14.5989 13.2008C14.0466 13.2008 13.5989 13.6486 13.5989 14.2008C13.5989 14.7531 14.0466 15.2008 14.5989 15.2008Z"
                      stroke="#999999"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.5989 15.2008C22.1512 15.2008 22.5989 14.7531 22.5989 14.2008C22.5989 13.6486 22.1512 13.2008 21.5989 13.2008C21.0466 13.2008 20.5989 13.6486 20.5989 14.2008C20.5989 14.7531 21.0466 15.2008 21.5989 15.2008Z"
                      stroke="#999999"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.59888 15.2008C8.15116 15.2008 8.59888 14.7531 8.59888 14.2008C8.59888 13.6486 8.15116 13.2008 7.59888 13.2008C7.04659 13.2008 6.59888 13.6486 6.59888 14.2008C6.59888 14.7531 7.04659 15.2008 7.59888 15.2008Z"
                      stroke="#999999"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Action>
              </ActionBar>
            </Item>
          </Col>
        ))}
      </Row>
    </div>
  )
}
