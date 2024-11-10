import React, { useState } from 'react';
import { contentData } from '../data/contentData';
import Accordion from './Accordion';
import ContentArea from './ContentArea';
import LanguageSwitcher from './LanguageSwitcher';
import './contentManager.css';

const ContentManager = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setSelectedChapter(null);
    setSelectedSection(null);
  };

  const handleChapterSelect = (chapterIndex) => {
    setSelectedChapter(chapterIndex);
    setSelectedSection(null);
  };

  const handleSectionSelect = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const chapters = contentData[selectedLanguage]?.chapters || [];
  const sections = selectedChapter !== null ? chapters[selectedChapter].sections : [];
  const selectedSectionData = sections.find(section => section.id === selectedSection);
  const selectedContent = selectedSectionData ? selectedSectionData.content : 'Please select a section to view content.';
  const selectedTitle = selectedSectionData ? selectedSectionData.title : '';

  return (
    <div className="content-manager">
      <LanguageSwitcher
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <div className="content-layout">
        <Accordion
          chapters={chapters}
          onChapterSelect={handleChapterSelect}
          onSectionSelect={handleSectionSelect}
          selectedChapter={selectedChapter}
          selectedSection={selectedSection}
        />
        <ContentArea title={selectedTitle} content={selectedContent} />
      </div>
    </div>
  );
};

export default ContentManager;
