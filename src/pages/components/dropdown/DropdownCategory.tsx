import React from 'react'

export interface DropdownCategoryProps {

}
const DropdownCategory = (props: DropdownCategoryProps) => {
    return (
            <select name="" id="" className='px-5'>
                <option value="ALL" defaultChecked>ALL</option>
                <option value="HOME" >HOME</option>
                <option value="HOME" >Files & folders</option>
                <option value="HOME" >Editor</option>
                <option value="HOME" >Users</option>
                <option value="HOME" >Graphs & charts</option>
                <option value="HOME" >Devices</option>
                <option value="HOME" >Social Media</option>
                <option value="HOME" >Layout</option>
            </select>
    )
}

export default DropdownCategory
