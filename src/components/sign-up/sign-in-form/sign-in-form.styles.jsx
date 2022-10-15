import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
`

export const ButtonContainer = styled(SignInContainer)`
  justify-content: space-between;
  height: 7rem;
`
