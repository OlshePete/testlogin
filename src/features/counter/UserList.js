import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';
import { TextField } from '@material-ui/core';
import styles from './UserList.module.css';
// import { getUsers, setUsers } from './counterSlice';


export default function UsersList() {

  const columns = [
    {
      name: 'User ID',
      selector: 'id',
      sortable: true,

      editable: true,
    },
    {
      name: 'User Name',
      selector: 'username',

      editable: true,
    },
    {
      name: 'First Name',
      selector: 'first_name',

      editable: true,
    },
    {
      name: 'Last Name',
      selector: 'last_name',

      editable: true,
    },
  ];
  const dispatch = useDispatch();


  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  const users = useSelector((state) => state.counter.users);
  debugger
  let usersSorted = [...data].sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))

  console.log("filter by - ", q);

  useEffect(() => {
    q === "" ? setDataState() : setData(usersSorted);
  });

  const setDataState = () => {
    setData(users);
  }

  let filterUsers = (usersForSort) => {
    return usersForSort.filter(function (el) {
      return el.username.toLowerCase().indexOf(q) > -1;
    })
  }


  const changeSearchValue = (e) => {
    setQ(e.target.value);
  }

  return (
    <div className={styles.content}>
      <div className="wrapper">
        <TextField label="search" margin="normal" variant="outlined" onChange={changeSearchValue} />
        <DataTable
          columns={columns}
          data={filterUsers(usersSorted)}
        />
      </div>
    </div>
  )
}