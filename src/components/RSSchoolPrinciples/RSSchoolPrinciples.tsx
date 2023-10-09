import React from 'react';
import { PrincipleCard, PrincipleCardProps } from '../PrincipleCard/PrincipleCard';
import { Title } from '../Title/Title';
import { UpcomingCourses } from '../UpcomingCourses/UpcomingCourses';

import './RSSchoolPrinciples.scss';

const OpenToEveryoneIcon: React.ReactNode = (
  <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.60363 17.7916C1.28325 13.8324 1.7997 7.92931 5.75715 4.60679C9.71461 1.28426 15.6145 1.80043 18.9348 5.75969L17.4031 7.04567C14.7925 3.93276 10.1538 3.52693 7.04232 6.13922C3.93082 8.75151 3.52477 13.3927 6.13537 16.5056L4.60363 17.7916ZM28.0352 18.1673L15.2358 28.9132L28.0352 18.1673ZM14.4699 29.5562L4.60363 17.7916C1.28325 13.8324 1.7997 7.92931 5.75715 4.60679L7.04232 6.13922C3.93082 8.75151 3.52477 13.3927 6.13537 16.5056L16.0016 28.2702L14.4699 29.5562ZM5.75715 4.60679C9.71461 1.28426 15.6145 1.80043 18.9348 5.75969L28.8011 17.5243L27.2694 18.8103L17.4031 7.04567C14.7925 3.93276 10.1538 3.52693 7.04232 6.13922L5.75715 4.60679Z"
      fill="#545454"></path>
    <path
      d="M14.0168 27.4598L18.2833 23.8779L14.0168 27.4598ZM22.7442 27.6409C24.0876 29.2427 23.8787 31.631 22.2775 32.9753C20.6764 34.3195 18.2894 34.1107 16.946 32.5088L18.4778 31.2228C19.1114 31.9784 20.2372 32.0769 20.9924 31.4428C21.7476 30.8088 21.8461 29.6824 21.2125 28.9268L22.7442 27.6409ZM22.2775 32.9753C20.6764 34.3195 18.2894 34.1107 16.946 32.5088L13.251 28.1028L14.7827 26.8168L18.4778 31.2228C19.1114 31.9784 20.2372 32.0769 20.9924 31.4428L22.2775 32.9753ZM19.0492 23.2349L22.7442 27.6409C24.0876 29.2427 23.8787 31.631 22.2775 32.9753L20.9924 31.4428C21.7476 30.8088 21.8461 29.6824 21.2125 28.9268L17.5175 24.5209L19.0492 23.2349Z"
      fill="#545454"></path>
    <path
      d="M18.2833 23.8779L22.5498 20.296L18.2833 23.8779ZM27.0107 24.059C28.3541 25.6608 28.1452 28.0491 26.544 29.3934C24.9429 30.7376 22.5559 30.5288 21.2125 28.9269L22.7442 27.6409C23.3778 28.3965 24.5037 28.4949 25.2589 27.8609C26.014 27.2269 26.1126 26.1005 25.479 25.3449L27.0107 24.059ZM26.544 29.3934C24.9429 30.7376 22.5559 30.5288 21.2125 28.9269L17.5175 24.5209L19.0492 23.2349L22.7442 27.6409C23.3778 28.3965 24.5037 28.4949 25.2589 27.8609L26.544 29.3934ZM23.3157 19.653L27.0107 24.059C28.3541 25.6608 28.1452 28.0491 26.544 29.3934L25.2589 27.8609C26.014 27.2269 26.1126 26.1005 25.479 25.3449L21.7839 20.9389L23.3157 19.653Z"
      fill="#545454"></path>
    <path
      d="M22.5498 20.2959L26.8163 16.7139L22.5498 20.2959ZM31.2772 20.4769C32.6206 22.0788 32.4116 24.4671 30.8105 25.8113C29.2094 27.1556 26.8224 26.9468 25.479 25.3449L27.0107 24.0589C27.6443 24.8144 28.7702 24.9129 29.5253 24.2789C30.2805 23.6449 30.3791 22.5184 29.7455 21.7629L31.2772 20.4769ZM30.8105 25.8113C29.2094 27.1556 26.8224 26.9468 25.479 25.3449L21.7839 20.9389L23.3157 19.6529L27.0107 24.0589C27.6443 24.8144 28.7702 24.9129 29.5253 24.2789L30.8105 25.8113ZM27.5822 16.0709L31.2772 20.4769C32.6206 22.0788 32.4116 24.4671 30.8105 25.8113L29.5253 24.2789C30.2805 23.6449 30.3791 22.5184 29.7455 21.7629L26.0504 17.3569L27.5822 16.0709Z"
      fill="#545454"></path>
    <path
      d="M31.6835 18.002C35.1533 15.0596 35.5823 9.86023 32.6418 6.38889V6.38889C29.7013 2.91754 24.5048 2.48873 21.035 5.43113L19.1525 7.02746L29.801 19.5983L31.6835 18.002Z"
      fill="#FFFAF0"></path>
    <path
      d="M32.3298 18.765C36.2208 15.4654 36.702 9.63488 33.4045 5.74212C30.107 1.84936 24.2796 1.3685 20.3887 4.66809L21.6814 6.19416C24.7299 3.60897 29.2956 3.98572 31.8791 7.03565C34.4627 10.0856 34.0857 14.6538 31.0371 17.239L32.3298 18.765ZM19.1525 7.02746L29.801 19.5983L19.1525 7.02746ZM30.4474 20.3614L32.3298 18.765C36.2208 15.4654 36.702 9.63488 33.4045 5.74212L31.8791 7.03565C34.4627 10.0856 34.0857 14.6538 31.0371 17.239L29.1547 18.8353L30.4474 20.3614ZM33.4045 5.74212C30.107 1.84936 24.2796 1.3685 20.3887 4.66809L18.5062 6.26443L19.7989 7.7905L21.6814 6.19416C24.7299 3.60897 29.2956 3.98572 31.8791 7.03565L33.4045 5.74212Z"
      fill="#545454"></path>
    <path
      d="M22.9878 11.0247L19.4383 6.83437L15.6428 10.053C14.4862 11.0338 14.3432 12.7669 15.3234 13.924V13.924C16.3035 15.0811 18.0357 15.2241 19.1923 14.2433L22.9878 11.0247Z"
      fill="#FFFAF0"></path>
    <path
      d="M22.9878 11.0247L19.4383 6.83437L22.9878 11.0247ZM14.9965 9.28993C13.4187 10.6279 13.2235 12.9922 14.5607 14.5708C15.8978 16.1493 18.2608 16.3443 19.8387 15.0063L18.546 13.4802C17.8106 14.1038 16.7093 14.0129 16.0861 13.2772C15.4629 12.5415 15.5538 11.4396 16.2892 10.816L14.9965 9.28993ZM14.5607 14.5708C15.8978 16.1493 18.2608 16.3443 19.8387 15.0063L23.6341 11.7877L22.3414 10.2616L18.546 13.4802C17.8106 14.1038 16.7093 14.0129 16.0861 13.2772L14.5607 14.5708ZM18.7919 6.07133L14.9965 9.28993C13.4187 10.6279 13.2235 12.9922 14.5607 14.5708L16.0861 13.2772C15.4629 12.5415 15.5538 11.4396 16.2892 10.816L20.0847 7.59741L18.7919 6.07133Z"
      fill="#545454"></path>
    <path
      d="M27.5154 11.7174C27.1513 12.0727 26.7172 12.3482 26.2407 12.5263C25.7643 12.7044 25.2559 12.7812 24.7482 12.7517C24.2404 12.7223 23.7443 12.5872 23.2916 12.3553C22.8389 12.1233 22.4395 11.7994 22.1189 11.4044L22.403 11.1736C22.6916 11.5291 23.051 11.8205 23.4585 12.0293C23.8659 12.2381 24.3124 12.3596 24.7694 12.3861C25.2263 12.4126 25.6838 12.3435 26.1127 12.1833C26.5415 12.023 26.9322 11.775 27.2599 11.4552L27.5154 11.7174Z"
      fill="#FFF2D9"
      stroke="#545454"></path>
  </svg>
);

