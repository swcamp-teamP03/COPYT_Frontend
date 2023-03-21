import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 160px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 32px;
  }
`;

export const CommentContainer = styled.div`
  height: 250px;
  background: #ffffff;
  border: 1px solid #b7b7b7;
  border-radius: 25px;
  padding: 40px;
  overflow: auto;
`;

export const CommentText = styled.div`
  height: 90%;
  white-space: pre-wrap;
  overflow: auto;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  resize: none;
  border-radius: 15px;
  padding: 10px;
  overflow: auto;
`;

export const TextCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: #606060;
`;
