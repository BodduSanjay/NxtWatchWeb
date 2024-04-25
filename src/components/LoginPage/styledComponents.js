import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isLight ? 'white' : '#424242')};
`

export const ImageEl = styled.img`
  height: 50px;
  width: 180px;
  margin-bottom: 20px;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  border: none;
  border-redius: 10px;
  width: 90%;
  max-width: 300px;
  
`

export const InputLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: ${props => (props.isLight ? 'gray' : 'white')};
  align-self: flex-start;
  width: 90%;
`

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 15px;
  width: 90%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 10px;
  outline: none;
  background-color: transparent;
  color: gray;
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const Checkbox = styled.input`
  margin-right: 5px;
`

export const LoginButton = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`
export const ErrorPara = styled.p`
  color: red;
  font-size: 15px;
`
