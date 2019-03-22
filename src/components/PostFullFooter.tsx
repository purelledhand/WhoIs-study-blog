import * as React from 'react';
import styled from '@emotion/styled'

const PostFullFoot = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 2vw auto;
  padding: 3vw 0;
  border-top: 1px solid #DADADA;
  border-bottom: 1px solid #DADADA;
  max-width: 840px;
`;

const PostFullFooter: React.FunctionComponent = props => <PostFullFoot>{props.children}</PostFullFoot>;

export default PostFullFooter;
