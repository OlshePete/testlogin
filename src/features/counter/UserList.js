import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';
import { TextField } from '@material-ui/core';
import { getUsers, setUsers } from './counterSlice';


export default function UsersList() {

  const columns = [
    {
      name: 'User ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'User Name',
      selector: 'username',
    },
    {
      name: 'First Name',
      selector: 'first_name',
    },
    {
      name: 'Last Name',
      selector: 'last_name',
    },
  ];
  const dispatch = useDispatch();
  const checkSuccess = useSelector((state) => state.counter.isSuccess);
  const users = useSelector((state) => state.counter.users);
  // const [data, setData] = useState([]);
  // const [q, setQ] = useState("");
  // console.log(`vmnvbnmvbnm 1 ${typeof (data)} 2 ${setData} 3 ${q} 4 ${setQ}`);

  useEffect(() => {
    dispatch(getUsers());
  }, []);


  let usersSorted = [...users].sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
  // let sortedValue = () => { return "t" };
  // console.log("before sort", users);
  // let usersSorted1 =usersSorted.filter(sortedValue)
  // console.log("after sort", usersSorted);

  const changeSearchValue = (e) => {
    const searchBy = e.target.value.toLowerCase();

    let filterUsers = (query) => {
      return usersSorted.filter(function (el) {
        return el.username.toLowerCase().indexOf(query) > -1;
      })
    }
    dispatch(setUsers(filterUsers(searchBy)));
  }

  return (
    <div className="content">
      <div className="wrapper">

        <h1>{"There are ", usersSorted.length, "users"}</h1>
        <TextField label="search" margin="normal" variant="outlined" onChange={changeSearchValue} />
        <DataTable

          title="table-title List of users from API"
          columns={columns}
          data={usersSorted}
        />
      </div>
    </div>
  )
}