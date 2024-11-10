import chapter1 from "./chapters/chapter1";

const Hindi =  {
    chapters: [
      {
        title: 'अध्याय 1 बैंकिंग और वित्त का अवलोकन',
        sections:chapter1
      },
      {
        title: 'अध्याय 2',
        sections: [
          { id: '2.1', title: 'अनुभाग 2.1: अवलोकन', content: 'अवलोकन सामग्री हिंदी में' },
          { id: '2.2', title: 'अनुभाग 2.2: विश्लेषण', content: 'विश्लेषण सामग्री हिंदी में' },
          { id: '2.3', title: 'अनुभाग 2.3: सारांश', content: 'सारांश सामग्री हिंदी में' }
        ]
      }
    ]
  }

export default Hindi;