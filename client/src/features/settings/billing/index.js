import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'



const HISOTRYS = [
    {amount : "1", description : "Acetaminophen", status : "Waiting", generatedOn : moment(new Date()).add(-30*1, 'hours'),  paidOn : "-"},

    {amount : "1", description : "Acetaminophen", status : "Waiting", generatedOn : moment(new Date()).add(-30*2, 'hours'), paidOn : "-"},

    {amount : "1", description : "Acetaminophen", status : "Taken", generatedOn : moment(new Date()).add(-30*3, 'days'), paidOn : moment(new Date()).add(-24*2, 'days')},

    {amount : "1", description : "Acetaminophen", status : "Taken", generatedOn : moment(new Date()).add(-30*4, 'days'), paidOn : moment(new Date()).add(-24*3, 'days')},

    {amount : "1", description : "Acetaminophen", status : "Taken", generatedOn : moment(new Date()).add(-30*5, 'days'), paidOn : moment(new Date()).add(-24*4, 'days')},

    {amount : "1", description : "Acetaminophen", status : "Taken", generatedOn : moment(new Date()).add(-30*6, 'days'), paidOn : moment(new Date()).add(-24*5, 'days')},

    {amount : "1", description : "Acetaminophen", status : "Taken", generatedOn : moment(new Date()).add(-30*7, 'days'), paidOn : moment(new Date()).add(-24*6, 'days')},

    {amount : "1", description : "Acetaminophen", status : "Taken", generatedOn : moment(new Date()).add(-30*8, 'days'), paidOn : moment(new Date()).add(-24*7, 'days')},


]

function Billing(){


    const [bills, setBills] = useState(HISOTRYS)

    const getPaymentStatus = (status) => {
        if(status  === "Taken")return <div className="badge badge-success">{status}</div>
        if(status  === "Waiting")return <div className="badge badge-primary">{status}</div>
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
                        <th>Med Date</th>
                        <th>Med Time</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Take Date</th>
                        <th>Take Time</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map((l, k) => {
                                return(
                                    <tr key={k}>
                                        <td>{l.generatedOn.format("ll")}</td>
                                        <td>{l.generatedOn.format("LT")}</td>
                                        <td>{l.description}</td>
                                        <td>{l.amount}</td>
                                        <td>{getPaymentStatus(l.status)}</td>
                                        <td>{l.paidOn ==="-"?"-":l.paidOn.format("ll")}</td>
                                        <td>{l.paidOn ==="-"?"-":l.paidOn.format("LT")}</td>
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