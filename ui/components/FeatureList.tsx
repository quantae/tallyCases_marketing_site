import React, { ReactNode } from 'react';
import styles from './FeatureList.module.css'



//**TS TYPES */
type FeatureListProps = {
  icon?: ReactNode;
  title: string;
  body: string;
}

const FeatureList = ({ icon, title = 'Simplify Product SEtup', body = 'Intuitive Categories, Units' }: FeatureListProps) => {
  return (
    <div className={`w-full md:w-[24rem] flex flex-col gap-8 p-4 ${styles.group} font-sans`}>
    <div className={`${styles.tilted_box} relative -z-10`}>
      <div className={`${styles.inner_box} w-[4.5rem] h-[4.5rem] bg-gray-600 rounded-2xl flex items-center justify-center text-white`}>
        hi
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2 text-gray-600">{title}</h4>
      <p className="text-slate-500">{body}</p>
    </div>
  </div>
  )
}

export default FeatureList
