import styled from 'styled-components';

export const CommentContainer = styled.div`
  width: 90%;
  display: flex;
  height: 250px;
  background: #ffffff;
  border: 1px solid #b7b7b7;
  border-radius: 25px;
  padding: 40px;
`;

export const CommentText = styled.div`
  overflow: auto;
  height: 100%;
  white-space: pre-wrap;
`;

export const EditButton = styled.div`
  display: flex;
  padding: 20px 40px;
  justify-content: flex-end;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border-radius: 15px;
  padding: 10px;
`;
