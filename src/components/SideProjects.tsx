import { Typography } from '@mui/material';
import { strings } from '../constants/strings';
import Position from './Position';
import { Company, EducationAndProjectsTitle, Positions, SectionHeading } from './Styles.css';

const SideProjects = () => (
  <>
    <SectionHeading variant="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      {strings.SIDE_PROJECTS}
    </SectionHeading>

    <Company>
      <EducationAndProjectsTitle>
        <Typography variant="h6" component="h3">
          {strings.LINGUIST}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.LINGUIST_DATES}
        </Typography>
      </EducationAndProjectsTitle>
      <Positions>
        <Position
          title={strings.MOBILE_APP}
          description={strings.LINGUIST_DESCRIPTION}
          link="https://github.com/linguistteam/linguist"
          linkText={strings.LINGUIST_REPO}
          skills={['React Native', 'TypeScript', 'Expo', 'Zustand', 'Firebase']}
        />
      </Positions>
    </Company>
  </>
);

export default SideProjects;
