import { useState } from 'react';
import AccordianItem from './AccordianItem';

export default function Accordian({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordian">
      {data.map((el, idx) => (
        <AccordianItem
          title={el.title}
          text={el.text}
          num={idx}
          key={idx}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {el.text}
        </AccordianItem>
      ))}

      {/* EXAMPLE OF CHILDREN PROP PASSED TO A REACT COMPONENT */}
      <AccordianItem
        title="TEST 1"
        num={22}
        key="test 1"
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        <p>Allows React Developers to :</p>
        <ul>
          <li>Break up UI into component</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordianItem>
    </div>
  );
}
