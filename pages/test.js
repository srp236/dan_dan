import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head'
import { Layout, Row, Col, Button } from 'antd';
import logoR from './../public/images/logo_red.png'
import logo from './../public/images/logo.png'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import React, {useEffect} from 'react'

async function getL() {
    const url = 'https://utaten.com/search?sort=popular_sort_asc&artist_name=&title=%E6%83%B3%E3%81%84%E3%81%8D%E3%82%8A&beginning=&body=&lyricist=&composer=&sub_title=&tag=&show_artists=1';
    const response = await axios(url).then((res)=>{console.log(res)});
    return response;
}


export default function Test() {
    useEffect(()=>{
        const test = getL();
        console.log(test)
    },[])
    return (
        <>Hi</>
    )
}