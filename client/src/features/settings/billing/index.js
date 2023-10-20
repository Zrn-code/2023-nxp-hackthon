import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'



const HISOTRYS = [
    {amount : "23,989", description : "Product usages", status : "Pending", generatedOn : moment(new Date()).add(-30*1, 'days').format("DD MMM YYYY"),  paidOn : "-"},

    {amount : "34,989", description : "Product usages", status : "Pending", generatedOn : moment(new Date()).add(-30*2, 'days').format("DD MMM YYYY"), paidOn : "-"},

    {amount : "39,989", description : "Product usages", status : "Taken", generatedOn : moment(new Date()).add(-30*3, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*2, 'days').format("DD MMM YYYY")},

    {amount : "28,927", description : "Product usages", status : "Taken", generatedOn : moment(new Date()).add(-30*4, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*3, 'days').format("DD MMM YYYY")},

    {amount : "28,927", description : "Product usages", status : "Taken", generatedOn : moment(new Date()).add(-30*5, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*4, 'days').format("DD MMM YYYY")},

    {amount : "28,927", description : "Product usages", status : "Taken", generatedOn : moment(new Date()).add(-30*6, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*5, 'days').format("DD MMM YYYY")},

    {amount : "28,927", description : "Product usages", status : "Taken", generatedOn : moment(new Date()).add(-30*7, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*6, 'days').format("DD MMM YYYY")},

    {amount : "28,927", description : "Product usages", status : "Taken", generatedOn : moment(new Date()).add(-30*8, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*7, 'days').format("DD MMM YYYY")},


]

function Billing(){


    const [bills, setBills] = useState(HISOTRYS)

    const getPaymentStatus = (status) => {
        if(status  === "Taken")return <div className="badge badge-success">{status}</div>
        if(status  === "Pending")return <div className="badge badge-primary">{status}</div>
        else return <div className="badge badge-ghost">{status}</div>
    }

    return(
        <>
            
            <TitleCard title="Medicine History" topMargin="mt-2">

                {/* Invoice list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Invoice Generated On</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Invoice Taken On</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map((l, k) => {
                                return(
                                    <tr key={k}>
                                        <td>{l.generatedOn}</td>
                                        <td>{l.description}</td>
                                        <td>${l.amount}</td>
                                        <td>{getPaymentStatus(l.status)}</td>
                                        <td>{l.paidOn}</td>
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


export default Billing