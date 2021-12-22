import React, { Component } from 'react'
import { user, list } from './index'
// interface list{
//     name : string,
//     personName : string
// }

interface listProps {
    list: list[],
    users: user[]
}

export default ({ list, users }: listProps) => {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((project, index) => {
                        // console.log(users.find((a, index) => { return a.id = project.id }));
                        return (
                            
                            <tr>
                                <td>{project.name}</td>
                                <td>{users.find((a, index) => a.id === project.id )?.name || '未知'}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}