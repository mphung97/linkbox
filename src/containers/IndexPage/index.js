import { selectCurrentUser } from 'containers/App/redux/selectors'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'
import ActionBar from './ActionBar'
import AddLink from './AddLink'
import LogoutButton from './LogoutButton'
import { getLinks } from './redux/actions'
import reducer from './redux/reducer'
import saga from './redux/saga'
import { selectLinks } from './redux/selectors'
import { Avatar, Body2, Caption2, Col, Description, Divider, H4, Header, HeaderContent, HeaderWrapper, Item, LinkInfo, LinkWrapper, Row, SearchBox, SearchBoxInput, Title, TitleWrapper } from './styled'
import Tags from './Tags'

const key = 'index'

export default () => {
  const { email, username } = useSelector(selectCurrentUser)
  const links = useSelector(selectLinks)
  const dispatch = useDispatch()

  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  useEffect(() => {
    dispatch(getLinks())
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
            <AddLink />
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
              </LinkWrapper>
              <Divider my="0.5" />
              <ActionBar url={url} />
            </Item>
          </Col>
        ))}
      </Row>
    </div>
  )
}
