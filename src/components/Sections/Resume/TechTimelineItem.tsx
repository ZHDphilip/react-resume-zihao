import {FC, memo} from 'react';

import {TechTimelineItem} from '../../../data/dataDef';

const TechTimelineItem: FC<{item: TechTimelineItem}> = memo(({item}) => {
  const {title, date, language, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{language}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TechTimelineItem.displayName = 'TechTimelineItem';
export default TechTimelineItem;
