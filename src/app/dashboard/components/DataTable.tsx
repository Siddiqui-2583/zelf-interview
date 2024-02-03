import moment from "moment";
import React, { useEffect, useState } from "react";
import Platform from "./Platform";

type TDataTableProps = {
  data: any[];
};

function prepareData(data: any[]) {
  const result = data.map((item) => {
    return {
      date: moment(item.content?.timestamp).format("MMM DD") ,
      video: item?.content?.title ,
      creator: item?.creator?.username,
      platform: item?.creator?.platform,
      totalViews: item?.content?.views,
      totalEngagement: item?.content?.total_engagement,
      engagementRate:
        `${((item?.content?.engagement_of_views /
        item?.content?.engagement_of_followers)*100).toFixed(1)}%`,
    };
  });
  console.log('result:', result);
  return result;
}



export default function DataTable({ data }: TDataTableProps) {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [preparedData, setPreparedData] = useState<any>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (data && data?.length > 0) {
      console.log("data", prepareData(data));
      setPreparedData(prepareData(data));
    }
  }, [data]);

  //   useEffect(()=>{
  //     console.log("prepareData",prepareData)
  //   },[prepareData])

  const openModal = (item: any) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <div>
      {preparedData && preparedData.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Video</th>
              <th>Creator</th>
              <th>Platform</th>
              <th>Total views</th>
              <th>Total Engagement</th>
              <th>Engagement rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {preparedData.map((item:any) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.video.length > 10
                    ? `${item.video.substring(0, 10)}..`
                    : item.video}</td>
                <td>{item.creator}</td>
                <td><Platform platform={item.platform} /></td>
                <td>{item.totalViews}</td>
                <td>{item.totalEngagement}</td>
                <td>{item.engagementRate}</td>
                <td>
                  <button className="view-post" onClick={() => openModal(item)}>View post</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>Post Details</h2>
          <p>Date: {selectedItem?.date}</p>
          <p>Video: {selectedItem?.video}</p>
          <p>Creator: {selectedItem?.creator}</p>
          <p>Platform: {selectedItem?.platform}</p>
          <p>Total views: {selectedItem?.totalViews}</p>
          <p>Total engagement: {selectedItem?.totalEngagement}</p>
          <p>Engagement rate: {selectedItem?.engagementRate}</p>
        </div>
      </div>
    )}
  </div>
  );
}
