import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

describe('Button', () => {
    it('should render correctly', () => {
        const { container } = render(<Button>Hello</Button>);

        expect(container).toBeInTheDocument();
    });

    it('should call the function passed on click', async () => {
        const user = userEvent.setup();

        const mockFn = jest.fn();

        render(<Button onClick={mockFn}>Hello</Button>);

        await user.click(screen.getByText('Hello'));

        expect(mockFn).toHaveBeenCalled();
    });
});
