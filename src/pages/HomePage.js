import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: 'Czym jest teoria strun?',
    author: 'Jan Nowak',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur optio veniam consequuntur aut tempora amet explicabo. Voluptatem doloribus obcaecati labore eos vitae porro quibusdam, nobis qui, quisquam blanditiis laudantium?'
  },
  {
    id: 2,
    title: 'Czym jest paradoks Fermiego?',
    author: 'Ania Kwaitkowska',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur optio veniam consequuntur aut tempora amet explicabo. Voluptatem doloribus obcaecati labore eos vitae porro quibusdam, nobis qui, quisquam blanditiis laudantium?'
  },
  {
    id: 1,
    title: 'Ciemna materia i ciemna energia?',
    author: 'Jan Kowalski',
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