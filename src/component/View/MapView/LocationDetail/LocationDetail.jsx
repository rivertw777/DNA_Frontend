import { useContext } from "react"
import { AppContext } from "../../../../context/AppContext"
import "./LocationDetail.css";
import OpenChat from "./OpenChat/OpenChat";

export default function LocationDetail () {
  const { setMapStep, selectLocation } = useContext(AppContext);

  return (
    <div className="locationDetail">
      <div className="header">
        <svg onClick={() => setMapStep(1)} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M23 13.7104L5.65181 13.7104" stroke="black" strokeWidth="1.5"/>
          <path d="M12.7102 21.4207L4.9999 13.7103L12.7102 6.00004" stroke="black" strokeWidth="1.5"/>
        </svg>
        <span>All</span>
      </div>

      <div className="title">
        <span>{selectLocation}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
          <path d="M5 14.2102L22.3482 14.2102" stroke="black" strokeWidth="1.5"/>
          <path d="M15.2898 6.5L23.0001 14.2103L15.2898 21.9206" stroke="black" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="detail">
        <div className="item">
          <svg className="detailIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.375 3.125V1.25C9.375 1.08424 9.44085 0.925268 9.55806 0.808058C9.67527 0.690848 9.83424 0.625 10 0.625C10.1658 0.625 10.3247 0.690848 10.4419 0.808058C10.5592 0.925268 10.625 1.08424 10.625 1.25V3.125C10.625 3.29076 10.5592 3.44973 10.4419 3.56694C10.3247 3.68415 10.1658 3.75 10 3.75C9.83424 3.75 9.67527 3.68415 9.55806 3.56694C9.44085 3.44973 9.375 3.29076 9.375 3.125ZM10 5C9.01109 5 8.04439 5.29324 7.22215 5.84265C6.3999 6.39206 5.75904 7.17295 5.3806 8.08658C5.00216 9.00021 4.90315 10.0055 5.09607 10.9755C5.289 11.9454 5.7652 12.8363 6.46447 13.5355C7.16373 14.2348 8.05464 14.711 9.02455 14.9039C9.99445 15.0969 10.9998 14.9978 11.9134 14.6194C12.827 14.241 13.6079 13.6001 14.1573 12.7778C14.7068 11.9556 15 10.9889 15 10C14.9986 8.67436 14.4713 7.40343 13.5339 6.46606C12.5966 5.5287 11.3256 5.00145 10 5ZM4.55781 5.44219C4.67509 5.55946 4.83415 5.62535 5 5.62535C5.16585 5.62535 5.32491 5.55946 5.44219 5.44219C5.55946 5.32491 5.62535 5.16585 5.62535 5C5.62535 4.83415 5.55946 4.67509 5.44219 4.55781L4.19219 3.30781C4.07491 3.19054 3.91585 3.12465 3.75 3.12465C3.58415 3.12465 3.42509 3.19054 3.30781 3.30781C3.19054 3.42509 3.12465 3.58415 3.12465 3.75C3.12465 3.91585 3.19054 4.07491 3.30781 4.19219L4.55781 5.44219ZM4.55781 14.5578L3.30781 15.8078C3.19054 15.9251 3.12465 16.0841 3.12465 16.25C3.12465 16.4159 3.19054 16.5749 3.30781 16.6922C3.42509 16.8095 3.58415 16.8753 3.75 16.8753C3.91585 16.8753 4.07491 16.8095 4.19219 16.6922L5.44219 15.4422C5.50026 15.3841 5.54632 15.3152 5.57775 15.2393C5.60917 15.1634 5.62535 15.0821 5.62535 15C5.62535 14.9179 5.60917 14.8366 5.57775 14.7607C5.54632 14.6848 5.50026 14.6159 5.44219 14.5578C5.38412 14.4997 5.31518 14.4537 5.23931 14.4223C5.16344 14.3908 5.08212 14.3747 5 14.3747C4.91788 14.3747 4.83656 14.3908 4.76069 14.4223C4.68482 14.4537 4.61588 14.4997 4.55781 14.5578ZM15 5.625C15.0821 5.62506 15.1634 5.60895 15.2393 5.57758C15.3152 5.54622 15.3841 5.50021 15.4422 5.44219L16.6922 4.19219C16.8095 4.07491 16.8753 3.91585 16.8753 3.75C16.8753 3.58415 16.8095 3.42509 16.6922 3.30781C16.5749 3.19054 16.4159 3.12465 16.25 3.12465C16.0841 3.12465 15.9251 3.19054 15.8078 3.30781L14.5578 4.55781C14.4703 4.64522 14.4107 4.75663 14.3865 4.87793C14.3624 4.99924 14.3748 5.12498 14.4221 5.23924C14.4695 5.35351 14.5496 5.45116 14.6525 5.51982C14.7554 5.58849 14.8763 5.6251 15 5.625ZM15.4422 14.5578C15.3249 14.4405 15.1659 14.3747 15 14.3747C14.8341 14.3747 14.6751 14.4405 14.5578 14.5578C14.4405 14.6751 14.3747 14.8341 14.3747 15C14.3747 15.1659 14.4405 15.3249 14.5578 15.4422L15.8078 16.6922C15.8659 16.7503 15.9348 16.7963 16.0107 16.8277C16.0866 16.8592 16.1679 16.8753 16.25 16.8753C16.3321 16.8753 16.4134 16.8592 16.4893 16.8277C16.5652 16.7963 16.6341 16.7503 16.6922 16.6922C16.7503 16.6341 16.7963 16.5652 16.8277 16.4893C16.8592 16.4134 16.8753 16.3321 16.8753 16.25C16.8753 16.1679 16.8592 16.0866 16.8277 16.0107C16.7963 15.9348 16.7503 15.8659 16.6922 15.8078L15.4422 14.5578ZM3.75 10C3.75 9.83424 3.68415 9.67527 3.56694 9.55806C3.44973 9.44085 3.29076 9.375 3.125 9.375H1.25C1.08424 9.375 0.925268 9.44085 0.808058 9.55806C0.690848 9.67527 0.625 9.83424 0.625 10C0.625 10.1658 0.690848 10.3247 0.808058 10.4419C0.925268 10.5592 1.08424 10.625 1.25 10.625H3.125C3.29076 10.625 3.44973 10.5592 3.56694 10.4419C3.68415 10.3247 3.75 10.1658 3.75 10ZM10 16.25C9.83424 16.25 9.67527 16.3158 9.55806 16.4331C9.44085 16.5503 9.375 16.7092 9.375 16.875V18.75C9.375 18.9158 9.44085 19.0747 9.55806 19.1919C9.67527 19.3092 9.83424 19.375 10 19.375C10.1658 19.375 10.3247 19.3092 10.4419 19.1919C10.5592 19.0747 10.625 18.9158 10.625 18.75V16.875C10.625 16.7092 10.5592 16.5503 10.4419 16.4331C10.3247 16.3158 10.1658 16.25 10 16.25ZM18.75 9.375H16.875C16.7092 9.375 16.5503 9.44085 16.4331 9.55806C16.3158 9.67527 16.25 9.83424 16.25 10C16.25 10.1658 16.3158 10.3247 16.4331 10.4419C16.5503 10.5592 16.7092 10.625 16.875 10.625H18.75C18.9158 10.625 19.0747 10.5592 19.1919 10.4419C19.3092 10.3247 19.375 10.1658 19.375 10C19.375 9.83424 19.3092 9.67527 19.1919 9.55806C19.0747 9.44085 18.9158 9.375 18.75 9.375Z" fill="#1D2024"/>
          </svg>
          <span>Now 30℃/60℉</span>
        </div>
        <div className="item">
          <svg className="detailIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13.5006 19.1247C13.5006 19.4214 13.4126 19.7114 13.2478 19.9581C13.0829 20.2047 12.8487 20.397 12.5746 20.5105C12.3005 20.6241 11.9989 20.6538 11.7079 20.5959C11.417 20.538 11.1497 20.3951 10.9399 20.1854C10.7301 19.9756 10.5873 19.7083 10.5294 19.4173C10.4715 19.1264 10.5012 18.8248 10.6147 18.5507C10.7283 18.2766 10.9205 18.0423 11.1672 17.8775C11.4139 17.7127 11.7039 17.6247 12.0006 17.6247C12.3984 17.6247 12.7799 17.7827 13.0612 18.064C13.3425 18.3454 13.5006 18.7269 13.5006 19.1247ZM22.464 7.86627C19.5138 5.44664 15.8161 4.12427 12.0006 4.12427C8.185 4.12427 4.48736 5.44664 1.53712 7.86627C1.42294 7.96002 1.32833 8.07535 1.25871 8.20566C1.18909 8.33597 1.14582 8.47872 1.13137 8.62576C1.11692 8.77279 1.13157 8.92124 1.17449 9.06261C1.21741 9.20398 1.28775 9.33552 1.3815 9.44971C1.47525 9.5639 1.59058 9.6585 1.72089 9.72812C1.8512 9.79774 1.99395 9.84101 2.14099 9.85546C2.28802 9.86991 2.43647 9.85526 2.57784 9.81234C2.71921 9.76943 2.85075 9.69908 2.96494 9.60533C5.51272 7.51616 8.70574 6.37441 12.0006 6.37441C15.2954 6.37441 18.4884 7.51616 21.0362 9.60533C21.1504 9.69908 21.2819 9.76943 21.4233 9.81234C21.5647 9.85526 21.7131 9.86991 21.8601 9.85546C22.0072 9.84101 22.1499 9.79774 22.2802 9.72812C22.4105 9.6585 22.5259 9.5639 22.6196 9.44971C22.7134 9.33552 22.7837 9.20398 22.8266 9.06261C22.8696 8.92124 22.8842 8.77279 22.8698 8.62576C22.8553 8.47872 22.812 8.33597 22.7424 8.20566C22.6728 8.07535 22.5782 7.96002 22.464 7.86627ZM19.449 11.216C17.329 9.53766 14.7044 8.62451 12.0006 8.62451C9.2967 8.62451 6.67208 9.53766 4.55212 11.216C4.32411 11.4031 4.17873 11.6723 4.14729 11.9656C4.11585 12.2589 4.20087 12.5529 4.38403 12.7841C4.5672 13.0153 4.83385 13.1653 5.12656 13.2019C5.41927 13.2384 5.71462 13.1585 5.949 12.9794C7.67141 11.6159 9.8038 10.8741 12.0006 10.8741C14.1973 10.8741 16.3297 11.6159 18.0521 12.9794C18.2865 13.1585 18.5819 13.2384 18.8746 13.2019C19.1673 13.1653 19.4339 13.0153 19.6171 12.7841C19.8003 12.5529 19.8853 12.2589 19.8538 11.9656C19.8224 11.6723 19.677 11.4031 19.449 11.216ZM16.4134 14.5591C15.1309 13.6268 13.5861 13.1246 12.0006 13.1246C10.415 13.1246 8.87022 13.6268 7.58775 14.5591C7.34657 14.7349 7.1851 14.9993 7.13886 15.2941C7.09262 15.589 7.1654 15.8901 7.34119 16.1313C7.51698 16.3725 7.78137 16.5339 8.07622 16.5802C8.37106 16.6264 8.67219 16.5536 8.91337 16.3778C9.81057 15.7256 10.8913 15.3742 12.0006 15.3742C13.1098 15.3742 14.1906 15.7256 15.0877 16.3778C15.2072 16.4649 15.3426 16.5275 15.4862 16.5623C15.6298 16.597 15.7789 16.6031 15.9249 16.5802C16.0709 16.5573 16.211 16.5058 16.3371 16.4288C16.4632 16.3518 16.5729 16.2507 16.6599 16.1313C16.747 16.0119 16.8096 15.8765 16.8444 15.7328C16.8791 15.5892 16.8852 15.4401 16.8623 15.2941C16.8394 15.1481 16.7879 15.0081 16.7109 14.882C16.6339 14.7558 16.5328 14.6461 16.4134 14.5591Z" fill="black"/>
          </svg>
          <span className="detailCtn">67Mbps <span className="bold">Fast</span></span>
        </div>
        <div className="item">
          <svg className="detailIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.375 1.25V0.625C9.375 0.45924 9.44085 0.300269 9.55806 0.183058C9.67527 0.065848 9.83424 0 10 0C10.1658 0 10.3247 0.065848 10.4419 0.183058C10.5592 0.300269 10.625 0.45924 10.625 0.625V1.25C10.625 1.41576 10.5592 1.57473 10.4419 1.69194C10.3247 1.80915 10.1658 1.875 10 1.875C9.83424 1.875 9.67527 1.80915 9.55806 1.69194C9.44085 1.57473 9.375 1.41576 9.375 1.25ZM15.625 3.75C15.7071 3.75006 15.7884 3.73395 15.8643 3.70259C15.9402 3.67122 16.0091 3.62521 16.0672 3.56719L16.6922 2.94219C16.8095 2.82491 16.8753 2.66585 16.8753 2.5C16.8753 2.33415 16.8095 2.17509 16.6922 2.05781C16.5749 1.94054 16.4159 1.87465 16.25 1.87465C16.0841 1.87465 15.9251 1.94054 15.8078 2.05781L15.1828 2.68281C15.0953 2.77022 15.0357 2.88163 15.0115 3.00293C14.9874 3.12424 14.9998 3.24998 15.0471 3.36424C15.0945 3.47851 15.1746 3.57616 15.2775 3.64483C15.3804 3.71349 15.5013 3.7501 15.625 3.75ZM3.93281 3.56719C3.99088 3.62526 4.05982 3.67132 4.13569 3.70275C4.21156 3.73417 4.29288 3.75035 4.375 3.75035C4.45712 3.75035 4.53844 3.73417 4.61431 3.70275C4.69018 3.67132 4.75912 3.62526 4.81719 3.56719C4.87526 3.50912 4.92132 3.44018 4.95275 3.36431C4.98417 3.28844 5.00035 3.20712 5.00035 3.125C5.00035 3.04288 4.98417 2.96156 4.95275 2.88569C4.92132 2.80982 4.87526 2.74088 4.81719 2.68281L4.19219 2.05781C4.07491 1.94054 3.91585 1.87465 3.75 1.87465C3.58415 1.87465 3.42509 1.94054 3.30781 2.05781C3.19054 2.17509 3.12465 2.33415 3.12465 2.5C3.12465 2.66585 3.19054 2.82491 3.30781 2.94219L3.93281 3.56719ZM18.125 13.75V15.625C18.125 15.9565 17.9933 16.2745 17.7589 16.5089C17.5245 16.7433 17.2065 16.875 16.875 16.875H3.125C2.79348 16.875 2.47554 16.7433 2.24112 16.5089C2.0067 16.2745 1.875 15.9565 1.875 15.625V13.75C1.875 13.4185 2.0067 13.1005 2.24112 12.8661C2.47554 12.6317 2.79348 12.5 3.125 12.5V10C3.12497 9.09274 3.30452 8.19445 3.65329 7.3569C4.00206 6.51936 4.51315 5.75913 5.15711 5.12004C5.80107 4.48095 6.56515 3.97564 7.40532 3.63323C8.24548 3.29082 9.14511 3.11809 10.0523 3.125C13.8141 3.15313 16.875 6.27266 16.875 10.0781V12.5C17.2065 12.5 17.5245 12.6317 17.7589 12.8661C17.9933 13.1005 18.125 13.4185 18.125 13.75ZM10.5219 6.86641C12.0055 7.11562 13.125 8.4625 13.125 10C13.125 10.1658 13.1908 10.3247 13.3081 10.4419C13.4253 10.5592 13.5842 10.625 13.75 10.625C13.9158 10.625 14.0747 10.5592 14.1919 10.4419C14.3092 10.3247 14.375 10.1658 14.375 10C14.375 7.85938 12.807 5.98203 10.7281 5.63359C10.6468 5.61922 10.5635 5.62109 10.4829 5.63911C10.4023 5.65712 10.3261 5.69092 10.2587 5.73856C10.1913 5.7862 10.1339 5.84672 10.09 5.91664C10.0461 5.98656 10.0165 6.06448 10.0029 6.14592C9.98923 6.22735 9.99187 6.31067 10.0106 6.39107C10.0294 6.47148 10.0639 6.54737 10.1122 6.61436C10.1604 6.68135 10.2215 6.73812 10.2918 6.78138C10.3621 6.82464 10.4403 6.85354 10.5219 6.86641ZM16.875 15.625V13.75H3.125V15.625H16.875Z" fill="#1D2024"/>
          </svg>
          <span className="detailCtn">Safety <span className="bold">High</span></span>
        </div>
        <div className="item">
          <svg className="detailIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.375 6.99766V6.5625C14.375 4.60312 11.4195 3.125 7.5 3.125C3.58047 3.125 0.625 4.60312 0.625 6.5625V9.6875C0.625 11.3195 2.67578 12.6164 5.625 13.0047V13.4375C5.625 15.3969 8.58047 16.875 12.5 16.875C16.4195 16.875 19.375 15.3969 19.375 13.4375V10.3125C19.375 8.69531 17.3891 7.39687 14.375 6.99766ZM4.375 11.4742C2.84453 11.0469 1.875 10.343 1.875 9.6875V8.58828C2.5125 9.03984 3.36641 9.40391 4.375 9.64844V11.4742ZM10.625 9.64844C11.6336 9.40391 12.4875 9.03984 13.125 8.58828V9.6875C13.125 10.343 12.1555 11.0469 10.625 11.4742V9.64844ZM9.375 15.2242C7.84453 14.7969 6.875 14.093 6.875 13.4375V13.1117C7.08047 13.1195 7.28828 13.125 7.5 13.125C7.80312 13.125 8.09922 13.1148 8.38984 13.0977C8.7127 13.2132 9.04156 13.3113 9.375 13.3914V15.2242ZM9.375 11.7383C8.75422 11.83 8.12751 11.8757 7.5 11.875C6.87248 11.8757 6.24578 11.83 5.625 11.7383V9.87969C6.2467 9.96069 6.87304 10.0009 7.5 10C8.12696 10.0009 8.7533 9.96069 9.375 9.87969V11.7383ZM14.375 15.4883C13.1316 15.6706 11.8684 15.6706 10.625 15.4883V13.625C11.2465 13.7085 11.8729 13.7503 12.5 13.75C13.127 13.7509 13.7533 13.7107 14.375 13.6297V15.4883ZM18.125 13.4375C18.125 14.093 17.1555 14.7969 15.625 15.2242V13.3984C16.6336 13.1539 17.4875 12.7898 18.125 12.3383V13.4375Z" fill="#1D2024"/>
          </svg>
          <span className="detailCtn">Cost of Food <span className="bold">$2.00</span></span>
        </div>
      </div>

      <div className="keyword">
        <span>quiet</span>
        <span>surfing</span>
        <span>quiet</span>
      </div>

      <OpenChat />
    </div>
  )
};