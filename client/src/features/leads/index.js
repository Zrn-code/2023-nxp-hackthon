import moment from "moment"
import { useEffect } from "react"
//import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getLeadsContent } from "./leadSlice"
//import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'
import { DOSE_RESTORAGE } from '../../utils/dummyData'
import { useState } from "react"
/*
const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({title : "Add New Lead", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
    }
    
    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button>
        </div>
    )
}
*/

function Leads(){
    const [dose, setDose] = useState(DOSE_RESTORAGE)

//    const {leads } = useSelector(state => state.lead)
//    const dispatch = useDispatch()
/*
    useEffect(() => {
        dispatch(getLeadsContent())
    }, [])

  

    const getDummyStatus = (index) => {
        if(index % 5 === 0)return <div className="badge">Not Interested</div>
        else if(index % 5 === 1)return <div className="badge badge-primary">In Progress</div>
        else if(index % 5 === 2)return <div className="badge badge-secondary">Sold</div>
        else if(index % 5 === 3)return <div className="badge badge-accent">Need Followup</div>
        else return <div className="badge badge-ghost">Open</div>
    }

    const deleteCurrentLead = (index) => {
        dispatch(openModal({title : "Confirmation", bodyType : MODAL_BODY_TYPES.CONFIRMATION, 
        extraObject : { message : `Are you sure you want to delete this lead?`, type : CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index}}))
    }*/

    return(
        <>
            
            <TitleCard title="Restorage" topMargin="mt-2">

                {/* Leads List in table format loaded from slice after api call */}
            <div className="overflow-x-auto w-full">
                
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Put In</th>
                        <th>Expire</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            dose.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>{l.name}</td>
                                    <td>{l.amount}</td>
                                    <td>{l.store}</td>
                                    <td>{l.expire}</td>

                                    {/*<td><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(k)}><TrashIcon className="w-5"/></button></td>*/}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Leads