const OpenSourcePhilosophyIcon: React.ReactNode = (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_20906_221290" fill="white">
      <path d="M16.2195 39.0466C12.1937 37.6814 8.78104 34.9356 6.58584 31.2954C4.39064 27.6551 3.5546 23.3554 4.2258 19.1579C4.897 14.9603 7.03212 11.1357 10.253 8.36153C13.4739 5.58734 17.5726 4.04259 21.8233 4.00087C26.074 3.95915 30.2023 5.42316 33.4771 8.13359C36.7518 10.844 38.9615 14.626 39.715 18.8096C40.4685 22.9932 39.717 27.3084 37.5936 30.991C35.4703 34.6736 32.1122 37.4859 28.114 38.9298L24.0111 27.5688C25.3262 27.0938 26.4308 26.1688 27.1292 24.9574C27.8277 23.7461 28.0749 22.3267 27.827 20.9506C27.5792 19.5744 26.8523 18.3304 25.7752 17.4389C24.698 16.5473 23.3401 16.0658 21.9419 16.0795C20.5437 16.0932 19.1955 16.6014 18.136 17.5139C17.0766 18.4264 16.3743 19.6844 16.1535 21.0651C15.9327 22.4459 16.2077 23.8602 16.9298 25.0575C17.6519 26.2549 18.7744 27.1581 20.0986 27.6072L16.2195 39.0466Z"></path>
    </mask>
    <path
      d="M16.2195 39.0466C12.1937 37.6814 8.78104 34.9356 6.58584 31.2954C4.39064 27.6551 3.5546 23.3554 4.2258 19.1579C4.897 14.9603 7.03212 11.1357 10.253 8.36153C13.4739 5.58734 17.5726 4.04259 21.8233 4.00087C26.074 3.95915 30.2023 5.42316 33.4771 8.13359C36.7518 10.844 38.9615 14.626 39.715 18.8096C40.4685 22.9932 39.717 27.3084 37.5936 30.991C35.4703 34.6736 32.1122 37.4859 28.114 38.9298L24.0111 27.5688C25.3262 27.0938 26.4308 26.1688 27.1292 24.9574C27.8277 23.7461 28.0749 22.3267 27.827 20.9506C27.5792 19.5744 26.8523 18.3304 25.7752 17.4389C24.698 16.5473 23.3401 16.0658 21.9419 16.0795C20.5437 16.0932 19.1955 16.6014 18.136 17.5139C17.0766 18.4264 16.3743 19.6844 16.1535 21.0651C15.9327 22.4459 16.2077 23.8602 16.9298 25.0575C17.6519 26.2549 18.7744 27.1581 20.0986 27.6072L16.2195 39.0466Z"
      stroke="#545454"
      strokeWidth="4"
      mask="url(#path-1-inside-1_20906_221290)"></path>
  </svg>
);

