import { CustomOverlayMap, Map, ZoomControl } from "react-kakao-maps-sdk";
import "./MapView.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

const { kakao } = window;
export default function MapView () {
  const { locations, setSelectLocationName } = useContext(AppContext);
  const [centerMarker, setCenterMarker] = useState({
    lat: 0,
    lng: 0
  });

  const navigate = useNavigate();

  const geocoder = new window.kakao.maps.services.Geocoder();
  const getLocationByAddress = async (address) => {
    geocoder.addressSearch(address, (result, status) => {
      if(status === kakao.maps.services.Status.OK) {
        const coord = new kakao.maps.LatLng(result[0].y, result[0].x);
        setCenterMarker({
          lat: coord.Ma,
          lng: coord.La
        })
      };
    });
  };

  const onClickDetailBtn = (location) => {
    setSelectLocationName(location.locationName);
    navigate(`locations/${location.locationId}`);
  };

  useEffect(() => {
    getLocationByAddress('강원');
  }, []);

  return (
    <div className="mapArea">
      <Map
        className="map"
        center={centerMarker}
        level={11}
      >
          {locations.map((location, index) => (
            <CustomOverlayMap
              position={{
                lat: location.latitude,
                lng: location.longitude,
              }}
            >
              <div className="locationMarker" key={index}>
                <img alt={location.locationName} src={location.thumbnail}></img>
                <div className="locationCnt">
                  <div className="detail">
                    <span className="location">{location.locationName}</span>
                    {/* <div className="detailSpot">
                      <svg className="spotIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18.75 20.625H15.0684C15.5541 20.1562 16.0763 19.6209 16.5994 19.0191C19.2328 15.9909 20.625 12.7847 20.625 9.75C20.625 7.46251 19.7163 5.26871 18.0988 3.6512C16.4813 2.0337 14.2875 1.125 12 1.125C9.71251 1.125 7.51871 2.0337 5.9012 3.6512C4.2837 5.26871 3.375 7.46251 3.375 9.75C3.375 14.4375 6.57375 18.3694 8.92313 20.625H5.25C4.95163 20.625 4.66548 20.7435 4.4545 20.9545C4.24353 21.1655 4.125 21.4516 4.125 21.75C4.125 22.0484 4.24353 22.3345 4.4545 22.5455C4.66548 22.7565 4.95163 22.875 5.25 22.875H18.75C19.0484 22.875 19.3345 22.7565 19.5455 22.5455C19.7565 22.3345 19.875 22.0484 19.875 21.75C19.875 21.4516 19.7565 21.1655 19.5455 20.9545C19.3345 20.7435 19.0484 20.625 18.75 20.625ZM5.625 9.75C5.625 8.05925 6.29665 6.43774 7.49219 5.24219C8.68774 4.04665 10.3092 3.375 12 3.375C13.6908 3.375 15.3123 4.04665 16.5078 5.24219C17.7034 6.43774 18.375 8.05925 18.375 9.75C18.375 12.8728 16.5 15.6909 14.9344 17.5041C14.0405 18.5308 13.0586 19.4776 12 20.3334C10.9414 19.4776 9.9595 18.5308 9.06562 17.5041C7.5 15.6909 5.625 12.8728 5.625 9.75ZM12 13.875C12.8158 13.875 13.6134 13.6331 14.2917 13.1798C14.9701 12.7266 15.4988 12.0823 15.811 11.3286C16.1232 10.5748 16.2049 9.74542 16.0457 8.94525C15.8866 8.14508 15.4937 7.41008 14.9168 6.83318C14.3399 6.25629 13.6049 5.86342 12.8047 5.70426C12.0046 5.5451 11.1752 5.62679 10.4214 5.939C9.66769 6.25121 9.02345 6.77992 8.57019 7.45827C8.11693 8.13663 7.875 8.93415 7.875 9.75C7.87624 10.8436 8.31124 11.8921 9.08455 12.6654C9.85787 13.4388 10.9064 13.8738 12 13.875ZM12 7.875C12.3708 7.875 12.7334 7.98497 13.0417 8.19099C13.35 8.39702 13.5904 8.68986 13.7323 9.03247C13.8742 9.37508 13.9113 9.75208 13.839 10.1158C13.7666 10.4795 13.588 10.8136 13.3258 11.0758C13.0636 11.338 12.7295 11.5166 12.3658 11.589C12.0021 11.6613 11.6251 11.6242 11.2825 11.4823C10.9399 11.3404 10.647 11.1 10.441 10.7917C10.235 10.4834 10.125 10.1208 10.125 9.75C10.125 9.25272 10.3225 8.77581 10.6742 8.42417C11.0258 8.07254 11.5027 7.875 12 7.875Z" fill="#1D2024"/>
                      </svg>
                      <span className="spot">245 spots</span>
                    </div> */}
                  </div>
                  <svg className="detailBtn" onClick={() => onClickDetailBtn(location)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.57129 9.79321L15.9629 9.79321" stroke="black"/>
                    <path d="M10.9211 4.28564L16.4285 9.79301L10.9211 15.3004" stroke="black"/>
                  </svg>
                </div>
              </div>
            </CustomOverlayMap>
          ))}
        <ZoomControl position={"right"} />
      </Map>
    </div>
  );
};