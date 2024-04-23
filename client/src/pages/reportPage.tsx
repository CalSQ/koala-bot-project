import { FaBug, FaUser, FaExclamationTriangle } from 'react-icons/fa';
import {
  MainContent,
  MiscButton,
  PageContentDivision,
  SectionBase,
  SectionMain,
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
          <SectionBase>
            <header>
              <h1>Options</h1>
            </header>
            <SectionMain $row>
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
          </SectionBase>
        </div>
      </MainContent>
    </PageContentDivision>
  );
}
