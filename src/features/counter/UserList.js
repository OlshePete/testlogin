import React from 'react'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';
import { TextField } from '@material-ui/core';


export default function UsersList() {

  const users = useSelector((state) => state.counter.users);

  let usersSorted = [...users].sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))

console.log("kyky",usersSorted);
  const columns = [
    {
      name: 'TitleID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'UserNAME',
      selector: 'username',
    },
    {
      name: 'first_name',
      selector: 'first_name',
    },
    {
      name: 'last_name',
      selector: 'last_name',
    },
  ];
  return (
    <div className="content">
      <div className="wrapper">
       
    <h1>{"There are ",usersSorted.length, "users"}</h1>
    {/* <TextField label="search" margin="normal" variant="outlined" onChange={fieldOnChange}/> */}
     <DataTable 
       title="List of users from API"
       columns={columns}
       data={usersSorted}
     />
    </div>
    </div>
  )
}