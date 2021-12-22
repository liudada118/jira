import React, { Component,useState,useEffect } from 'react'
import List from './List'
import SearchPanel from './SearchPanel'
// import {user} from './SearchPanel'
const apiUrl = 'http://localhost:3001' //process.env.REACT_APP_API_URL

export interface list{
    name : string,
    personName : string,
    id : number
}
export interface user{
    name : string,
    personName : string,
    id : number
}
export default function ProjectList() {
    const [param , setParam] = useState({
        name : '',
        personId : 1
    })

    const [list , setList] = useState<list[]>([])
    const [users ,setUsers] = useState<user[]>([])
    useEffect(() => {
        fetch(apiUrl+ '/projects').then(async (res) => {
           
            if(res.ok){
                let a = await res.json()
                setList(a)
                 console.log(a);            }
            
        })
        return () => {
            
        }
    }, [])

    useEffect(() => {
        fetch(apiUrl+ '/users').then(async (res) => {
           
            if(res.ok){
                let a = await res.json()
                setUsers(a)
                 console.log(a);            }
            
        })
        return () => {
            
        }
    }, [])

    return (
        <>
            <SearchPanel param={param} setParam={setParam} users={users} />
            <List list={list} users={users} />
        </>
    )
};
