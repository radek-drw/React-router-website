import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: 'What is string theory?',
    author: 'John Copper',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur optio veniam consequuntur aut tempora amet explicabo. Voluptatem doloribus obcaecati labore eos vitae porro quibusdam, nobis qui, quisquam blanditiis laudantium?'
  },
  {
    id: 2,
    title: 'What is the Fermi Paradox?',
    author: 'Anita Gribben',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur optio veniam consequuntur aut tempora amet explicabo. Voluptatem doloribus obcaecati labore eos vitae porro quibusdam, nobis qui, quisquam blanditiis laudantium?'
  },
  {
    id: 1,
    title: 'Dark Matter and Dark Energy',
    author: 'Patrick Hegarty',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur optio veniam consequuntur aut tempora amet explicabo. Voluptatem doloribus obcaecati labore eos vitae porro quibusdam, nobis qui, quisquam blanditiis laudantium?'
  },
]

const HomePage = () => {

  const articleList = articles.map(article => (
    <Article key={article.key} {...article} />
  ))

  return (
    <div className="articles">
      {articleList}
    </div>
  );
}

export default HomePage;