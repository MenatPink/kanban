import { render, screen } from '@testing-library/react';
import Board from './Board';

describe('Board', () => {
    it('should appear in the document', () => {
        render(<Board />);
        expect(screen.getByTestId('board')).toBeInTheDocument();
    })
})