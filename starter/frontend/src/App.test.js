import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const movies = [
  { id: '123', title: 'Top Gun: Maverick' },
  { id: '456', title: 'Sonic the Hedgehog' },
  { id: '789', title: 'A Quiet Place' },
];

const detail = {
  id: '789',
  title: 'A Quiet Place',
  description: 'Scary monsters',
};

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    const body = url.endsWith('/movies') ? { movies } : { movie: detail };
    return Promise.resolve({ ok: true, json: () => Promise.resolve(body) });
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders the movie list from the API', async () => {
  render(<App />);
  expect(await screen.findByText('Top Gun: Maverick')).toBeInTheDocument();
  expect(screen.getByText('Sonic the Hedgehog')).toBeInTheDocument();
  expect(screen.getByText('A Quiet Place')).toBeInTheDocument();
});

test('shows details when a movie is clicked', async () => {
  render(<App />);
  const movie = await screen.findByText('A Quiet Place');
  await userEvent.click(movie);
  await waitFor(() => {
    expect(screen.getByText('Scary monsters')).toBeInTheDocument();
  });
});
