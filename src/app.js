import React, { useState } from 'react';
import './app.scss';
import Story from './components/story/story';
import Map from './components/map/map';
import Intro from './components/intro/intro';


const App = (props) => {
  const {
    chapters,
    accessToken,
    style,
    theme,
    showMarkers,
    title,
    subtitle,
    byline,
    alignment,
    footer,
    intro
  } = props;
  const [currentChapterId, setCurrentChapter] = useState(chapters[0]);
  const [currentAction, setCurrentAction] = useState();

  const renderError = (missing) => <div className="flex justify-center items-center h-screen">Please add the missing {missing}. Check the Readme</div>;
  if (style === 'ADD YOUR MAPBOX STYLE HERE') {
    return renderError('Mapbox map style');
  }
  if (!accessToken) {
    return renderError('Mapbox access token');
  }

  return (
    <div>
      {intro && <Intro {...intro} />}
      <Story
        hasIntro={!!intro}
        chapters={chapters}
        title={title}
        subtitle={subtitle}
        byline={byline}
        theme={theme}
        alignment={alignment}
        currentChapterId={currentChapterId}
        footer={footer}
        setCurrentChapter={setCurrentChapter}
        setCurrentAction={setCurrentAction}
      />
      <Map
        chapters={chapters}
        currentAction={currentAction}
        accessToken={accessToken}
        mapStyle={style}
        showMarkers={showMarkers}
        currentChapterId={currentChapterId}
      />
    </div>
  );
};

export default App;