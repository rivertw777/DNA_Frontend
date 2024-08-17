import Header from "../Header";

export default function Account () {
  return (
    <div className="Account"> 
      <Header />
      <div className="mypage">
        <div className="tit">
          <h2>Account</h2>
          <span>Update your profile and manage your account</span>
        </div>
        <div className="info">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M34.9375 24.375C34.9375 26.1427 34.4133 27.8706 33.4313 29.3404C32.4492 30.8102 31.0534 31.9557 29.4202 32.6322C27.7871 33.3086 25.9901 33.4856 24.2564 33.1408C22.5227 32.7959 20.9302 31.9447 19.6802 30.6948C18.4303 29.4448 17.5791 27.8523 17.2342 26.1186C16.8894 24.3849 17.0664 22.5879 17.7428 20.9548C18.4193 19.3217 19.5648 17.9258 21.0346 16.9437C22.5044 15.9617 24.2323 15.4375 26 15.4375C28.3696 15.4402 30.6413 16.3827 32.3168 18.0582C33.9923 19.7337 34.9348 22.0055 34.9375 24.375ZM47.125 26C47.125 30.1781 45.886 34.2624 43.5648 37.7364C41.2436 41.2104 37.9443 43.918 34.0842 45.517C30.2241 47.1159 25.9766 47.5342 21.8787 46.7191C17.7809 45.904 14.0168 43.892 11.0624 40.9376C8.10799 37.9832 6.09603 34.2191 5.28092 30.1213C4.46581 26.0234 4.88415 21.7759 6.48305 17.9158C8.08196 14.0557 10.7896 10.7564 14.2636 8.4352C17.7376 6.11396 21.8219 4.875 26 4.875C31.6009 4.88091 36.9707 7.10848 40.9311 11.0689C44.8915 15.0293 47.1191 20.3991 47.125 26ZM43.875 26C43.8724 23.594 43.3846 21.2133 42.4408 19.0002C41.497 16.7871 40.1166 14.7871 38.3821 13.1197C36.6476 11.4523 34.5947 10.1519 32.3461 9.29614C30.0974 8.44039 27.6993 8.0469 25.2952 8.13922C15.728 8.50891 8.0986 16.4775 8.12501 26.0508C8.13418 30.4089 9.74152 34.6122 12.6425 37.8645C13.8239 36.151 15.3247 34.6813 17.0625 33.5359C17.2107 33.4381 17.3868 33.3914 17.564 33.4032C17.7412 33.4149 17.9096 33.4844 18.0436 33.6009C20.2519 35.511 23.0741 36.5622 25.9939 36.5622C28.9137 36.5622 31.7359 35.511 33.9442 33.6009C34.0782 33.4844 34.2466 33.4149 34.4238 33.4032C34.601 33.3914 34.7772 33.4381 34.9253 33.5359C36.6654 34.6807 38.1682 36.1504 39.3514 37.8645C42.2667 34.6004 43.8772 30.3765 43.875 26Z" fill="black"/>
          </svg>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}