import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function NSFProjects() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/research" className="text-blue-600 hover:text-blue-800">
            ← Back to Research
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-blue-600">
          Ongoing NSF Projects
        </h1>
        
        <div className="nsf-project-content">
          {/* Title */}
          <h2 className="project-title">
            1) NSF/IUSE Project: An Interdisciplinary Approach to Prepare Undergraduates for Data Science Using Real-World Data from High-Frequency Monitoring Systems
          </h2>
          
          {/* Project Summary Subtitle */}
          <h3 className="section-subtitle">Project Summary</h3>
          
          {/* Overview */}
          <div className="content-text">
            <p>
              Overview: Motivated by a National Academy of Sciences report on Data Science for Undergraduates, this is the first time interdisciplinary faculty from Virginia Tech (VT), North Carolina Agricultural and Technical University (NC A&T, an HBCU), and Vanderbilt University (VU) proposed a large-scale collaborative effort to promote innovation and change in undergraduate STEM+C curricula. This unique effort is informed by investigators&apos; prior successful NSF grants and will generate new knowledge about data science-integrated STEM learning.
            </p>
          </div>
          
          {/* Project Image */}
          <div className="image-section">
            <Image 
              src="/images/iuse.png" 
              alt="NSF/IUSE Project" 
              width={0}
              height={0}
              sizes="37.44vw"
              priority
              className="project-image"
              style={{ width: '37.44%', height: 'auto' }}
            />
          </div>
          
          {/* Project Goals */}
          <div className="content-text">
            <p>
              <strong>Project Goals:</strong> Develop and implement an interdisciplinary collaborative approach to support undergraduate students in developing Data Science expertise through various STEM+C disciplines including engineering, computer science, environmental science, and biology. Specific objectives are to:
            </p>
            <ul className="goals-list">
              <li>integrate real-world data from two high-frequency monitoring systems (one on water monitoring at VT and another on traffic monitoring at VU) into 8 relevant STEM+C courses at VT, VU, and NC A&T</li>
              <li>conduct research on student and instructor perspectives of data science learning using data across various disciplines, institutions, gender, and ethnicity</li>
              <li>and extend the impact of this project beyond the partnering universities through the dissemination of learning materials created with key considerations for integrating data science into different STEM+C courses.</li>
            </ul>
          </div>
          
          {/* Data Sources */}
          <div className="content-text">
            <p>
              <strong>Data Sources:</strong> Two unique, high-frequency data monitoring systems – Learning Enhanced Watershed Assessment System (LEWAS) at VT and Smart Cities at VU – facilitated the proposed teaching, learning, and research activities.
            </p>
          </div>
          
          {/* Project Impact */}
          <div className="content-text">
            <p>
              <strong>Project Impact:</strong> 8 interdisciplinary courses in computer science, engineering, biology, and environmental science, from sophomore to senior levels, reached about 1300 students over the 3-year project period
            </p>
          </div>
          
          {/* NSF Grants */}
          <div className="content-text">
            <p>
              This project is supported by NSF grants #1029711, #1915487, and #1915268.
            </p>
          </div>
          
          {/* Project Resources Subtitle */}
          <h3 className="section-subtitle">Project&apos;s Resources</h3>
          
          {/* Main Website */}
          <div className="content-text">
            <p>
              The project&apos;s main website where more information about the project as well as its 11 of the 12 data science modules can be found:
            </p>
            <p className="resource-link">
              <a href="https://ds4stem.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                ds4stem.org
              </a>
            </p>
          </div>
          
          {/* 12th Module */}
          <div className="content-text">
            <p>
              The 12th module (named Frequency Analysis in Hydrology) can be found:
            </p>
            <p className="resource-link">
              <a href="https://hydrolearn.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                hydrolearn.org
              </a>
            </p>
          </div>
          
          {/* Publications Subtitle */}
          <h3 className="section-subtitle">Project&apos;s Relevant Publications</h3>
          
          {/* Dissertations */}
          <section style={{ width: '100%', marginBottom: '2rem' }}>
            <h4 className="publication-category">Dissertations</h4>
            <div className="space-y-3" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>C. Vatral</span>, "Design and Development of Educational Technology to Support Collaborative Debriefing for Nurse Training," <span style={{ fontStyle: 'italic' }}>Ph.D. dissertation</span>, Dept. Comput. Sci., Vanderbilt University, Nashville, TN, USA, 2024.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>C. Snyder</span>, "Understanding Students&apos; Collaborative Problem-Solving during STEM+C Learning Using Multimodal Analysis," <span style={{ fontStyle: 'italic' }}>Ph.D. dissertation</span>, Dept. Comput. Sci., Vanderbilt University, Nashville, TN, USA, 2024.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>Md. Y. Naseri</span>, "Data science for multisectoral water use management and STEM Education: A Synergistic Approach," <span style={{ fontStyle: 'italic' }}>Ph.D. dissertation</span>, Dept. Civil Eng., Virginia Polytechnic Institute and State Univ., Blacksburg, VA, USA, 2025. (Expected defense: Aug. 25, 2025)
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>H. Workneh</span>, "Physics-guided machine learning for streamflow prediction," <span style={{ fontStyle: 'italic' }}>Ph.D. dissertation</span>, Dept. Comput. Data Sci. Eng., North Carolina A&T State Univ., Greensboro, NC, USA, 2025.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>M. A. Mollah</span>, '[Title of dissertation should be added]," <span style={{ fontStyle: 'italic' }}>Ph.D. dissertation</span>, Dept. Agricult. Environ. Syst., North Carolina A&T State Univ., Greensboro, NC, USA, 2028. [Partially funded, one semester]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Theses */}
          <section style={{ width: '100%', marginBottom: '2rem' }}>
            <h4 className="publication-category">Theses</h4>
            <div className="space-y-3" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>D. Asamen</span>, "Stream stability analysis medium size streambed material D50," <span style={{ fontStyle: 'italic' }}>M.S. thesis</span>, Dept. Civil, Archit., Environ. Eng., North Carolina A&T State Univ., Greensboro, NC, USA, 2021.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>S. Bhandari</span>, "Land suitability analysis for crop production using geospatial technology: a case study in the three diverse regions of North Carolina," <span style={{ fontStyle: 'italic' }}>M.S. thesis</span>, Dept. Civil, Archit., Environ. Eng., North Carolina A&T State Univ., Greensboro, NC, USA, 2023.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>S. Roy</span>, "Fate of Amoxycillin in hybrid constructed wetlands," <span style={{ fontStyle: 'italic' }}>M.S. thesis</span>, Dept. Agricult. Environ. Syst., North Carolina A&T State Univ., Greensboro, NC, USA, 2025.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>F. H. Pernaleta</span>, "Evaluating stress and attention in response to university food pantry outreach using EEG & eye-tracking," <span style={{ fontStyle: 'italic' }}>M.S. thesis</span>, Dept. Ind. Syst. Eng., North Carolina A&T State Univ., Greensboro, NC, USA, 2026. [Partially funded, one semester]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conference Presentations */}
          <section style={{ width: '100%', marginBottom: '2rem' }}>
            <h4 className="publication-category">Conference presentations</h4>
            <div className="space-y-3" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>Md. Y. Naseri, V. K. Lohani, M. K. Jha, C. Snyder, and G. Biswas</span>, "Integration of data science modules across interdisciplinary courses at multiple institutions: Analysis of students&apos; and faculty perspectives," in Proc. 2025 Amer. Soc. Eng. Educ. Annu. Conf., Montreal, Canada, Jun. 22-25, 2025.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>C. Sear, and L. Marston</span>, "Using GPT personas in the classroom to develop holistic solutions to complex environmental challenges," presented at the Univ. Council Water Resources (UCOWR) Conf., Minneapolis, MN, USA, Jun. 4, 2025.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>D. Varshney, Md. Y. Naseri, A. Kothyari, J. Smith, and V. K. Lohani</span>, "Smart environmental monitoring: An AI-driven approach to watershed data integration and access," presented at the Research Creative Scholarship Conf., Virginia Tech, Blacksburg, VA, USA, Apr. 25, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>C. Sear and L. Marston</span>, "Using GPT personas in the classroom to develop holistic solutions to complex environmental challenges," presented at the Amer. Geophys. Union Fall Meeting, Washington, DC, USA, Dec. 12, 2024.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>Md. Y. Naseri et al.</span>, "Integrating data science into multi-university undergraduate STEM courses: Lessons learned," presented at the 2024 Frontiers Educ. Conf., Washington, DC, USA, Oct. 13-16, 2024.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>D. Varshney, Md. Y. Naseri, A. Kothyari, and V. K. Lohani</span>, "AI-enhanced teaching assistant: Bridging instructor knowledge and web intelligence," presented at the Summer Conf. Office Undergraduate Research, Virginia Tech, Blacksburg, VA, USA, Jul. 25, 2024.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>D. Varshney, Md. Y. Naseri, A. Kothyari, and V. K. Lohani</span>, "Development of an AI-assisted chatbot for a water monitoring environment lab," presented at the Summer Conf. Office Undergraduate Research, Virginia Tech, Blacksburg, VA, USA, Jul. 25, 2024.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>Md. Y. Naseri et al.</span>, "Integrating data science into multi-university undergraduate STEM courses: Lessons learned," presented at the 2024 IUSE Summit, Washington, DC, USA, Jun. 16-18, 2024.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>Md. Y. Naseri et al.</span>, "A modular approach for integrating data science concepts into multiple undergraduate STEM+C courses," presented at the 2022 Amer. Soc. Eng. Educ. Annu. Conf., Minneapolis, MN, USA, Jun. 26-29, 2022.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>C. Snyder et al.</span>, "Understanding data science instruction in multiple STEM disciplines," presented at the 2021 Amer. Soc. Eng. Educ. Annu. Conf., Virtual, Jul. 26-29, 2021.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conference Papers */}
          <section style={{ width: '100%', marginBottom: '2rem' }}>
            <h4 className="publication-category">Conference papers</h4>
            <div className="space-y-3" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>Md. Y. Naseri, C. Snyder, M. K. Jha, and V. K. Lohani</span>, "Integration of data science modules across interdisciplinary courses at multiple institutions: Analysis of students&apos; and faculty perspectives," in Proc. 2025 Amer. Soc. Eng. Educ. Annu. Conf., Montreal, Canada, Jun. 22-25, 2025.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>Md. Y. Naseri, C. Snyder, B. Mcloughlin, S. Bhandari, N. Aryal, G. Biswas, E. Henrick, E. R. Hotchkiss, M. K. Jha, S. X. Jiang, E. C. Kern, V. K. Lohani, L. T. Marston, C. P. Vanags, and K. Xia</span>, "A modular approach for integrating data science concepts into multiple undergraduate STEM+C courses," in Proc. 2022 Amer. Soc. Eng. Educ. Annu. Conf., Minneapolis, MN, USA, Jun. 26-29, 2022. [Online]. Available: <a href="https://peer.asee.org/42010" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', marginLeft: '8px', textDecoration: 'none' }}>🔗</a>
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>C. Snyder, D. M. Asamen, Md. Y. Naseri, N. Aryal, G. Biswas, A. Dubey, E. Henrick, E. R. Hotchkiss, M. K. Jha, S. X. Jiang, E. C. Kern, V. K. Lohani, L. T. Marston, C. P. Vanags, and K. Xia</span>, "Understanding data science instruction in multiple STEM disciplines," in Proc. 2021 Amer. Soc. Eng. Educ. Annu. Conf., Virtual, Jul. 26-29, 2021. [Online]. Available: <a href="https://par.nsf.gov/biblio/10287718" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', marginLeft: '8px', textDecoration: 'none' }}>🔗</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Workshops */}
          <section style={{ width: '100%', marginBottom: '2rem' }}>
            <h4 className="publication-category">Workshops</h4>
            <div className="space-y-3" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      "Hybrid NSF/IUSE Workshop 2025: Integrating Data Science into Undergraduate Science and Engineering Courses," presented at the NSF IUSE Workshop, Martin Eng. Res. Innovation Complex, North Carolina A&T State Univ., Greensboro, NC, USA, Apr. 18, 2025.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      "An Approach to Integrating Data Science into multiple STEM+C undergraduate courses," presented at the ASEE Workshop 2023, Baltimore Convention Center, Baltimore, MD, USA, Jun. 25, 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Journal Articles */}
          <section style={{ width: '100%', marginBottom: '2rem' }}>
            <h4 className="publication-category">Journal articles</h4>
            <div className="space-y-3" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>Md. Y. Naseri et al.</span>, "Integrating data science into undergraduate science and engineering courses through discipline-specific modules: The student perspective," <span style={{ fontStyle: 'italic' }}>Eur. J. Eng. Educ.</span>, submitted for publication.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                <span style={{ color: '#000000', marginRight: '12px', marginTop: '4px', fontSize: '18px', flexShrink: '0' }}>•</span>
                <div style={{ flex: '1', width: '100%' }}>
                  <div style={{ color: '#1f2937', lineHeight: '1.6', width: '100%' }}>
                    <p style={{ width: '100%', textAlign: 'left', margin: '0' }}>
                      <span style={{ fontWeight: '400' }}>Md. Y. Naseri et al.</span>, "Integrating data science into undergraduate science and engineering courses: Lessons learned by instructors in a multiuniversity research-practice partnership," <span style={{ fontStyle: 'italic' }}>IEEE Trans. Educ.</span>, 2024, doi: <a href="https://doi.org/10.1109/TE.2024.3436041" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', marginLeft: '8px', textDecoration: 'none' }}>🔗</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .nsf-project-content {
          max-width: 90vw;
          width: 90vw;
          min-width: 90vw;
          margin: 0 auto;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 2rem;
          line-height: 1.4;
        }

        .section-subtitle {
          font-size: 1.3rem;
          font-weight: 600;
          color: #34495e;
          text-align: center;
          margin: 2rem 0 1rem 0;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.5rem;
        }

        .content-text {
          width: 100%;
          max-width: 90vw;
          min-width: 90vw;
          margin: 0 auto 1.5rem;
          text-align: left;
          overflow-wrap: break-word;
          word-wrap: break-word;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }

        .content-text p {
          font-size: 1.1rem;
          color: #2c3e50;
          line-height: 1.8;
          margin-bottom: 1rem;
          text-align: justify;
          max-width: 90vw;
          min-width: 90vw;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }

        .goals-list {
          list-style-type: disc;
          margin-left: 2rem;
          margin-bottom: 1rem;
        }

        .goals-list li {
          font-size: 1.1rem;
          color: #2c3e50;
          line-height: 1.8;
          margin-bottom: 0.5rem;
          text-align: justify;
        }

        .resource-link {
          text-align: center;
          margin: 1rem 0;
        }

        .resource-link a {
          font-size: 1.2rem;
          font-weight: 500;
        }

        .publication-category {
          font-size: 1.2rem;
          font-weight: 600;
          color: #34495e;
          margin: 1.5rem 0 1rem 0;
          text-align: left;
          width: 100%;
        }

        .publication-list {
          list-style-type: none;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .publication-list li {
          font-size: 1rem;
          color: #2c3e50;
          line-height: 1.6;
          margin-bottom: 0.8rem;
          text-align: justify;
          padding-left: 0;
        }

        /* Image Section */
        .image-section {
          display: flex;
          justify-content: center;
          margin: 2rem 0;
        }

        .project-image {
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          max-width: 100%;
          height: auto;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nsf-project-content {
            max-width: 95vw;
            width: 95vw;
            min-width: 95vw;
          }

          .project-title {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
          }

          .section-subtitle {
            font-size: 1.2rem;
            margin: 1.5rem 0 1rem 0;
          }

          .content-text p {
            font-size: 1rem;
            text-align: left;
          }

          .goals-list li {
            font-size: 1rem;
            text-align: left;
          }

          .project-image {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </Layout>
  );
}
