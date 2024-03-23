import { FaBug, FaUser } from 'react-icons/fa';
import { MdReportProblem } from 'react-icons/md';
import {
  MainButton,
  MainContent,
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
              <SectionHeading>Linking</SectionHeading>
              <Seperator />
            </header>
            <SectionMain>
              <MainButton>
                <FaBug className="icon" />
                <p>Bug Report</p>
              </MainButton>
              <MainButton>
                <FaUser className="icon" />
                <p>User Report</p>
              </MainButton>
              <MainButton>
                <MdReportProblem className="icon" />
                <p>Complaint</p>
              </MainButton>
            </SectionMain>
          </section>
        </div>
      </MainContent>
    </PageContentDivision>
  );
}
