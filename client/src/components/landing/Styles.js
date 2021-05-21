
import styled from 'styled-components';

export const Main = styled.div`
  background-image: url('/todo.jpg');
  filter: saturate(200%);
  background-image:
  linear-gradient(rgba(1, 1, 1, 0.52), rgba(8,8,8, 0.73)),
  url('/todo.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
  .container-fluid {
    height: 100%;
  }
  .row {
    margin-top: 50px;
    margin-bottom: 420px;
    .btn2 {
      border: 1px solid #06A82A;
      background: #FFFFFF;
      font-size: x-large;
      border-radius: 91px;
      padding-left: 10px;
      padding-top: 5px;
      padding-bottom: 5px;

      padding-right: 10px;
      color: black;
      font-weight: 600;
    }
    .btn1 {
      border: 1px solid #06A82A;
      background: #000;
      font-size: x-large;
      border-radius: 91px;
      padding-left: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      margin-left: 15px;
      padding-right: 10px;
      color: white;
      font-weight: 600;
    }
  }
  .intro{
    padding-top:175px;
    color:white;
    text-align:center;
  }
  .subText{
    padding-top:15px;
    color:white;
    text-align:center;
  }

  .logo{
    padding-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  }
`;