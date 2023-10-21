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
    dispatch(setPageTitle({ title: "Page Title" }));
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
      <TitleCard title="Play Ground" topMargin="mt-2">
        {medi_data ? <div>{medi_data['med']}</div>: <div>loading...</div>}
      </TitleCard>
    </>
  );
}

export default InternalPage;