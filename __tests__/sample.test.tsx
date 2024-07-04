import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/app/page';

describe('Sample', () => {
  it('コンポーネントのレンダリングのテスト', async () => {
    render(<Home />);
  });
});
