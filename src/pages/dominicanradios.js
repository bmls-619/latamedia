import React,{useState} from "react";
import ReactAudioPlayer from 'react-audio-player';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {Container} from 'react-bootstrap';
import AmorFM from './logos/amor919.png';
import CDNRadioFM from './logos/cdnradio925.png';
import PuraVidaFM from './logos/puravida.png';
import IndependenciaFM from './logos/independenciafm.png';
import KQ945FM from './logos/kq945.png';
import LaKalleFM from './logos/lakalle.png';
import Ritmo96FM from './logos/ritmo96.png';
import AlofokeFM from './logos/alofokefm.png';
import LaZ101FM from './logos/z101.png';
import RaicesRadioFM from './logos/raicesradio1029.png';
import MixxFM from './logos/mixx1045fm.png';
import MortalFM from './logos/mortalfm.png';
import LaBakanaFM from './logos/labakana.png';
import ZolFM from './logos/zolfm.png';
import SonidoSuaveFM from './logos/sonidosuave.png';
import RumbaFM from './logos/rumba985fm.png'
import PowerFM from './logos/power-103.png'

const liveRadioData = [

     {amor: "https://radio5.domint.net:8222/stream"},
     {cdn: "https://play.cdnradio.com.do/cdnlive"},
     {puraVida: "https://sonic.radiostreaminglatino.com/8294/stream"},
     {independencia: "https://stream.radiojar.com/nc893hafc8zuv"},
     {kq: "https://radio.yaservers.com:9990/stream/1/"},
     {laKalle: "https://radio.telemicro.com.do/lakallesantiago"},
     {ritmo: "https://node-10.zeno.fm/r66bf38wd0quv?1681778450"},
     {rumba: "https://radio5.domint.net:8226/stream"},
     {alofoke: "https://radio5.domint.net:8222/stream"},
     {laz101: "https://20283.live.streamtheworld.com/Z101FM.mp3"},
     {raices: "https://radio5.domint.net:8120/stream"},
     {mixx: "https://radio4.domint.net:8112/stream"},
     {mortal: "https://stream.radiojar.com/x84tcy2wm2zuv"},
     {laBakana: "https://radio4.domint.net:8030/stream"},
     {zol: "https://rss3.domint.net:8010/stream"},
     {sonidoSuave: "https://radio4.domint.net:8090/stream"},
     {power: "https://radio4.domint.net:8096/stream"}
]
  
