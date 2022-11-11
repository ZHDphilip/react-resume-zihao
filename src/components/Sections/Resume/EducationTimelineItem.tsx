import {FC, memo} from 'react';

import {EducationTimelineItem} from '../../../data/dataDef';

const EducationTimelineItem: FC<{item: EducationTimelineItem}> = memo(({item}) => {
  const {title, date, gpa, relatedCourses, location, honor} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-bold italic sm:flex-none">{gpa}</span>
          <span>•</span>
          <span className="flex-1 text-sm font-bold italic sm:flex-none">{honor}</span>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm sm:flex-none">{relatedCourses}</span>
        </div>
      </div>
    </div>
  );
});

EducationTimelineItem.displayName = 'EducationTimelineItem';
export default EducationTimelineItem;
