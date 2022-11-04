import Dropdown from "../Dropdown/Dropdown";
import DropdownUl from "../DropdownUl/DropdownUl";
import cnftArray from "../CNFTProjectData";
import axios from "axios";
import React, { useState } from "react";
import Input from "../Input/Input";
import '../Project/Project.css'

function Project(props) {


    /* Two empty arrays that will contain the dropdown components */
    const projectList = [];
    const projectListUl = [];

    const [floor, setFloor] = useState('Change Project')
    const [floorType, setFloorType] = useState('')
    const [img, setImg] = useState('')

    for (let x of cnftArray) {
        projectList.push(<Dropdown key={x.id} idDropdown={x.projectID} textDropdown={x.project} valueDropdown={x.policyID}></Dropdown>);
    }

    for (let i of cnftArray) {
        projectListUl.push(<DropdownUl key={i.id} forDropdown={i.projectID} textDropdown={i.project}></DropdownUl>);
    }

    const ChangeProject = (e) => {
        const selectedPolicy = e.target.value;
        console.log(selectedPolicy)
        const config = { headers: { Accept: "application/json" } };

        const params = {
            policy: selectedPolicy,
        }
        axios.get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
            .then(res => {
                const floor = (res.data.floor_price /= Math.pow(10, 6)) + ' ADA';
                const editImg = res.data.thumbnail.slice(12)
                const pic = `ipfs.io/ipfs/${editImg}`;
                setImg(pic);
                setFloor(floor);
                console.log(res.data)
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="project-container">
            <div className='input-row'>
                <label className='input-label' htmlFor='project'>Project</label>
                <div className='select-options-container'>
                    <div onClick={ChangeProject} className='select-options-div-box' tabIndex='1'>
                        {projectList}
                        <img className="select-icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                    </div>
                    <ul className='select-list'>
                        <div className='list-container'>
                            {projectListUl}
                        </div>
                    </ul>
                </div>
            </div>
            <Input className='input' title='Floor Price' name='borrow-floor-price' readonly id='floor-price' type={floorType} value={floor}></Input>
        </div>

    )
}

export default Project;