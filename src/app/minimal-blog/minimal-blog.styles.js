import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 30px 100px 0px rgba(17, 23, 41, 0.05);
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 368px;
`;

const ImageHeader = styled.img`
  height: 152px;
  object-fit: fill;
  width: 100%;
  border-radius: 16px;
`;

const Tag = styled.p`
  color: #883ae1;
  margin-top: 16px;
  padding: 6px;
  background: #e6d6fc;
  width: max-content;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 600;
`;

const Title = styled.p`
  color: #20293a;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 600;
`;

const Description = styled.p`
  color: #6c727f;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;
`;

const Author = styled.p`
  color: #6c727f;
  margin-top: 40px;
  font-size: 12px;
  font-weight: 300;
`;

export { Container, Card, ImageHeader, Tag, Title, Description, Author };
