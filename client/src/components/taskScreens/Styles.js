import styled from 'styled-components';
import { CheckDouble } from '@styled-icons/boxicons-regular/CheckDouble';
export const Tick = styled(CheckDouble)`
  width: 30px;
  color: #06A82A;
  margin-right: -10px;
`;
export const TodoList = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-bottom: 100px;
  .header {
    color: #076822;
    font-weight: 400;
  }
  .todos {
    background: rgba(204, 204, 204, 0.1);
    border: 1px solid rgba(10, 248, 77, 0.5);
    padding: 10px;
  }
  .yelp{
    max-width: auto;
    max-height: auto;
    margin: auto;
    background-color: #fff;
    -webkit-box-shadow: 2px 2px 13px -4px rgba(0, 0, 0, 0.21);
    box-shadow: 2px 2px 13px -4px rgba(0, 0, 0, 0.21);
    }
    .zoom {

    background-color: green;
    transition: transform .2s; /* Animation */
   
    margin: 0 auto;
  }

.zoom:hover {
  transform: scale(1.1); 
}
.blinking{
    animation:blinkingText 1.2s infinite;
}
@keyframes blinkingText{
    0%{     color: #000;    }
    49%{    color: #000; }
    60%{    color: red; }
    99%{    color:red;  }
    100%{   color: #000;    }
}
  .todo {
    border: 1px solid #ccc;
    margin: 10px;
    position: relative;
    padding: 0 20px 10px 20px;
    background-color: #fff;
    min-height: 100px;
    .float-right button {
      background-color: #fff;
      color: #06A82A;
      font-weight: 600;
      margin-right: -10px;
      border: none;
    }
    .float-right button:hover {
      font-weight: 600;
      color: #000;
    }
    h5 {
      font-weight: 600;
      padding: 10px 0;
    }
    
    .add-btn {
      position: absolute;
      right: 28px;
      background-color: #06A82A;
      border: 1px solid #06A82A;
      color: #fff;
      width: 100px;
    }
    .edit-btn {
      position: absolute;
      top:40px;
      right: 36px;
      border: 0px;
      background-color:white;
      color: #000;
      width: 50px;
    }
    .delete-btn {
      position: absolute;
      border: 0px;
      right: 10px;
      top:40px;
      width: 25px;
      background-color: white;

    }
    .High{
      background-color:red;
      color: black;
    }
    .labelC{
      background-color:green;
      color: white;
      border: 0.2px;
      border-radius: 13px;
      min-width: 80px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .Medium{
      position:absolute;
      right:0%;
      top:8px;
      font-size: 15px;
      background-color:yellow;
      color: black;
      border: 0.2px solid black;
      border-radius: 13px;
      min-width: 80px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .yelp{
    max-width: auto;
    max-height: auto;
    margin: auto;
    background-color: #fff;
    -webkit-box-shadow: 2px 2px 13px -4px rgba(0, 0, 0, 0.21);
    box-shadow: 2px 2px 13px -4px rgba(0, 0, 0, 0.21);
    }
    .extra{
      min-width: 11px;
    }
    .Low{
      position:absolute;
      right:0%;
      top:8px;
      font-size: 15px;
      color: black;
      border: 0.2px solid black;
      border-radius: 13px;
      min-width: 80px;
      padding-left: 15px;
      padding-right: 15px;
      background-color:#0FFFFF;

    }
    
    
    .create-task {
      border: 1px solid #ccc;
      background-color: #fff;
      margin-top: 1px;
      border-radius: 3px;
      padding: 1px;
      input {
        width: 95%;
        border: none;
        padding: 5px;
        outline: none;
      }
      button {
        float: right;
        padding: 5px;
        height: 100%;
        border: none;
        border-left: 1px solid #ccc;
      }
    }
  }
`;


export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .4);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  form {
    margin-top: -100px;
    
    background: #FFFFFF;
    border: 1px solid rgba(10, 248, 77, 0.5);
    border-radius: 3px;
    width: 500px;
    padding: 30px;
    z-index: 20;
    box-shadow: 0 0 10px rgba(10, 248, 77, 0.2)
  }
  
`;