const RadioStation = () => {

          //const audioRefs = useRef([]);
          const [activeTab, setActiveTab] = useState('raicesradio');
          const [currentPlayingAudio, setCurrentPlayingAudio] = useState(null);

          const handleTabSelect = (key) => {
            setActiveTab(key);
          };

          const handleAudioPlay = (audioEl) => {
            //const newCurrentPlayingVideo = audioRefs.current[audioEl];

            if (currentPlayingAudio && currentPlayingAudio !== audioEl) {
              currentPlayingAudio.pause();
            }
            setCurrentPlayingAudio(audioEl);
          };

  return (
        <div className="bg-image">
            <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={activeTab} onSelect={handleTabSelect}>
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="amorfm">
                                          <img src={AmorFM} width={'70px'} alt=""/>
                                          <h5>Amor 91.9 FM</h5>
                                          </Nav.Link>
                                        </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="cdnradio">
                                          <img src={CDNRadioFM} width={'70px'} alt=""/>
                                          <h5>CDN 92.5 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="puravida">
                                          <img src={PuraVidaFM} width={'70px'} alt=""/>
                                          <h5>Pura Vida 92.9 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="independenciafm">
                                          <img src={IndependenciaFM} width={'70px'} alt=""/>
                                          <h5>Independencia 93.3 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="kq945">
                                          <img src={KQ945FM} width={'70px'} alt=""/>
                                          <h5>KQ 94.5 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="lakalle">
                                          <img src={LaKalleFM} width={'70px'} alt=""/>
                                          <h5>La Kalle 96.3 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="ritmo96">
                                          <img src={Ritmo96FM} width={'70px'} alt=""/>
                                          <h5>Ritmo 96.5 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="rumba985">
                                          <img src={RumbaFM} width={'70px'} alt=""/>
                                          <h5>Rumba 98.5 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="alofokefm">
                                          <img src={AlofokeFM} width={'70px'} alt=""/>
                                          <h5>Alofoke 99.3 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="Z101">
                                          <img src={LaZ101FM} width={'70px'} alt=""/>
                                          <h5>La Z101 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="raicesradio">
                                          <img src={RaicesRadioFM} width={'70px'} alt=""/>
                                          <h5>Raices 102.9 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="power">
                                          <img src={PowerFM} width={'70px'} alt=""/>
                                          <h5>Power 103.7 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="mixx">
                                          <img src={MixxFM} width={'70px'} alt=""/>
                                          <h5>Mixx 104.5 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="mortal1049">
                                          <img src={MortalFM} width={'70px'} alt=""/>
                                          <h5>Mortal 104.9 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>


                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="labakana">
                                          <img src={LaBakanaFM} width={'70px'} alt=""/>
                                          <h5>La Bakana 105.7 FM</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                        <Nav.Link eventKey="zolfm">
                                        <img src={ZolFM} width={'70px'} alt=""/>
                                        <h5>Zol 106.5 FM</h5>
                                        </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <div className="tab-button">
                                          <Nav.Link eventKey="sonidosuave">
                                          <img src={SonidoSuaveFM} width={'70px'} alt=""/>
                                          <h5>Sonido Suave</h5>
                                          </Nav.Link>
                                      </div>
                                    </Nav.Item>

                                </Nav>
                            </Col>

                            <Col sm={9}>
                                <Tab.Content className="audio-player">

                                    <Tab.Pane eventKey="amorfm">
                                      <img src={AmorFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[0].amor} 
                                        autoPlay={activeTab === 'amorfm'}
                                        onPlay={(e) => handleAudioPlay(e.target)} 
                                        controls={true} 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://amorfm91.com/" target="_blank"> https://www.amorfm91.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="cdnradio">
                                      <img src={CDNRadioFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[1].cdn} 
                                        autoPlay={activeTab === 'cdnradio'}
                                        onPlay={(e) => handleAudioPlay(e.target)}  
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://cdnradio.com.do/" target="_blank">https://www.cdnradio.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="puravida">
                                      <img src={PuraVidaFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[2].puraVida}
                                        autoPlay={activeTab === 'puravida'}
                                        onPlay={(e) => handleAudioPlay(e.target)} 
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://puravidafm.net/" target="_blank">https://www.puravidafm.net</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="independenciafm">
                                      <img src={IndependenciaFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[3].independencia} 
                                        autoPlay={activeTab === 'independenciafm'}
                                        onPlay={(e) => handleAudioPlay(e.target)} 
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://telemicro.com.do/independencia-93-3/" target="_blank">https://www.telemicro.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="kq945">
                                      <img src={KQ945FM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[4].kq} 
                                        autoPlay={activeTab === 'kq945'}
                                        onPlay={(e) => handleAudioPlay(e.target)}
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://kq94.net/" target="_blank">https://www.kq94.net/</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="lakalle">
                                      <img src={LaKalleFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[5].laKalle}
                                        autoPlay={activeTab === 'lakalle'}
                                        onPlay={(e) => handleAudioPlay(e.target)}
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://telemicro.com.do/la-kalle-107-3/" target="_blank">https://www.telemicro.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="ritmo96">
                                      <img src={Ritmo96FM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[6].ritmo} 
                                        autoPlay={activeTab === 'ritmo96'}
                                        onPlay={(e) => handleAudioPlay(e.target)}
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://ritmo96.com/" target="_blank">https://www.ritmo96.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="rumba985">
                                      <img src={RumbaFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[7].rumba} 
                                        autoPlay={activeTab === 'rumba985'}
                                        onPlay={(e) => handleAudioPlay(e.target)} 
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://www.rumba985fm.com/" target="_blank">https://www.rumba985fm.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="alofokefm">
                                      <img src={AlofokeFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[8].alofoke}
                                        autoPlay={activeTab === 'alofokefm'}
                                        onPlay={(e) => handleAudioPlay(e.target)}
                                        controls={true} 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://alofoke.fm/" target="_blank">https://www.alofoke.fm</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="Z101">
                                      <img src={LaZ101FM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[9].laz101}
                                        autoPlay={activeTab === 'Z101'}
                                        onPlay={(e) => handleAudioPlay(e.target)} 
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://z101digital.com/" target="_blank">https://www.z101digital.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="raicesradio">
                                      <img src={RaicesRadioFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[10].raices}
                                        autoPlay={activeTab === 'raicesradio'}
                                        onPlay={(e) => handleAudioPlay(e.target)} 
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://emisoraraices.org.do/" target="_blank">https://www.emisoraraices.org.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="power">
                                      <img src={PowerFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[16].power}
                                        autoPlay={activeTab === 'power'}
                                        onPlay={(e) => handleAudioPlay(e.target)} 
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://www.power1037.com/" target="_blank">https://www.power1037.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="mixx">
                                      <img src={MixxFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[11].mixx}
                                        autoPlay={activeTab === 'mixx'}
                                        onPlay={(e) => handleAudioPlay(e.target)}
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="http://mixx1045fm.com/" target="_blank">http://www.mixx1045fm.com</Button>
                                        </div>
                                    </Tab.Pane>

                                     <Tab.Pane eventKey="mortal1049">
                                      <img src={MortalFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[12].mortal}
                                        autoPlay={activeTab === 'mortal1049'}
                                        onPlay={(e) => handleAudioPlay(e.target)}
                                        controls 
                                      />
                                       <div className="button-center1">
                                            <Button variant="info" href="https://telemicro.com.do/mortal-104-9/" target="_blank">https://www.telemicro.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="labakana">
                                      <img src={LaBakanaFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[13].laBakana}
                                        autoPlay={activeTab === 'labakana'}
                                        onPlay={(e) => handleAudioPlay(e.target)}
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://www.labakana105.com/" target="_blank">https://www.labakana105.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="zolfm">
                                      <img src={ZolFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[14].zol}
                                        autoPlay={activeTab === 'zolfm'}
                                        onPlay={(e) => handleAudioPlay(e.target)} 
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="https://zolfm.com/" target="_blank">https://www.zolfm.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="sonidosuave">
                                      <img src={SonidoSuaveFM} width={'70px'} alt="" className="logo-center"/>
                                      <ReactAudioPlayer 
                                        src={liveRadioData[15].sonidoSuave} 
                                        autoPlay={activeTab === 'sonidosuave'}
                                        onPlay={(e) => handleAudioPlay(e.target)} 
                                        controls 
                                      />
                                        <div className="button-center1">
                                            <Button variant="info" href="http://sonidosuave.com/" target="_blank">http://www.sonidosuave.com</Button>
                                        </div>
                                    </Tab.Pane> 
 
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );

};
  
export default RadioStation;