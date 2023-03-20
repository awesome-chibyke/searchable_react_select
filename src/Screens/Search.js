import { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';


const muscleArray = [
'abductors',
'adductors',
'biceps',
'calves',
'chest',
'forearms',
'glutes',
'hamstrings',
'lats',
'lower_back',
'middle_back',
'neck',
'quadriceps',
'traps',
'triceps',
]

const SearchAbleSelect = () => {
    const [dataForSearch, setDataForSeach] = useState([]);
    const [selectedValue, setSelectValue] = useState("");
    const [dataToDisplay, setDataToDisplay] = useState(null);

    useEffect(() => {
        //example on how to fetch 
        // const options = {
        //     method: 'GET',
        //     url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        //     headers: {
        //         'X-RapidAPI-Key': '740a0492edmsh053b945b078a237p157f41jsnb7b8feb40c63',
        //         // 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //       console.log('lll', response.data);
        //   }).catch(function (error) {
        //       console.error(error);
        //   });
        let arrayOfData = [];
        if(muscleArray.length > 0){
            arrayOfData = muscleArray.map(eachData => { return {label: eachData, value:eachData} });
            setDataForSeach(arrayOfData);
        }

//         axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {headers:{
//             'X-RapidAPI-Key': 'UZjs8Cbxc5w9apyoeQoHkw==WvbVw7sr6wacZCG2',
//             'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//         }})
//   .then((response) => response.json())
//   .then((json) =>{
//     let arrayOfData = [];
// console.log(json)
//     if(json.length > 0){
//         arrayOfData = json.map(eachData => { return {label: eachData.title, value:eachData.id} });
//         setDataForSeach(arrayOfData);
//     }
//   });

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