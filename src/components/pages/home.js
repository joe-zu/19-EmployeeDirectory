import React, { useState} from "react";
import StaffCard from "../StaffCard";
import Wrapper from "../Wrapper";
import Title from "../Title";
import staff from "../../staff.json";

function Home() {
    const [staffInfo, setStaffInfo] = useState({
        staff: staff
    })
    
    const handleSelect = event => {
        if(event.target.value === "All" || event.target.value === "View by Department"){
            setStaffInfo({...staffInfo, staff: staff});
        }
        else{
            const deptStaff = staff.filter(employee => employee.department === event.target.value);
            setStaffInfo({...staffInfo, staff: deptStaff});
        }

    }


        return (
            <Wrapper>
                <Title>Staff Directory</Title>

            <div className="row">
                <select 
                className="form-select" 
                aria-label="Default select example" 
                onChange={handleSelect}
                >
                <option defaultValue>View by Department</option>
                <option value="All">All</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Sales">Sales</option>
                <option value="Legal">Legal</option>
                <option value="Services">Services</option>
                </select>
            </div>

                <div className="row">
                {staffInfo.staff.map(employee => (
                    <StaffCard
                        id={employee.id}
                        key={employee.id}
                        name={employee.name}
                        image={employee.image}
                        role={employee.role}
                        department={employee.department}
                    />
                ))}
                </div>
            </Wrapper>
        );

}
export default Home;
