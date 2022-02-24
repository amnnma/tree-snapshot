import React from 'react';
import cx from 'classnames';
import './chapter.scss';
import { Waypoint } from 'react-waypoint';

function Chapter({ id, theme, title, image, images, description, currentChapterId, legend, sources, setCurrentChapter, setCurrentAction }) {

  const stepClasses = 'step max-w-md opacity-25';
  const classList = id === currentChapterId ? `${stepClasses} active` : stepClasses;
  const renderImage = (img) => (
    <figure key={img.src} className="relative p-1">
      <img
        key={img.src}
        src={img.src}
        alt={title}
        className={cx('image w-full', { 'p-10': !img.title })}
      />
      {img.title && (
        <figcaption
          className={
            'absolute top-0 mt-1 p-1 flex uppercase tracking-wider bg-black bg-opacity-50 text-white text-xs'
          }
        >
          <div className="flex mr-1">{(img.title)}</div>-
          <div className="ml-1 font-bold">{(img.author)}</div>
        </figcaption>
      )}
    </figure>
  );

  const renderLegend = (legend, sources) => (
    <div className="px-12 pb-12 text-sm">
      {legend.map((l) => (
        <div key={l.title} className="flex items-center mb-4">
          <span
            className="w-8 h-8 mr-4 legendItem"
            style={{
              borderRadius: l.type === 'circle' ? '50%' : 'none',
              backgroundColor: l.color,
              border: l.border ? `solid 2px ${l.border}` : 'none'
            }}
          />
          <span>{(l.title)}</span>
        </div>
      ))}
      {sources && (
        <div className="ml-12">
          {('Sources')}: {(sources)}
        </div>
      )}
    </div>
  );

  const onEnter = () => {
    setCurrentChapter(id);
    setCurrentAction('enter');
  };
  const onLeave= () => {
    setCurrentChapter(id);
    setCurrentAction('leave');
  };

  return (
    <div id={id} className={classList}>
      <Waypoint
        onEnter={onEnter}
        onLeave={onLeave}
      />
      <div className={theme}>
        {images &&
          images.filter((i) => i.position === 'top').map((i) => renderImage(i))}
        {title && (
          <div className="px-12 py-12 text-base leading-6 content">
            {title && <h3 className="pb-6 font-serif text-2xl">{(title)}</h3>}
            {description && (
              <p className="text-sm leading-8">{(description)}</p>
            )}
          </div>
        )}
        {legend && renderLegend(legend, sources)}
        {image && renderImage({ src: image })}
        {images &&
          images
            .filter((i) => i.position === 'bottom')
            .map((i) => renderImage(i))}
      </div>
    </div>
  );
}

export default Chapter;
