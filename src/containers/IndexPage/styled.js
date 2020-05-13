import styled from 'styled-components'
import { Input } from '../LoginPage/styled'

export const HeaderWrapper = styled.div``

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`

export const HeaderContent = styled.div``

export const H4 = styled.h4`
  font-size: 20px;
  line-height: 25px;
  font-weight: 700;
  margin-bottom: 0;
`

export const Body2 = styled.p`
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  margin: 0;
`

export const P = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  margin: 0;
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  flex-shrink: 0;
  margin-top: ${({ my }) => (my ? `${my}rem` : 0)};
  margin-bottom: ${({ my }) => (my ? `${my}rem` : 0)};
  margin-left: ${({ mx }) => (mx ? `${mx}rem` : 0)};
  margin-right: ${({ mx }) => (mx ? `${mx}rem` : 0)};
  background-color: #f3f3f3;
`

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`
export const SearchBoxInput = styled(Input)`
  max-width: 576px;
`
// const SearchBoxIcon = styled.svg``

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0.5rem;

  @media (max-width: 576px) {
    flex: 1;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`

export const Item = styled.div`
  display: block;
  border-radius: 7px;
  padding: 0.5rem 1rem;
  border: 1px solid #f2f2f2;
`

export const LinkWrapper = styled.div`
  display: flex;
`
export const LinkInfo = styled.div`
  flex: 1;
  max-width: 100%;
  /* margin-right: 0.25rem; */
`
export const LinkImg = styled.div`
  width: 80px;
  background-color: #f5f5f5;
  border-radius: 7px;
`

export const ActionBarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid #f2f2f2; */
  vertical-align: middle;
`
export const CircleButton = styled.button`
  position: relative;
  margin-left: 0.5rem;
  padding: 0;
  background-color: ${({ bg }) => bg || '#f5f5f5'};
  border: 1px solid transparent;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  &:hover {
    background-color: ${({ bgh }) => bgh || '#e2e2e2'};
    border: 1px solid transparent;
  }
  &:focus {
    background-color: ${({ bgh }) => bgh || '#e2e2e2'};
    outline: 0;
  }
`

export const Action = styled(CircleButton)`
  width: auto;
  height: auto;
  margin: 2px;
`

export const Avatar = styled.div``

export const TitleWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 50px;
`
export const H6 = styled.h6`
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
`
export const Title = styled(H6).attrs({
  as: 'a',
})`
  color: inherit;
  &:hover {
    color: inherit;
  }
`

export const Caption2 = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  margin: 0;
`

export const Description = styled.p`
  font-size: 13px;
  line-height: 18px;
  font-weight: 300;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-left: 5px;
  }
`
