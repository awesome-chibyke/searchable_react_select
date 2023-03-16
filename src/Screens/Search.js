import { useEffect, useState } from 'react';
import Select from 'react-select';

const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
  ];

const SearchAbleSelect = () => {
    const [dataForSearch, setDataForSeach] = useState(aquaticCreatures);
    const [selectedValue, setSelectValue] = useState("");
    const [dataToDisplay, setDataToDisplay] = useState(null);

    useEffect(() => {
        //example on how to fetch 
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) =>{
    let arrayOfData = [];

    if(json.length > 0){
        arrayOfData = json.map(eachData => { return {label: eachData.title, value:eachData.id} });
        setDataForSeach(arrayOfData);
    }
  });

    }, []);

    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${selectedValue}`).then((response) => response.json())
  .then((json) =>{
    setDataToDisplay(json.body)
  });
  
    }

    useEffect(() => {
        fetchData();
    }, [selectedValue])

    
    return (
        //setSelectValue(e.target.value)
        <div className="App">
            <div style={{backgroungColor: "#ddd", width:"300px", height:"300px", margin:"10px", padding:"10px", border:"2px solid black", marginLeft:"auto", marginRight:"auto"}}>{dataToDisplay ?? ""}</div>
          <Select onChange={ (e) => { setSelectValue(e.value) } } options={dataForSearch} />
          {/* <button type='button'></button> */}
        </div>
      );
      
}

export default SearchAbleSelect;