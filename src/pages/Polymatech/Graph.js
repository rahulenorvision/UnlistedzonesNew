import {useState,useEffect} from 'react';
import {
  Chart as ChartJS,
  Title,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import {Line} from 'react-chartjs-2';


ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function Graph() {
  const [data,setData] = useState({
    labels:['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
    datasets:[{
      label:'days',
      data:[0,20,40,60,80,100,120,140,160,180,200],
      borderColor:'aqua',
      tension:0.4,
      showLine:true
    }]
  })
  useEffect(()=>{
    const arr =[];
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
      json.map((j)=>{
        arr.push(j.id)
        // arr.reverse()
      })
      setData({
        labels:['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
        datasets:[{
          label:'days',
          data:arr,
          borderColor:'aqua',
          tension:0.4,
          showLine:true
        }]
      })}
      
      )
      console.log(arr)
      
  },[])

 
  return (
    <>
     <Line
     data={data}
     ></Line>
    </>
  )
}

