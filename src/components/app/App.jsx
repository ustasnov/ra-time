import {useState} from 'react';
import VideoList from '../videolist/VideoList';

export default function App() {
  const [list, setList] = useState([
      {
          id: 0,
          url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2017-07-31 13:24:00'
      },
      {
          id: 1,
          url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2018-03-03 12:10:00'
      },
      {
          id: 2,
          url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2018-02-03 23:16:00'
      },
      {
          id: 3,
          url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2018-01-03 12:10:00'
      },
      {
          id: 4,
          url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2018-01-01 16:17:00'
      },
      {
          id: 5,
          url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2024-06-13 16:28:00'
      },
  ]);

  return (
    <VideoList list={list} />
  );
}
