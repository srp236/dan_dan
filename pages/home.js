import React, {useState, useEffect} from "react";
// import axios from 'axios';

// async function fetchData(){
//   const url = 'https://utaten.com/search?sort=popular_sort_asc&artist_name=&title=%E6%83%B3%E3%81%84%E3%81%8D%E3%82%8A&beginning=&body=&lyricist=&composer=&sub_title=&tag=&show_artists=1';
// }


const axios = require('axios');
const cheerio = require('cheerio');
const url = "https://www.iban.com/exchange-rates";

fetchData(url).then( (res) => {
    // const html = res.data;
    // const $ = cheerio.load(html);
    // const statsTable = $('.table.table-bordered.table-hover.downloads > tbody > tr');
    // statsTable.each(function() {
    //     let title = $(this).find('td').text();
    //     console.log(title);
    // });
})

async function fetchData(url){
    console.log("Crawling data...")
    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));
    console.log(response)
    // if(response.status !== 200){
    //     console.log("Error occurred while fetching data");
    //     return;
    // }
    return response;
}

export default function Home(){
  return <>Hi</>
}



// const ShowPosts = () => {
//     const [posts, setPosts] = useState([]);
//     const config = {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Headers': '*',
//       }
//     };

//     useEffect( () => { 
//         async function fetchData() {
//             try {
//                 const res = await axios.get(url, config).then(res=>{console.log('hiihhihiihih')}); 
//                 setPosts(res.data);
//                 console.log(posts)
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         fetchData();
//     }, []);
//     return <div>{posts}</div>
// }



// const getLyrics = async() => {
//   const response = await axios.get(url).then((res)=>{console.log(res.data)});
//   // console.log(response.data)
//   return response;
// }