import Layout from '../../components/Layout';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Publications() {
  const [publications, setPublications] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('/content/publications.json');
        const data = await response.json();
        setPublications(data.publications);
      } catch (error) {
        console.error('Error loading publications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/research" className="text-blue-600 hover:text-blue-800">
              ← Back to Research
            </Link>
          </div>
          <div className="text-center">Loading publications...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ 
        padding: '2rem', 
        textAlign: 'left',
        maxWidth: 'none',
        margin: '0',
        width: '100%'
      }}>
        <div className="mb-6">
          <Link href="/research" className="text-blue-600 hover:text-blue-800">
            ← Back to Research
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-orange-600 text-center">
          Publications
        </h1>
        
        <div className="space-y-20" style={{ 
          textAlign: 'left',
          width: '100%',
          maxWidth: 'none'
        }}>
          {/* Journal Papers & Book Chapters */}
          <section style={{ width: '100%' }}>
            <h2 className="text-3xl font-semibold mb-8 text-blue-700 border-b-2 border-blue-200 pb-2">
              1) Journal Papers & Book Chapters
            </h2>
            <div className="space-y-3" style={{ width: '100%' }}>
              {publications?.journal_papers_book_chapters?.map((pub, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  width: '100%'
                }}>
                  <span style={{ 
                    color: '#000000', 
                    marginRight: '12px', 
                    marginTop: '4px',
                    fontSize: '18px',
                    flexShrink: '0'
                  }}>•</span>
                  <div style={{ flex: '1', width: '100%' }}>
                    <div style={{ 
                      color: '#1f2937', 
                      lineHeight: '1.6',
                      width: '100%' 
                    }}>
                      <p style={{ 
                        width: '100%', 
                        textAlign: 'left',
                        margin: '0'
                      }}>
                        <span style={{ fontWeight: '400' }}>{pub.authors}</span>, "{pub.title}," <span style={{ fontStyle: 'italic' }}>{pub.publication}</span>
                        {pub.doi && (
                          <a 
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ 
                              color: '#2563eb', 
                              marginLeft: '8px',
                              textDecoration: 'none'
                            }}
                            title="View DOI"
                          >
                            🔗
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Peer-Reviewed Conference Papers */}
          <section style={{ width: '100%' }}>
            <h2 className="text-3xl font-semibold mb-8 text-green-700 border-b-2 border-green-200 pb-2">
              2) Peer-Reviewed Conference Papers
            </h2>
            <div className="space-y-3" style={{ width: '100%' }}>
              {publications?.peer_reviewed_conference_papers?.map((pub, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  width: '100%'
                }}>
                  <span style={{ 
                    color: '#000000', 
                    marginRight: '12px', 
                    marginTop: '4px',
                    fontSize: '18px',
                    flexShrink: '0'
                  }}>•</span>
                  <div style={{ flex: '1', width: '100%' }}>
                    <div style={{ 
                      color: '#1f2937', 
                      lineHeight: '1.6',
                      width: '100%' 
                    }}>
                      <p style={{ 
                        width: '100%', 
                        textAlign: 'left',
                        margin: '0'
                      }}>
                        <span style={{ fontWeight: '400' }}>{pub.authors}</span>, "{pub.title}," <span style={{ fontStyle: 'italic' }}>{pub.publication}</span>
                        {pub.url && (
                          <a 
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ 
                              color: '#16a34a', 
                              marginLeft: '8px',
                              textDecoration: 'none'
                            }}
                            title="View Paper"
                          >
                            🔗
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dissertations, Theses & Projects */}
          <section style={{ width: '100%' }}>
            <h2 className="text-3xl font-semibold mb-8 text-purple-700 border-b-2 border-purple-200 pb-2">
              3) Dissertations, Theses & Projects
            </h2>
            <div className="space-y-3" style={{ width: '100%' }}>
              {publications?.dissertations_theses_projects?.map((pub, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  width: '100%'
                }}>
                  <span style={{ 
                    color: '#000000', 
                    marginRight: '12px', 
                    marginTop: '4px',
                    fontSize: '18px',
                    flexShrink: '0'
                  }}>•</span>
                  <div style={{ flex: '1', width: '100%' }}>
                    <div style={{ 
                      color: '#1f2937', 
                      lineHeight: '1.6',
                      width: '100%' 
                    }}>
                      <p style={{ 
                        width: '100%', 
                        textAlign: 'left',
                        margin: '0'
                      }}>
                        <span style={{ fontWeight: '400' }}>{pub.author}</span>, "{pub.title}," <span style={{ fontStyle: 'italic' }}>{pub.type}</span>, {pub.department}, {pub.institution}, Blacksburg, VA, USA, {pub.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
