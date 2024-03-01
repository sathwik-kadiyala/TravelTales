import { render } from '@testing-library/react';
import Home from '../Components/Home';
import '@testing-library/jest-dom'

test('Home component', () => {
  const userinfo = { };
  const postdata = [ ];
    const { getByTestId } = render(<Home userinfo={userinfo} postdata={postdata} />);
    const headerComponent = getByTestId('header');
    expect(headerComponent).toBeInTheDocument();

    const postsComponent = getByTestId('posts');
    expect(postsComponent).toBeInTheDocument();

    const sideinfoComponent = getByTestId('sideinfo');
    expect(sideinfoComponent).toBeInTheDocument();
});
