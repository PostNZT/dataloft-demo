import React from 'react'

const BrandIcon = ({ height = 70, style = {} }) => {
  return (
    <svg height={height} style={style} viewBox="0 0 733 152" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M104.893 85.5926C98.9084 92.729 94.1953 94.1383 83.0752 91.4666C78.2013 104.905 72.5709 107.733 59.9988 108.669L7.97186 93.5645C2.26661 88.3964 0.727715 84.7164 0 77.2012L12.5872 28.5309C18.3868 16.6145 23.6021 14.2117 35.6636 15.9437C38.707 4.11468 43.1928 1.22084 54.1248 0L111.606 15.9437C118.014 20.7785 120.082 24.4058 119.998 33.1462L104.893 85.5926Z" fill="#3A3B3C"/>
      <path d="M31.4678 29.7897L18.4611 77.6209L66.7119 91.4668L70.9076 74.2643L40.2789 65.8729L47.8311 34.8246L31.4678 29.7897Z" fill="white"/>
      <path d="M54.1248 18.4611L50.3486 35.244L81.3969 42.7963L73.0055 73.8446L89.7884 78.8795L101.956 30.6287L54.1248 18.4611Z" fill="#FF3939"/>
      <path d="M164.849 71.415C168.986 71.415 172.076 70.101 174.12 67.473C176.213 64.845 177.259 60.5623 177.259 54.625C177.259 49.2717 176.213 45.3783 174.12 42.945C172.076 40.5117 168.986 39.295 164.849 39.295C163.924 39.295 163.024 39.368 162.148 39.514C161.759 39.6113 161.564 39.8547 161.564 40.244V70.393C161.564 70.831 161.759 71.0987 162.148 71.196C163.024 71.342 163.924 71.415 164.849 71.415ZM163.389 27.98C172.149 27.98 178.962 30.3403 183.829 35.061C188.696 39.733 191.129 46.2543 191.129 54.625C191.129 63.7257 188.671 70.685 183.756 75.503C178.889 80.321 172.1 82.73 163.389 82.73C159.544 82.73 155.554 82.5353 151.417 82.146C150.249 82.0487 149.276 81.5377 148.497 80.613C147.718 79.6883 147.329 78.642 147.329 77.474V33.236C147.329 32.068 147.718 31.0217 148.497 30.097C149.276 29.1723 150.249 28.6613 151.417 28.564C155.554 28.1747 159.544 27.98 163.389 27.98ZM212.073 60.83H219.665C219.811 60.83 219.932 60.7813 220.03 60.684C220.176 60.538 220.224 60.392 220.176 60.246L215.942 41.193C215.942 41.1443 215.917 41.12 215.869 41.12C215.82 41.12 215.796 41.1443 215.796 41.193L211.562 60.246C211.513 60.392 211.537 60.538 211.635 60.684C211.781 60.7813 211.927 60.83 212.073 60.83ZM224.921 32.652L239.229 78.058C239.521 79.0313 239.35 79.9317 238.718 80.759C238.134 81.5863 237.331 82 236.309 82H229.155C227.938 82 226.843 81.635 225.87 80.905C224.945 80.1263 224.361 79.153 224.118 77.985L222.877 72.364C222.779 71.9747 222.536 71.78 222.147 71.78H209.664C209.177 71.78 208.909 71.9747 208.861 72.364L207.62 77.985C207.376 79.153 206.768 80.1263 205.795 80.905C204.87 81.635 203.799 82 202.583 82H195.721C194.699 82 193.871 81.5863 193.239 80.759C192.655 79.9317 192.509 79.0313 192.801 78.058L207.109 32.652C207.449 31.484 208.106 30.535 209.08 29.805C210.102 29.075 211.245 28.71 212.511 28.71H219.519C220.735 28.71 221.83 29.075 222.804 29.805C223.826 30.535 224.531 31.484 224.921 32.652ZM273.935 28.71C275.054 28.71 276.028 29.1237 276.855 29.951C277.682 30.7783 278.096 31.7517 278.096 32.871V36.594C278.096 37.7133 277.682 38.6867 276.855 39.514C276.028 40.3413 275.054 40.755 273.935 40.755H265.029C264.591 40.755 264.372 40.974 264.372 41.412V77.839C264.372 78.9583 263.958 79.9317 263.131 80.759C262.352 81.5863 261.403 82 260.284 82H253.568C252.449 82 251.475 81.5863 250.648 80.759C249.869 79.9317 249.48 78.9583 249.48 77.839V41.412C249.48 40.974 249.261 40.755 248.823 40.755H239.917C238.798 40.755 237.824 40.3413 236.997 39.514C236.17 38.6867 235.756 37.7133 235.756 36.594V32.871C235.756 31.7517 236.17 30.7783 236.997 29.951C237.824 29.1237 238.798 28.71 239.917 28.71H273.935ZM294.625 60.83H302.217C302.363 60.83 302.485 60.7813 302.582 60.684C302.728 60.538 302.777 60.392 302.728 60.246L298.494 41.193C298.494 41.1443 298.47 41.12 298.421 41.12C298.373 41.12 298.348 41.1443 298.348 41.193L294.114 60.246C294.066 60.392 294.09 60.538 294.187 60.684C294.333 60.7813 294.479 60.83 294.625 60.83ZM307.473 32.652L321.781 78.058C322.073 79.0313 321.903 79.9317 321.27 80.759C320.686 81.5863 319.883 82 318.861 82H311.707C310.491 82 309.396 81.635 308.422 80.905C307.498 80.1263 306.914 79.153 306.67 77.985L305.429 72.364C305.332 71.9747 305.089 71.78 304.699 71.78H292.216C291.73 71.78 291.462 71.9747 291.413 72.364L290.172 77.985C289.929 79.153 289.321 80.1263 288.347 80.905C287.423 81.635 286.352 82 285.135 82H278.273C277.251 82 276.424 81.5863 275.791 80.759C275.207 79.9317 275.061 79.0313 275.353 78.058L289.661 32.652C290.002 31.484 290.659 30.535 291.632 29.805C292.654 29.075 293.798 28.71 295.063 28.71H302.071C303.288 28.71 304.383 29.075 305.356 29.805C306.378 30.535 307.084 31.484 307.473 32.652Z" fill="#FF3939"/>
      <path d="M360.528 69.955C361.648 69.955 362.621 70.3687 363.448 71.196C364.276 72.0233 364.689 72.9967 364.689 74.116V77.839C364.689 78.9583 364.276 79.9317 363.448 80.759C362.621 81.5863 361.648 82 360.528 82H332.35C331.231 82 330.258 81.5863 329.43 80.759C328.603 79.9317 328.189 78.9583 328.189 77.839V32.871C328.189 31.7517 328.603 30.7783 329.43 29.951C330.258 29.1237 331.231 28.71 332.35 28.71H338.993C340.113 28.71 341.086 29.1237 341.913 29.951C342.741 30.7783 343.154 31.7517 343.154 32.871V69.298C343.154 69.736 343.373 69.955 343.811 69.955H360.528ZM381.573 55.355C381.573 65.575 385.102 70.685 392.158 70.685C399.215 70.685 402.743 65.575 402.743 55.355C402.743 45.135 399.215 40.025 392.158 40.025C385.102 40.025 381.573 45.135 381.573 55.355ZM373.47 35.28C378.045 30.4133 384.274 27.98 392.158 27.98C400.042 27.98 406.272 30.4133 410.846 35.28C415.421 40.1467 417.708 46.8383 417.708 55.355C417.708 63.8717 415.421 70.5633 410.846 75.43C406.272 80.2967 400.042 82.73 392.158 82.73C384.274 82.73 378.045 80.2967 373.47 75.43C368.896 70.5633 366.608 63.8717 366.608 55.355C366.608 46.8383 368.896 40.1467 373.47 35.28ZM455.22 28.71C456.34 28.71 457.313 29.1237 458.14 29.951C458.968 30.7783 459.381 31.7517 459.381 32.871V36.229C459.381 37.3483 458.968 38.3217 458.14 39.149C457.313 39.9763 456.34 40.39 455.22 40.39H440.328C439.89 40.39 439.671 40.5847 439.671 40.974V49.953C439.671 50.391 439.89 50.61 440.328 50.61H453.76C454.88 50.61 455.853 51.0237 456.68 51.851C457.508 52.6783 457.921 53.6517 457.921 54.771V57.399C457.921 58.5183 457.508 59.4917 456.68 60.319C455.853 61.1463 454.88 61.56 453.76 61.56H440.328C439.89 61.56 439.671 61.779 439.671 62.217V77.839C439.671 78.9583 439.258 79.9317 438.43 80.759C437.603 81.5863 436.63 82 435.51 82H429.232C428.113 82 427.14 81.5863 426.312 80.759C425.485 79.9317 425.071 78.9583 425.071 77.839V32.871C425.071 31.7517 425.485 30.7783 426.312 29.951C427.14 29.1237 428.113 28.71 429.232 28.71H455.22ZM505.268 28.71C506.387 28.71 507.361 29.1237 508.188 29.951C509.015 30.7783 509.429 31.7517 509.429 32.871V36.594C509.429 37.7133 509.015 38.6867 508.188 39.514C507.361 40.3413 506.387 40.755 505.268 40.755H496.362C495.924 40.755 495.705 40.974 495.705 41.412V77.839C495.705 78.9583 495.291 79.9317 494.464 80.759C493.685 81.5863 492.736 82 491.617 82H484.901C483.782 82 482.808 81.5863 481.981 80.759C481.202 79.9317 480.813 78.9583 480.813 77.839V41.412C480.813 40.974 480.594 40.755 480.156 40.755H471.25C470.131 40.755 469.157 40.3413 468.33 39.514C467.503 38.6867 467.089 37.7133 467.089 36.594V32.871C467.089 31.7517 467.503 30.7783 468.33 29.951C469.157 29.1237 470.131 28.71 471.25 28.71H505.268Z" fill="white"/>
    </svg>
  )
} 

export default BrandIcon