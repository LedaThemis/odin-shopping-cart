import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('render correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
