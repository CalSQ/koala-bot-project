import { FaBug, FaUser, FaExclamationTriangle } from 'react-icons/fa';
import {
  MainContent,
  MiscButton,
  PageContentDivision,
  SectionHeading,
  SectionMain,
  Seperator,
} from '../styles/base';

export function ReportPage() {
  return (
    <PageContentDivision>
      <MainContent>
        <div
          style={{
            maxWidth: '1000px',
            width: '100%',
          }}
        >
          <section>
            <header
              style={{
                marginBottom: '15px',
              }}
            >
              <SectionHeading>Options</SectionHeading>
              <Seperator />
            </header>
            <SectionMain>
              <MiscButton>
                <FaBug className="icon" />
                <p>Bug Report</p>
              </MiscButton>
              <MiscButton>
                <FaUser className="icon" />
                <p>User Report</p>
              </MiscButton>
              <MiscButton>
                <FaExclamationTriangle className="icon" />
                <p>Complaint</p>
              </MiscButton>
            </SectionMain>
          </section>
        </div>
      </MainContent>
    </PageContentDivision>
  );
}
