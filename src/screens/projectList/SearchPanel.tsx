import React, { Component, useState,useEffect } from 'react'
import {user} from './index'
export interface person{
    name : string,
    personId : number
}

interface searchProps{
    param : person,
    setParam : (param : any) => void,
    users : user[]
}

export default function SearchPanel(props : searchProps) {
    
 

    useEffect(() => {
        console.log(111);
        return () => {
            
        }
    }, [props.param])

    return(
        <form>
            <div>
                <input type="text" value={props.param.name} onChange={(e) => {
                    props.setParam({
                        ...props.param,
                        name : e.target.value
                    })
                }} />
                <select value={props.param.personId} onChange={(e) => {
                    props.setParam({
                        ...props.param,
                        personId : e.target.value
                    })
                }}>
                    <option value="">负责人</option>
                    {
                        props.users.map((user) => {
                            return <option value={user.id}>{user.name}</option>
                        })
                    }
                </select>
            </div>
        </form>
    )
};
