import React from 'react';
import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter,useNavigate } from 'react-router-dom';
import Post from '../Components/Post';
import '@testing-library/jest-dom'

test(' post component ', () => {
  const post = {
    imge: 'image-url.jpg',
    title: 'Test Post',
    author: 'Test Author',
    desc: 'Test description',
    id: 1,
  };

  
  const { getByAltText, getByText } = render(
    <MemoryRouter>
      <Post
        imge={post.imge}
        title={post.title}
        author={post.author}
        desc={post.desc}
        id={post.id}
      />
    </MemoryRouter>
  );

  expect(getByText(post.title)).toBeInTheDocument();
  expect(getByText(`By : ${post.author}`)).toBeInTheDocument();
  expect(getByText(post.desc)).toBeInTheDocument();
  expect(getByAltText('no image')).toBeInTheDocument();

  userEvent.click(screen.getByAltText('no image'));
  expect(getByText(`By : ${post.author}`)).toBeInTheDocument();

});
