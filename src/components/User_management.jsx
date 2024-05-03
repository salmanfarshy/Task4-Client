import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest.js";
import TopBar from "../topBar.jsx";
import Users_table from "../Users_table.jsx";

function User_management() {
  const [user, setUser] = useState("");
  const dataReceived = window.history.state?.data;
  const [isRender, setIsRender] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const res = await apiRequest.get("/checkUser");
      console.log(res.data);
      if (!res.data?.Id) {
        return navigate("/login");
      }
      setUser(res.data?.name);
      const usersRes = await apiRequest.get("/users");
      setUsers(usersRes.data);
      console.log(users);
    };
    checkUser();
    setIsRender(true);
  }, []);

  const handleAllCheckboxChange = async () => {
    //check tuhe user authenticated or not
    const res = await apiRequest.get("/checkUser");
    console.log(res.data);
    if (!res.data.Id) {
      return navigate("/login");
    }

    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    if (newSelectAll) {
      // Select all items
      setSelectedItems(users.map((user) => user.userId));
      console.log(selectedItems);
    } else {
      // Deselect all items
      setSelectedItems([]);
      console.log(selectedItems);
    }
  };

  const handleCheckboxChange = async (event) => {
    const { value, checked } = event.target;
    console.log(value);

    if (checked) {
      // Add item to selectedItems
      setSelectedItems([...selectedItems, value]);
      console.log(selectedItems);
      //check tuhe user authenticated or not
      const res = await apiRequest.get("/checkUser");
      console.log(res.data);
      if (!res.data.Id) {
        return navigate("/login");
      }
    } else {
      // Remove item from selectedItems
      setSelectedItems(selectedItems.filter((item) => item !== value));
      console.log(selectedItems);
    }
  };

  const deleteUsers = async () => {
    const result = await apiRequest.get("/checkUser");
    console.log(result.data);
    if (!result.data.Id) {
      return navigate("/login");
    }
    if (!selectedItems.length) {
      return;
    }

    const res = await apiRequest.delete("/deleteUsers", {
      data: selectedItems,
    });
    console.log(res);
    alert(res.data);

    if (res.status === 200) {
      const usersRes = await apiRequest.get("/users");
      setUsers(usersRes.data);
      setSelectedItems([]);
      setSelectAll(false);
    }
  };

  const BlockOrUnblock = async (param) => {
    const result = await apiRequest.get("/checkUser");
    console.log(result.data);
    if (!result.data.Id) {
      return navigate("/login");
    }
    if (!selectedItems.length) {
      return;
    }

    const res = await apiRequest.patch("/blockOrUnblockUsers", {
      selectedItems,
      status: param,
    });
    console.log(res);
    alert(res.data);

    if (res.status === 200) {
      const usersRes = await apiRequest.get("/users");
      setUsers(usersRes.data);
      setSelectedItems([]);
      setSelectAll(false);
    }
  };

  const Logout = async () => {
    const res = await apiRequest.post("/logout", {
      data: dataReceived?.LoginTime,
    });
    return navigate("/login");
  };

  return (
    <>
      {isRender && (
        <section className="w-screen">
          {/* topBar */}
          <TopBar
            BlockOrUnblock={BlockOrUnblock}
            deleteUsers={deleteUsers}
            Logout={Logout}
            user={user}
          />

          {/* users record table */}
          <Users_table
            selectAll={selectAll}
            selectedItems={selectedItems}
            users={users}
            handleAllCheckboxChange={handleAllCheckboxChange}
            handleCheckboxChange={handleCheckboxChange}
          />

          {/*Copy right check*/}
          <div className="w-full fixed bottom-2 text-center text-sm font-medium text-slate-500 ">
            &copy; 2024 Salman Farshy
          </div>
        </section>
      )}
    </>
  );
}

export default User_management;
