import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header'

const items = [
   {
       title: 'What is React?',
       content: 'React is frontend js framework'
   },
   {
       title: 'why react?',
       content: 'it is a favorite js library among engineers'
   } 
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
];

const App = ()=>{
    const[selected, setSelected] = useState(options[0]);
    // const[showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options} 
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            {/* <button onClick={()=>setShowDropdown(!showDropdown)}> Toggle Dropdown</button>
            {showDropdown ? 
                <Dropdown 
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options} 
                /> : null
            }            */}
        </div>
    );
};

export default App;