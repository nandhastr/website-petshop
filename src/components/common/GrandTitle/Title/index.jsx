import React from 'react'
import TitlePage from '../TitlePage';
import SubTitlePage from '../subTitlePage';

const Title = ({title, subtitle, className}) => {
  return (
      <>
          <div className="border-green-500 border-l-4 px-6 ">
              <TitlePage>{title}</TitlePage>
              <SubTitlePage className={className}>{subtitle}</SubTitlePage>
          </div>
      </>
  );
}

export default Title
