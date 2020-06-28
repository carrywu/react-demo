import React, { useState ,useEffect} from 'react';

function HookDemo() {
  const [inputValue, setInput] = useState("");
  const [lists,setList] = useState([]);
  const clickBtn= ()=>{
    setInput("");
    setList([...lists,inputValue])
  }
  const liClick = function (index) {

    lists.splice(index,1);

    console.log('lists',inputValue,lists,index);
    clickBtn([...lists])
};

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={clickBtn}>提交</button>
      <div>
      {lists.map((item,index)=>
              <div key={index} onClick={(e)=>liClick(index)}>{item}</div>
          )}

      </div>
    </div>
  );
}
export default HookDemo;