const TeactItForwardIcon: React.ReactNode = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.4618 22.8712C23.3144 19.8003 25.4324 17.0332 28.5586 16.4465L33.6447 15.4919C33.7922 18.5628 31.6742 21.33 28.5479 21.9167L23.4618 22.8712Z"
      stroke="#545454"
      strokeWidth="2"></path>
    <path
      d="M18.5476 10.5421C18.2217 6.75532 15.1322 3.84624 11.4343 3.64361L11.5473 4.95615C11.8732 8.74291 14.9626 11.652 18.6605 11.8546L18.5476 10.5421Z"
      stroke="#545454"
      strokeWidth="2"></path>
    <path
      d="M22.6602 11.5686C22.3554 8.02685 24.726 4.89317 28.0948 4.14399L28.1699 5.0177C28.4747 8.55948 26.1042 11.6932 22.7354 12.4423L22.6602 11.5686Z"
      stroke="#545454"
      strokeWidth="2"></path>
    <path
      d="M6.16277 16.8402C6.10916 20.1991 8.53781 23.1407 11.9671 23.6431L16.877 24.3623C16.9306 21.0034 14.5019 18.0618 11.0727 17.5594L6.16277 16.8402Z"
      stroke="#545454"
      strokeWidth="2"></path>
    <path
      d="M21.0215 15.2866C21.0215 14.7343 20.5738 14.2866 20.0215 14.2866C19.4692 14.2866 19.0215 14.7343 19.0215 15.2866H21.0215ZM19.0215 15.2866V37.9999H21.0215V15.2866H19.0215Z"
      fill="#545454"></path>
  </svg>
);

const cards: PrincipleCardProps[] = [
  { icon: OpenToEveryoneIcon, text: 'Open to everyone' },
  { icon: OpenSourcePhilosophyIcon, text: 'Open source philosophy' },
  { icon: TeactItForwardIcon, text: 'Pay the favor forward' }
];

export const RSSchoolPrinciples: React.FC = () => (
  <div className="school-principles container">
    <div className="school-principles content">
      <Title
        text="RS School Principles are  an ability to complete our mission"
        asterix={false}
        extra={true}
      />
      <div className="cards">
        {cards.map(({ icon, text }) => (
          <PrincipleCard key={text} text={text} icon={icon} />
        ))}
      </div>
      <UpcomingCourses />
    </div>
  </div>
);