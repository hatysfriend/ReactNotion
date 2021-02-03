import React,{useState} from 'react'

// inside item content is like [['div','text1'],['a','text2'],['h1','text3']]
    //item.content: [i][0]=tag name
    //              [i][1]=text 
    //              [i][2]=className
    //              [i][3]=id
    //              [i][4]= onclick? idk...

    // input.setAttribute('id', id);
    // input.setAttribute('type', 'number');
    // input.setAttribute('name', id);
    // input.setAttribute('value', '0');
    // input.setAttribute('min', '0');

export default function PageContent({item}) {
    
    let length = item.content.length;
    let [count, setCount]= useState(0)
    
    const newLine = () => {
        console.log('count: ' + count + " length :" + length)
        console.log(item.content[count][0] + ' : ' + item.content[count][1])

        console.log(JSON.stringify(item.content))
        let para = document.createElement(item.content[count][0]);  //1. new tag
        para.innerHTML = item.content[count][1]
        let addDiv = document.getElementById(item._id);  //4. place to add
        document.body.appendChild(para, addDiv)
        setCount(count+1)
    }
    
    return (
            <div className={item.title} id={item._id}>
                <div>title :{item.title}</div>
                {item.content && count < length && newLine()}
            </div>
    )
}