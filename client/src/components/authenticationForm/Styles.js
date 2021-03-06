/**
 * styled components are faster than other styling this file is for authentication forms only
 */

import styled from 'styled-components';

export const AuthFormWrapper = styled.div`
  
  width: 30%;
  border-radius: 5px;
  marginTop:170px;
  margin:  auto;
  .auth-btns {
    width: 100%;
    .btn {
      float: right;
      color: #fff;
      font-weight: 600;
    }
    .sign-in {
      line-height: 45px;
    }
    .sign-up {
      height: 30px;
      width: 80px;
      background: rgba(255, 215, 3, 0.25);
      border: 1px solid #07709D;
      border-radius: 5px;
      padding: 3px;
      margin-top: 15px;
    }
    .logo{
      padding-top: 20px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    
  }
`;