import { logout } from 'containers/App/actions'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useInjectSaga } from 'utils/injectSaga'
import saga from './saga'
import { Action, ActionBar, Avatar, Body2, CircleButton, Col, Divider, H4, Header, HeaderContent, HeaderWrapper, Item, LinkImg, LinkInfo, LinkWrapper, P, Row, SearchBox, SearchBoxInput } from './styled'

const key = 'index'

export default () => {
  useInjectSaga({ key, saga })
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

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
            <CircleButton type="button">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5989 7.20084V21.2008M7.59888 14.2008H21.5989"
                  stroke="#121212"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CircleButton>
            <CircleButton type="button" onClick={handleLogout}>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4871 23.4147H7.48706C6.95663 23.4147 6.44792 23.204 6.07285 22.8289C5.69777 22.4539 5.48706 21.9452 5.48706 21.4147V7.41473C5.48706 6.8843 5.69777 6.37559 6.07285 6.00052C6.44792 5.62545 6.95663 5.41473 7.48706 5.41473H11.4871M18.4871 19.4147L23.4871 14.4147M23.4871 14.4147L18.4871 9.41473M23.4871 14.4147H11.4871"
                  stroke="#121212"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CircleButton>
          </div>
        </Header>
        <HeaderContent>
          <H4>phphan</H4>
          <Body2>pminhphung01@gmail.com</Body2>
        </HeaderContent>
        <Divider my="1.25" />
      </HeaderWrapper>
      <SearchBox>
        <SearchBoxInput type="input" placeholder="Search..." />
      </SearchBox>
      <Row>
        {[1, 2, 3, 4, 5].map((i) => (
          <Col key={i}>
            <Item>
              <LinkWrapper>
                <LinkInfo>
                  <Body2>#tags</Body2>
                  <H4>Title</H4>
                  <P>description</P>
                </LinkInfo>
                <LinkImg />
              </LinkWrapper>
              <Divider my="0.5" />
              <ActionBar>
                <Action type="button">
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
                <Action type="button">
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
