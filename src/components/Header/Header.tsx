'use client';

import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectCartModule } from "@/redux/features/cart/selector";
import Link from "next/link";
import styles from './Header.module.css';

export const Header: FunctionComponent = () => {
  const cart = useSelector((state) => selectCartModule(state));

  let ticketsCount = 0;
  for (let key in cart) { ticketsCount += cart[key]; }

  return (
    <header className={styles.header}>
      <Link href="/">
        <svg width="194" height="24" viewBox="0 0 194 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9062 0.25V3.92188H4.67188V23H0V0.25H14.9062ZM3.0625 8.54688H8.375C10.1667 8.54688 11.7083 8.84375 13 9.4375C14.2917 10.0312 15.2865 10.8646 15.9844 11.9375C16.6823 13.0104 17.0312 14.2604 17.0312 15.6875C17.0312 16.7708 16.8333 17.7604 16.4375 18.6562C16.0417 19.5417 15.4635 20.3125 14.7031 20.9688C13.9531 21.6146 13.0469 22.1146 11.9844 22.4688C10.9219 22.8229 9.71875 23 8.375 23H0V0.25H4.70312V19.3438H8.375C9.27083 19.3438 10.0104 19.1771 10.5938 18.8438C11.1771 18.5104 11.6146 18.0677 11.9062 17.5156C12.2083 16.9531 12.3594 16.3333 12.3594 15.6562C12.3594 15.0104 12.2083 14.4271 11.9062 13.9062C11.6146 13.375 11.1771 12.9583 10.5938 12.6562C10.0104 12.3542 9.27083 12.2031 8.375 12.2031H3.0625V8.54688ZM23.8594 16.7188L29.5312 6.09375H34.0312V23H29.5312V12.3594L23.8594 23H19.3594V6.09375H23.8594V16.7188ZM48.875 6.09375V9.625H40.5625V6.09375H48.875ZM52.1719 6.09375V23H47.6719V6.09375H52.1719ZM39.4375 6.09375H43.8594L43.4062 14.625C43.3438 15.8438 43.2135 16.9167 43.0156 17.8438C42.8177 18.7708 42.5521 19.5625 42.2188 20.2188C41.8958 20.875 41.5052 21.4115 41.0469 21.8281C40.599 22.2344 40.0729 22.5312 39.4688 22.7188C38.875 22.9062 38.2188 23 37.5 23H36.125L36.0781 19.4531L36.6562 19.3906C36.9896 19.3594 37.2812 19.2656 37.5312 19.1094C37.7917 18.9427 38.0104 18.7083 38.1875 18.4062C38.375 18.0938 38.5312 17.7031 38.6562 17.2344C38.7812 16.7552 38.8802 16.1927 38.9531 15.5469C39.0365 14.901 39.0938 14.1562 39.125 13.3125L39.4375 6.09375ZM63.4375 23.3125C62.125 23.3125 60.9479 23.1042 59.9062 22.6875C58.8646 22.2604 57.9792 21.6719 57.25 20.9219C56.5312 20.1719 55.9792 19.3021 55.5938 18.3125C55.2083 17.3125 55.0156 16.25 55.0156 15.125V14.5C55.0156 13.2188 55.1979 12.0469 55.5625 10.9844C55.9271 9.92188 56.4479 9 57.125 8.21875C57.8125 7.4375 58.6458 6.83854 59.625 6.42188C60.6042 5.99479 61.7083 5.78125 62.9375 5.78125C64.1354 5.78125 65.1979 5.97917 66.125 6.375C67.0521 6.77083 67.8281 7.33333 68.4531 8.0625C69.0885 8.79167 69.5677 9.66667 69.8906 10.6875C70.2135 11.6979 70.375 12.8229 70.375 14.0625V15.9375H56.9375V12.9375H65.9531V12.5938C65.9531 11.9688 65.8385 11.4115 65.6094 10.9219C65.3906 10.4219 65.0573 10.026 64.6094 9.73438C64.1615 9.44271 63.5885 9.29688 62.8906 9.29688C62.2969 9.29688 61.7865 9.42708 61.3594 9.6875C60.9323 9.94792 60.5833 10.3125 60.3125 10.7812C60.0521 11.25 59.8542 11.8021 59.7188 12.4375C59.5938 13.0625 59.5312 13.75 59.5312 14.5V15.125C59.5312 15.8021 59.625 16.4271 59.8125 17C60.0104 17.5729 60.2865 18.0677 60.6406 18.4844C61.0052 18.901 61.4427 19.224 61.9531 19.4531C62.474 19.6823 63.0625 19.7969 63.7188 19.7969C64.5312 19.7969 65.2865 19.6406 65.9844 19.3281C66.6927 19.0052 67.3021 18.5208 67.8125 17.875L70 20.25C69.6458 20.7604 69.1615 21.25 68.5469 21.7188C67.9427 22.1875 67.2135 22.5729 66.3594 22.875C65.5052 23.1667 64.5312 23.3125 63.4375 23.3125ZM81.3594 6.09375V23H76.8438V6.09375H81.3594ZM86.7969 6.09375V9.57812H71.4844V6.09375H86.7969ZM87.8438 14.7188V14.3906C87.8438 13.151 88.0208 12.0104 88.375 10.9688C88.7292 9.91667 89.2448 9.00521 89.9219 8.23438C90.599 7.46354 91.4323 6.86458 92.4219 6.4375C93.4115 6 94.5469 5.78125 95.8281 5.78125C97.1094 5.78125 98.25 6 99.25 6.4375C100.25 6.86458 101.089 7.46354 101.766 8.23438C102.453 9.00521 102.974 9.91667 103.328 10.9688C103.682 12.0104 103.859 13.151 103.859 14.3906V14.7188C103.859 15.9479 103.682 17.0885 103.328 18.1406C102.974 19.1823 102.453 20.0938 101.766 20.875C101.089 21.6458 100.255 22.2448 99.2656 22.6719C98.276 23.099 97.1406 23.3125 95.8594 23.3125C94.5781 23.3125 93.4375 23.099 92.4375 22.6719C91.4479 22.2448 90.6094 21.6458 89.9219 20.875C89.2448 20.0938 88.7292 19.1823 88.375 18.1406C88.0208 17.0885 87.8438 15.9479 87.8438 14.7188ZM92.3438 14.3906V14.7188C92.3438 15.4271 92.4062 16.0885 92.5312 16.7031C92.6562 17.3177 92.8542 17.8594 93.125 18.3281C93.4062 18.7865 93.7708 19.1458 94.2188 19.4062C94.6667 19.6667 95.2135 19.7969 95.8594 19.7969C96.4844 19.7969 97.0208 19.6667 97.4688 19.4062C97.9167 19.1458 98.276 18.7865 98.5469 18.3281C98.8177 17.8594 99.0156 17.3177 99.1406 16.7031C99.276 16.0885 99.3438 15.4271 99.3438 14.7188V14.3906C99.3438 13.7031 99.276 13.0573 99.1406 12.4531C99.0156 11.8385 98.8125 11.2969 98.5312 10.8281C98.2604 10.349 97.901 9.97396 97.4531 9.70312C97.0052 9.43229 96.4635 9.29688 95.8281 9.29688C95.1927 9.29688 94.651 9.43229 94.2031 9.70312C93.7656 9.97396 93.4062 10.349 93.125 10.8281C92.8542 11.2969 92.6562 11.8385 92.5312 12.4531C92.4062 13.0573 92.3438 13.7031 92.3438 14.3906ZM118 6.09375V9.625H109.812V6.09375H118ZM111.109 6.09375V23H106.609V6.09375H111.109ZM121.281 6.09375V23H116.766V6.09375H121.281ZM124.031 14.7188V14.3906C124.031 13.151 124.208 12.0104 124.562 10.9688C124.917 9.91667 125.432 9.00521 126.109 8.23438C126.786 7.46354 127.62 6.86458 128.609 6.4375C129.599 6 130.734 5.78125 132.016 5.78125C133.297 5.78125 134.438 6 135.438 6.4375C136.438 6.86458 137.276 7.46354 137.953 8.23438C138.641 9.00521 139.161 9.91667 139.516 10.9688C139.87 12.0104 140.047 13.151 140.047 14.3906V14.7188C140.047 15.9479 139.87 17.0885 139.516 18.1406C139.161 19.1823 138.641 20.0938 137.953 20.875C137.276 21.6458 136.443 22.2448 135.453 22.6719C134.464 23.099 133.328 23.3125 132.047 23.3125C130.766 23.3125 129.625 23.099 128.625 22.6719C127.635 22.2448 126.797 21.6458 126.109 20.875C125.432 20.0938 124.917 19.1823 124.562 18.1406C124.208 17.0885 124.031 15.9479 124.031 14.7188ZM128.531 14.3906V14.7188C128.531 15.4271 128.594 16.0885 128.719 16.7031C128.844 17.3177 129.042 17.8594 129.312 18.3281C129.594 18.7865 129.958 19.1458 130.406 19.4062C130.854 19.6667 131.401 19.7969 132.047 19.7969C132.672 19.7969 133.208 19.6667 133.656 19.4062C134.104 19.1458 134.464 18.7865 134.734 18.3281C135.005 17.8594 135.203 17.3177 135.328 16.7031C135.464 16.0885 135.531 15.4271 135.531 14.7188V14.3906C135.531 13.7031 135.464 13.0573 135.328 12.4531C135.203 11.8385 135 11.2969 134.719 10.8281C134.448 10.349 134.089 9.97396 133.641 9.70312C133.193 9.43229 132.651 9.29688 132.016 9.29688C131.38 9.29688 130.839 9.43229 130.391 9.70312C129.953 9.97396 129.594 10.349 129.312 10.8281C129.042 11.2969 128.844 11.8385 128.719 12.4531C128.594 13.0573 128.531 13.7031 128.531 14.3906ZM147.297 16.7188L152.969 6.09375H157.469V23H152.969V12.3594L147.297 23H142.797V6.09375H147.297V16.7188ZM167.922 19.7969C168.474 19.7969 168.964 19.6927 169.391 19.4844C169.818 19.2656 170.151 18.9635 170.391 18.5781C170.641 18.1823 170.771 17.7188 170.781 17.1875H175.016C175.005 18.375 174.688 19.4323 174.062 20.3594C173.438 21.276 172.599 22 171.547 22.5312C170.495 23.0521 169.318 23.3125 168.016 23.3125C166.703 23.3125 165.557 23.0938 164.578 22.6562C163.609 22.2188 162.802 21.6146 162.156 20.8438C161.51 20.0625 161.026 19.1562 160.703 18.125C160.38 17.0833 160.219 15.9688 160.219 14.7812V14.3281C160.219 13.1302 160.38 12.0156 160.703 10.9844C161.026 9.94271 161.51 9.03646 162.156 8.26562C162.802 7.48438 163.609 6.875 164.578 6.4375C165.547 6 166.682 5.78125 167.984 5.78125C169.37 5.78125 170.583 6.04688 171.625 6.57812C172.677 7.10938 173.5 7.86979 174.094 8.85938C174.698 9.83854 175.005 11 175.016 12.3438H170.781C170.771 11.7812 170.651 11.2708 170.422 10.8125C170.203 10.3542 169.88 9.98958 169.453 9.71875C169.036 9.4375 168.521 9.29688 167.906 9.29688C167.25 9.29688 166.714 9.4375 166.297 9.71875C165.88 9.98958 165.557 10.3646 165.328 10.8438C165.099 11.3125 164.938 11.849 164.844 12.4531C164.76 13.0469 164.719 13.6719 164.719 14.3281V14.7812C164.719 15.4375 164.76 16.0677 164.844 16.6719C164.927 17.276 165.083 17.8125 165.312 18.2812C165.552 18.75 165.88 19.1198 166.297 19.3906C166.714 19.6615 167.255 19.7969 167.922 19.7969ZM182.422 6.09375V23H177.922V6.09375H182.422ZM193.406 6.09375L186.125 16.6719H181.625L181.078 12.5156H184.062L187.703 6.09375H193.406ZM187.906 23L183.75 15.8594L187.672 13.6875L193.938 23H187.906Z" fill="white"/>
        </svg>
      </Link>

      <Link href="/cart" className={styles.cart}>
        { ticketsCount > 0 && <span className={styles.cart__count} >{ ticketsCount }</span> }

        <svg className={styles.cart__svg} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.4936 8.675C29.304 8.46212 29.0713 8.29189 28.811 8.17554C28.5507 8.05918 28.2687 7.99935 27.9836 8H21.9936C21.9936 6.4087 21.3615 4.88258 20.2363 3.75736C19.111 2.63214 17.5849 2 15.9936 2C14.4023 2 12.8762 2.63214 11.751 3.75736C10.6258 4.88258 9.99362 6.4087 9.99362 8H4.00362C3.7202 8.00076 3.44012 8.06127 3.18166 8.17758C2.9232 8.29389 2.69216 8.46338 2.50362 8.675C2.31666 8.88583 2.17636 9.1338 2.09191 9.40264C2.00747 9.67148 1.98079 9.95513 2.01362 10.235L3.79612 25.235C3.85394 25.7237 4.08991 26.174 4.45891 26.4996C4.8279 26.8253 5.304 27.0034 5.79612 27H26.2024C26.6945 27.0034 27.1706 26.8253 27.5396 26.4996C27.9086 26.174 28.1446 25.7237 28.2024 25.235L29.9849 10.235C30.0175 9.95504 29.9907 9.67134 29.906 9.40249C29.8213 9.13364 29.6808 8.88573 29.4936 8.675ZM15.9936 4C17.0545 4 18.0719 4.42143 18.822 5.17157C19.5722 5.92172 19.9936 6.93913 19.9936 8H11.9936C11.9936 6.93913 12.415 5.92172 13.1652 5.17157C13.9153 4.42143 14.9328 4 15.9936 4ZM26.2136 25C26.21 25.0013 26.206 25.0013 26.2024 25H5.77487L4.00362 10H9.99362V13C9.99362 13.2652 10.099 13.5196 10.2865 13.7071C10.4741 13.8946 10.7284 14 10.9936 14C11.2588 14 11.5132 13.8946 11.7007 13.7071C11.8883 13.5196 11.9936 13.2652 11.9936 13V10H19.9936V13C19.9936 13.2652 20.099 13.5196 20.2865 13.7071C20.4741 13.8946 20.7284 14 20.9936 14C21.2588 14 21.5132 13.8946 21.7007 13.7071C21.8883 13.5196 21.9936 13.2652 21.9936 13V10H27.9936L26.2136 25Z" fill="#ffffff"/>
        </svg>
      </Link>
    </header>
  );
};