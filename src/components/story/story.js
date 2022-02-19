import React from 'react';
import cx from 'classnames';
import Chapter from '../chapter/chapter';
import './story.scss';

const alignments = {
  left: 'lefty',
  center: 'centered',
  right: 'righty'
};

const Story = ({ title, subtitle, byline, theme, chapters, alignment, currentChapterId, footer, hasIntro, setCurrentChapter, setCurrentAction }) => {

  return (
    <div id="story" className={cx({ "withIntro": hasIntro })}>
      {title && (
        <div id="header" className={theme}>
          <h1>{(title)}</h1>
          {subtitle && <h2>{(subtitle)}</h2>}
          {byline && <p>{(byline)}</p>}
        </div>
      )}
      <div id="features" className={alignments[alignment]}>
        {chapters.map((chapter) => (
          <Chapter
            key={chapter.id}
            theme={theme}
            {...chapter}
            currentChapterId={currentChapterId}
            setCurrentChapter={setCurrentChapter}
            setCurrentAction={setCurrentAction}
          />
        ))}
      </div>
      {footer && (
        <div id="footer" className={`footer-${theme} p-4 pb-16 w-full text-right text-base`}>
          <p>{(footer)}</p>
        </div>
      )}
    </div>
  );
}

export default Story;