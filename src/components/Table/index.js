import React from "react"
import moment from "moment"

const Table = (props) => {

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("data: ", props.employees)}
                    {props.employees.length > 0 ? props.employees.map((employee, i) => {
                        return (
                            <tr key={i}>
                            <th scope="row"><img src={employee.picture.thumbnail} /></th>
                            <td>{employee.name.first + " " + employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{moment(employee.dob.date, "YYYY-MM-DD").format("MM/DD/YYYY")}</td>
                        </tr>
                    
                        )
                    }) :  
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                     }    

                   
                      
                     
                </tbody>
            </table>
        </>
    );
}

export default Table;