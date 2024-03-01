import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Posts from '../Components/Posts';

describe('Posts Component', () => {
  const postData = [
    {
      id: 1,
      img: 'image-url-1.jpg',
      title: 'Post 1',
      author: 'Author 1',
      desc: 'Description 1',
    },
    {
      id: 2,
      img: 'image-url-2.jpg',
      title: 'Post 2',
      author: 'Author 2',
      desc: 'Description 2',
    },
  ];

  it('renders posts with correct data', () => {
    render(<Router>
    <Posts postdata={postData} />
    </Router>
    );
    
    // Check if the posts container is rendered
    const postsContainer = screen.getByTestId('posts');
    expect(postsContainer).toBeInTheDocument();

    // Check if each post is rendered with correct data
    postData.forEach(post => {
      const postElement = screen.getByText(post.title);
      expect(postElement).toBeInTheDocument();
      const authorElement = screen.getByText(`By : ${post.author}`);
      expect(authorElement).toBeInTheDocument();
      const descElement = screen.getByText(post.desc);
      expect(descElement).toBeInTheDocument();
      const imageElement = screen.getAllByAltText('no image');

        for(let i=0;i<imageElement.length;i++){
        expect(imageElement[i]).toBeInTheDocument()
    }

      
    });
  });
});
