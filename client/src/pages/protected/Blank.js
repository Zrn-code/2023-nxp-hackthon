import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import TitleCard from "../../components/Cards/TitleCard"
import DocumentIcon  from '@heroicons/react/24/solid/DocumentIcon'
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from '../../App'

import { useState } from "react";
function InternalPage() {
  const dispatch = useDispatch();
  const [medi_data, setData] = useState(null); // 初始化数据状态为null

  useEffect(() => {
    dispatch(setPageTitle({ title: "AI Demo" }));
  }, []);

  useEffect(() => {
  const starCountRef = ref(database, '/');

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    setData(data);
    //setData(data); // 更新数据状态
  });
  },[]);

  return (
    <>
      <TitleCard title="AI Compute Result" topMargin="mt-2">
        
        {medi_data ? <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box text-xl place-items-center font-extrabold">{medi_data["med"]}</div>
          <div className="divider"></div>
          <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center">{medi_data["request"].split('\n').map((part, index) => (
              <div className='mt-2' key={index}>{part}</div>
            ))}</div>
        </div>: <div>loading...</div>}
      </TitleCard>
    </>
  );
}

export default InternalPage;