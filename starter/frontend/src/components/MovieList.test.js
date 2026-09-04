import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieList from './MovieList';

test('renders each movie as a button', async () => {
  const onSelect = jest.fn();
  render(
    <MovieList
      movies={[{ id: '1', title: 'A Quiet Place' }]}
      error={null}
      onSelect={onSelect}
    />,
  );

  await userEvent.click(screen.getByRole('button', { name: 'A Quiet Place' }));
  expect(onSelect).toHaveBeenCalledWith('1');
});

test('renders an empty state with no movies', () => {
  render(<MovieList movies={[]} error={null} onSelect={jest.fn()} />);
  expect(screen.getByText(/no movies to show yet/i)).toBeInTheDocument();
});
