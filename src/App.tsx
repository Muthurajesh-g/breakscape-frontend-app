import React, { useState, useEffect } from 'react';
import { fetchDestinations } from './services/api';

// Types
interface Destination {
  id: number;
  name: string;
  tagline: string;
  description: string;
  category: string;
  driveTime: string;
  hub: string;
  image: string;
  wikiUrl: string;
  highlights: string[];
  bestTimeToVisit: string;
  estCost: string;
}

export function App() {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    const loadDestinations = async () => {
      const data = await fetchDestinations();

      const formattedDestinations: Destination[] = data.map((dest) => ({
        id: dest.id,
        name: dest.name,
        tagline: dest.tagline,
        description: dest.description,
        category:
          dest.category_id === 2 ? 'Coast & Slow Living' : 'Hills & Nature',
        driveTime: `${dest.drive_time_hours} hours`,
        hub: `Hub ${dest.hub_id}`,
        image: dest.image_url,
        wikiUrl: dest.wiki_url || '',
        highlights: [],
        bestTimeToVisit: 'To be researched',
        estCost: 'Cost estimate pending',
      }));

      setDestinations(formattedDestinations);
    };

    loadDestinations();
  }, []);
  const [hub, setHub] = useState('Mumbai region');
  const [duration, setDuration] = useState('2');
  const [budget, setBudget] = useState('Up to ₹5,000');
  const [transport, setTransport] = useState('Road or public transport');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  const handleFindEscape = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const msg = `Search selected: ${hub} · ${duration} day(s) · ${budget} · ${transport}.`;
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);

    const escapesElement = document.getElementById('escapes');
    if (escapesElement) {
      escapesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        margin: 0,
        backgroundColor: '#fbf8f2',
        color: '#183d3b',
        fontFamily: 'Inter, system-ui, Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          width: 'calc(100% - 40px)',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <header
          style={{
            height: '78px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#183d3b',
            }}
            href="#"
          >
            <img
              src="https://res.cloudinary.com/cqg4oib1/image/upload/v1794063345/BreakScape-logo1.png"
              alt="BreakScape Logo"
              style={{
                width: '85px',
                height: '70px',
                objectFit: 'contain',
                flexShrink: 0,
              }}
            />
            <span>
              <b style={{ fontSize: '21px' }}>
                Break
                <em style={{ color: '#e98255', fontStyle: 'normal' }}>Scape</em>
              </b>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '1.5px',
                  color: '#667775',
                }}
              >
                BREAK THE ROUTINE. FIND YOUR ESCAPE.
              </div>
            </span>
          </a>
          <nav
            style={{
              display: 'flex',
              gap: '25px',
              fontSize: '13px',
              alignItems: 'center',
            }}
          >
            <a
              style={{ textDecoration: 'none', color: '#183d3b' }}
              href="#experiences"
            >
              Discover
            </a>
            <a
              style={{ textDecoration: 'none', color: '#183d3b' }}
              href="#finder"
            >
              Plan a break
            </a>
            <a
              style={{ textDecoration: 'none', color: '#183d3b' }}
              href="#escapes"
            >
              Escapes
            </a>
            <a
              style={{
                background: '#145b59',
                color: 'white',
                padding: '12px 18px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
              }}
              href="#finder"
            >
              Find your escape →
            </a>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <div
            style={{
              minHeight: '490px',
              borderRadius: '26px',
              background: `linear-gradient(90deg, #0c2d2dcc, #0c2d2d55 65%, #0c2d2d11), url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=85') center/cover`,
              display: 'flex',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <div style={{ padding: '55px 7%', maxWidth: '690px' }}>
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#f4b995',
                  fontWeight: 800,
                }}
              >
                A little distance changes everything
              </div>
              <h1
                style={{
                  fontSize: 'clamp(43px, 6vw, 70px)',
                  lineHeight: 1.02,
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '-2px',
                  margin: '18px 0',
                  fontWeight: 500,
                }}
              >
                Your routine can wait.
                <br />
                Your escape is calling.
              </h1>
              <p
                style={{ lineHeight: 1.7, color: '#edf1eb', maxWidth: '460px' }}
              >
                You don't need a long holiday to feel somewhere else. Discover
                refreshing breaks that fit your time, budget and starting point.
              </p>
              <a
                style={{
                  display: 'inline-block',
                  background: '#e98255',
                  color: 'white',
                  padding: '12px 18px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  marginTop: '12px',
                }}
                href="#finder"
              >
                Find my escape &nbsp; →
              </a>
              <div
                style={{
                  fontSize: '12px',
                  color: '#e5e9e2',
                  marginTop: '15px',
                }}
              >
                Thoughtful short breaks · 1 to 4 days · Starting from Mumbai &
                Pune
              </div>
            </div>
          </div>

          {/* Moods Section */}
          <section id="experiences" style={{ padding: '70px 0' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '25px',
                marginBottom: '25px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#e98255',
                    fontWeight: 800,
                  }}
                >
                  Start with how you want to feel
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(30px, 4vw, 42px)',
                    fontFamily: 'Georgia, serif',
                    margin: '9px 0',
                    fontWeight: 500,
                  }}
                >
                  What kind of break do you need?
                </h2>
              </div>
              <p
                style={{
                  maxWidth: '380px',
                  color: '#667775',
                  fontSize: '14px',
                  lineHeight: 1.6,
                }}
              >
                Some days call for adventure. Others just need quiet, fresh air
                or a change of scene.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '15px',
              }}
            >
              {[
                {
                  title: '⛰  Adventure',
                  sub: 'Move, explore, feel alive',
                  img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80',
                },
                {
                  title: '〰  Relaxation',
                  sub: 'Slow down and recharge',
                  img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=700&q=80',
                },
                {
                  title: '⌖  Culture & discovery',
                  sub: 'Find stories and local flavour',
                  img: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80',
                },
                {
                  title: '☘  Wellness',
                  sub: 'Reconnect with yourself',
                  img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=700&q=80',
                },
              ].map((m, idx) => (
                <a
                  key={idx}
                  style={{
                    height: '165px',
                    borderRadius: '17px',
                    backgroundImage: `linear-gradient(0deg, #092e2dcc, transparent), url('${m.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '18px',
                    color: 'white',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  href="#finder"
                >
                  <strong style={{ fontSize: '17px', position: 'relative' }}>
                    {m.title}
                  </strong>
                  <small
                    style={{
                      fontSize: '12px',
                      color: '#e5ece8',
                      marginTop: '4px',
                      position: 'relative',
                    }}
                  >
                    {m.sub}
                  </small>
                </a>
              ))}
            </div>
          </section>

          {/* Finder Section */}
          <section id="finder" style={{ padding: '0 0 70px 0' }}>
            <div
              style={{
                background: 'white',
                border: '1px solid #e8e5dc',
                borderRadius: '20px',
                padding: '27px',
                boxShadow: '0 12px 35px #203c3610',
              }}
            >
              <h3
                style={{
                  fontSize: '27px',
                  fontFamily: 'Georgia, serif',
                  margin: '0 0 8px',
                  fontWeight: 500,
                }}
              >
                Make a little room for escape.
              </h3>
              <div
                style={{
                  fontSize: '12px',
                  color: '#667775',
                  marginBottom: '20px',
                }}
              >
                Tell us what your break looks like.
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label
                    style={{
                      fontSize: '10px',
                      color: '#667775',
                      fontWeight: 800,
                      letterSpacing: '.8px',
                      marginBottom: '8px',
                    }}
                  >
                    STARTING FROM
                  </label>
                  <select
                    value={hub}
                    onChange={(e) => setHub(e.target.value)}
                    style={{
                      padding: '13px 10px',
                      border: '1px solid #e8e5dc',
                      borderRadius: '10px',
                      background: 'white',
                      color: '#183d3b',
                    }}
                  >
                    <option>Mumbai region</option>
                    <option>Pune region</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label
                    style={{
                      fontSize: '10px',
                      color: '#667775',
                      fontWeight: 800,
                      letterSpacing: '.8px',
                      marginBottom: '8px',
                    }}
                  >
                    TIME AVAILABLE
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    style={{
                      padding: '13px 10px',
                      border: '1px solid #e8e5dc',
                      borderRadius: '10px',
                      background: 'white',
                      color: '#183d3b',
                    }}
                  >
                    <option value="2">Weekend · 2 days</option>
                    <option value="1">A day · 1 day</option>
                    <option value="3">3 days</option>
                    <option value="4">Long break · 4 days</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label
                    style={{
                      fontSize: '10px',
                      color: '#667775',
                      fontWeight: 800,
                      letterSpacing: '.8px',
                      marginBottom: '8px',
                    }}
                  >
                    BUDGET PER PERSON
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    style={{
                      padding: '13px 10px',
                      border: '1px solid #e8e5dc',
                      borderRadius: '10px',
                      background: 'white',
                      color: '#183d3b',
                    }}
                  >
                    <option>Up to ₹5,000</option>
                    <option>Up to ₹3,000</option>
                    <option>Up to ₹7,500</option>
                    <option>Up to ₹10,000</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label
                    style={{
                      fontSize: '10px',
                      color: '#667775',
                      fontWeight: 800,
                      letterSpacing: '.8px',
                      marginBottom: '8px',
                    }}
                  >
                    GETTING AROUND
                  </label>
                  <select
                    value={transport}
                    onChange={(e) => setTransport(e.target.value)}
                    style={{
                      padding: '13px 10px',
                      border: '1px solid #e8e5dc',
                      borderRadius: '10px',
                      background: 'white',
                      color: '#183d3b',
                    }}
                  >
                    <option>Road or public transport</option>
                    <option>Public transport</option>
                    <option>Own vehicle</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '15px',
                  marginTop: '18px',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    color: '#667775',
                    lineHeight: 1.5,
                  }}
                >
                  Every BreakScape escape is designed for a maximum of four
                  days.
                  <br />
                  We'll help you find options that fit your available time.
                </div>
                <button
                  onClick={handleFindEscape}
                  style={{
                    background: '#145b59',
                    color: 'white',
                    padding: '12px 18px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    border: 0,
                    cursor: 'pointer',
                  }}
                >
                  Find my escape &nbsp; →
                </button>
              </div>
            </div>
          </section>

          {/* Escapes Cards Grid */}
          <section id="escapes" style={{ padding: '0 0 70px 0' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '25px',
                marginBottom: '25px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#e98255',
                    fontWeight: 800,
                  }}
                >
                  A few places to begin
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(30px, 4vw, 42px)',
                    fontFamily: 'Georgia, serif',
                    margin: '9px 0',
                    fontWeight: 500,
                  }}
                >
                  Escapes worth discovering.
                </h2>
              </div>
              <p
                style={{
                  maxWidth: '380px',
                  color: '#667775',
                  fontSize: '14px',
                  lineHeight: 1.6,
                }}
              >
                Your best escape depends on the time you have and the kind of
                break you need.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '19px',
              }}
            >
              {destinations.map((dest) => (
                <article
                  key={dest.id}
                  style={{
                    background: 'white',
                    border: '1px solid #e8e5dc',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      height: '195px',
                      backgroundImage: `url('${dest.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: '#ffffffed',
                        padding: '7px 10px',
                        borderRadius: '20px',
                        fontSize: '10px',
                        fontWeight: 800,
                      }}
                    >
                      {dest.category}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: '18px',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '25px',
                        fontFamily: 'Georgia, serif',
                        margin: '0 0 7px',
                        fontWeight: 500,
                      }}
                    >
                      {dest.name}
                    </h3>
                    <div
                      style={{
                        fontSize: '13px',
                        color: '#667775',
                        lineHeight: 1.5,
                        minHeight: '40px',
                      }}
                    >
                      {dest.tagline}
                    </div>
                    <div
                      style={{
                        borderTop: '1px solid #e8e5dc',
                        paddingTop: '13px',
                        marginTop: '15px',
                        display: 'flex',
                        gap: '15px',
                        fontSize: '12px',
                        color: '#526562',
                      }}
                    >
                      <span>◷ {dest.driveTime}</span>
                      <span>⌖ From {hub}</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '17px',
                      }}
                    >
                      <button
                        onClick={() => setSelectedDestination(dest)}
                        style={{
                          color: '#145b59',
                          fontWeight: 800,
                          background: 'none',
                          border: 0,
                          padding: 0,
                          cursor: 'pointer',
                          fontSize: '12px',
                        }}
                      >
                        Explore escape →
                      </button>
                      <a
                        style={{
                          color: '#788783',
                          fontSize: '12px',
                          textUnderlineOffset: '3px',
                        }}
                        href={dest.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikivoyage guide ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p
              style={{ fontSize: '11px', color: '#8a9690', marginTop: '14px' }}
            >
              Concept preview: imagery and descriptions are illustrative. Travel
              times, routes and costs must be researched and verified before
              publication.
            </p>
          </section>

          {/* Quote Section */}
          <div
            style={{
              background: '#e9f0e9',
              borderRadius: '22px',
              padding: '42px 7%',
              marginBottom: '35px',
            }}
          >
            <blockquote
              style={{
                fontSize: 'clamp(27px, 3.5vw, 39px)',
                lineHeight: 1.2,
                fontFamily: 'Georgia, serif',
                margin: 0,
                maxWidth: '700px',
                fontWeight: 500,
              }}
            >
              “You don't always need a holiday. Sometimes, you just need an
              escape.”
            </blockquote>
            <p
              style={{ fontSize: '12px', color: '#667775', marginTop: '15px' }}
            >
              BreakScape — Break the routine. Find your escape.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer
          style={{
            borderTop: '1px solid #e8e5dc',
            padding: '28px 0 40px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '15px',
            fontSize: '12px',
            color: '#667775',
          }}
        >
          <div>
            <b style={{ color: '#145b59' }}>BreakScape</b>
            <br />
            Break the routine. Find your escape.
          </div>
          <div>Discover better breaks. Dual hub edition (Mumbai & Pune).</div>
          <div>© 2026 BreakScape · Concept homepage</div>
        </footer>
      </div>

      {/* Destination Modal (EP-05) */}
      {selectedDestination && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(12, 45, 45, 0.65)',
            display: 'grid',
            placeItems: 'center',
            zIndex: 10,
            padding: '20px',
          }}
          onClick={() => setSelectedDestination(null)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '24px',
              maxWidth: '650px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                height: '240px',
                backgroundImage: `url('${selectedDestination.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setSelectedDestination(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                ✕
              </button>
              <span
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '20px',
                  background: '#ffffffed',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 800,
                }}
              >
                {selectedDestination.category}
              </span>
            </div>

            <div style={{ padding: '30px' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontFamily: 'Georgia, serif',
                  margin: '0 0 8px',
                  fontWeight: 500,
                  color: '#183d3b',
                }}
              >
                {selectedDestination.name}
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#e98255',
                  fontWeight: 600,
                  margin: '0 0 16px',
                }}
              >
                {selectedDestination.tagline}
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#526562',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                {selectedDestination.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '15px',
                  background: '#fbf8f2',
                  padding: '16px',
                  borderRadius: '14px',
                  marginBottom: '20px',
                  fontSize: '13px',
                }}
              >
                <div>
                  <strong
                    style={{
                      display: 'block',
                      color: '#145b59',
                      marginBottom: '4px',
                    }}
                  >
                    ⏱ Drive / Duration
                  </strong>
                  <span style={{ color: '#667775' }}>
                    {selectedDestination.driveTime} from {hub}
                  </span>
                </div>
                <div>
                  <strong
                    style={{
                      display: 'block',
                      color: '#145b59',
                      marginBottom: '4px',
                    }}
                  >
                    💰 Estimated Cost
                  </strong>
                  <span style={{ color: '#667775' }}>
                    {selectedDestination.estCost}
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4
                  style={{
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#183d3b',
                    marginBottom: '10px',
                  }}
                >
                  Top Highlights
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '20px',
                    color: '#526562',
                    fontSize: '14px',
                    lineHeight: 1.7,
                  }}
                >
                  {selectedDestination.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #e8e5dc',
                  paddingTop: '20px',
                }}
              >
                <a
                  href={selectedDestination.wikiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#145b59',
                    fontWeight: 800,
                    textDecoration: 'none',
                    fontSize: '13px',
                  }}
                >
                  Read full Wikivoyage Guide ↗
                </a>
                <button
                  onClick={() => setSelectedDestination(null)}
                  style={{
                    background: '#145b59',
                    color: 'white',
                    padding: '10px 22px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    border: 0,
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#183d3b',
            color: 'white',
            padding: '13px 18px',
            borderRadius: '24px',
            fontSize: '12px',
            maxWidth: '90%',
            zIndex: 4,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
