import React,{useState, useRef} from "react";
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {Container} from 'react-bootstrap';
import TeleantillaLogo from './logos/teleantillas.png';
import RTVDLogo from './logos/certv.png';
import TelemicroLogo from './logos/telemicro.png';
import AntenaLatinaLogo from './logos/antena7.png';
import TelesistemaLogo from './logos/telesistema.png';
import TelecentroLogo from './logos/telecentro.png';
import ColorVisionLogo from './logos/colorvision.png';
import Digital15Logo from './logos/digital15.png';
import CinevisionLogo from './logos/cinevision.png';
import TelefuturoLogo from './logos/telefuturo.png';
import Canal25StgoLogo from './logos/canal25stgo.png';
import RNNLogo from './logos/rnn.png'
import TeleuniversoLogo from './logos/teleuniverso.png';
import CDNLogo from './logos/cdn.png';
import CDNDeportesLogo from './logos/cdndeportes.png';
import TeleradioamericaLogo from './logos/teleradioamerica.png';
import Ame47Logo from './logos/ame47.png';
import CarivisionLogo from './logos/carivision.png'
import SenalesTVLogo from './logos/senalestv.png'
import SiTVLogo from './logos/sitv.png'
import CanalSol from './logos/canaldelsol.png'

const liveTvData = [

    {teleantillas: "https://tunzilla.com/http://51.81.93.239:8084/hls/tantillas.m3u8"},
    {certv: "https://protvradiostream.com:1936/canal4rd-1/ngrp:canal4rd-1_all/playlist.m3u8"},
    {telemicro: "https://tunzilla.com/http://51.81.93.239:8084/hls/tmicro.m3u8"},
    {antena7: "https://tunzilla.com/http://51.81.106.157:8084/hls/alatina.m3u8"},
    {colorvision: "https://www.dailymotion.com/embed/video/x7gy059"},
    {telesistema: "https://tunzilla.com/http://51.81.93.239:8084/hls/tsistemas.m3u8"},
    {telecentro: "https://tunzilla.com/http://51.81.93.239:8084/hls/telecentro.m3u8"},
    {digital15: "https://tunzilla.com/http://51.81.93.239:8084/hls/d15.m3u8"},
    {cinevision: "https://live.teledom.info:3713/live/cinevisionlive.m3u8"},
    {telefuturo: "https://ss9.domint.net:3054/tf_str/telefuturo/chunklist_w719910685.m3u8"},
    {canal25stgo: "https://ss3.domint.net:3150/c25_str/canal25/chunklist_w293253969.m3u8"},
    {teleuniverso: "https://teleuniversotv.streamgato.us:3110/live/teleuniversotvlive.m3u8"},
    {cdn: "https://dacastmmd.mmdlive.lldns.net/dacastmmd/5f85ae10c62d4be3a5edbf483cb04f25/playlist.m3u8"},
    {cdn_deportes: "https://tunzilla.com/http://51.81.93.29:8084/hls/cdnsm.m3u8"},
    {tra: "https://live.teledom.info:3625/live/tra45live.m3u8"},
    {ame47: "https://ss9.domint.net:3040/ame_str/amecanal47/chunklist_w1220930584.m3u8"},
    {rnn: "https://ss2.domint.net:3202/rnn_str/canal27/playlist.m3u8"},
    {carivision: "https://ss5.domint.net:3174/car_str/carivision/playlist.m3u8"},
    {senalestv: "https://live.teledom.info:4000/live/senalestvlive.m3u8?DVR"},
    {SiTV: "https://tunzilla.com/http://51.81.93.239:8084/hls/sitv2.m3u8"},
    {Sol: "https://dacastmmd.mmdlive.lldns.net/dacastmmd/5a08806485a34fb0bc9dcffbb55f0fa8/playlist.m3u8"}
];

const ReactVideoPlayer = () => {   

        const videoRefs = useRef([]);
        const [currentPlayingVideo, setCurrentPlayingVideo] = useState(null);

        const handleVideoPlay = (index) => {
            const newCurrentPlayingVideo = videoRefs.current[index];

            // Pause the current playing video if it's not the same as the new video
            if (currentPlayingVideo && currentPlayingVideo !== newCurrentPlayingVideo) {
                currentPlayingVideo.getInternalPlayer().pause();
            }
            // Set the new current playing video
            setCurrentPlayingVideo(newCurrentPlayingVideo);
        };
        
        //Playing video when clicking tab
        const [activeTab, setActiveTab] = useState('certv');
        
        const handleTabSelect = (key) => {
            setActiveTab(key);
        };
    
    return(

        <div className="bg-image">
            <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={activeTab} onSelect={handleTabSelect}>   
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="teleantillas">
                                        <img src={TeleantillaLogo} width={'70px'} alt=""/>
                                        <h5>Teleantillas</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="certv">
                                            <img src={RTVDLogo} width={'70px'} alt=""/>
                                            <h5>RTVD</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="telemicro">
                                        <img src={TelemicroLogo} width={'50px'} alt=""/> 
                                        <h5>Telemicro</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="canaldelsol">
                                        <img src={CanalSol} width={'70px'} alt=""/> 
                                        <h5>Canal Del Sol</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="antena7">
                                        <img src={AntenaLatinaLogo} width={'70px'} alt=""/> 
                                        <h5>Antena7 </h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="colorvision">
                                        <img src={ColorVisionLogo} width={'70px'} alt=""/>   
                                        <h5>Colorvisión</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="telesistema">
                                        <img src={TelesistemaLogo} width={'70px'} alt=""/> 
                                        <h5>Telesistema</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="telecentro">
                                        <img src={TelecentroLogo} width={'70px'} alt=""/> 
                                        <h5>Telecentro</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="digital15">
                                        <img src={Digital15Logo} width={'70px'} alt=""/>    
                                        <h5>Digital 15</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="cinevision">
                                        <img src={CinevisionLogo} width={'70px'} alt=""/>    
                                        <h5>Cinevisión</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="telefuturo23">
                                        <img src={TelefuturoLogo} width={'70px'} alt=""/>    
                                        <h5>Telefuturo</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="canal25">
                                        <img src={Canal25StgoLogo} width={'70px'} alt=""/>    
                                        <h5>Canal 25 Santiago</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="rnn">
                                        <img src={RNNLogo} width={'70px'} alt=""/>   
                                        <h5>RNN</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="teleuniverso">
                                        <img src={TeleuniversoLogo} width={'70px'} alt=""/>    
                                        <h5>Teleuniverso</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="cdn">
                                        <img src={CDNLogo} width={'70px'} alt=""/>   
                                        <h5>CDN</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="cdndeportes">
                                        <img src={CDNDeportesLogo} width={'70px'} alt=""/>    
                                        <h5>CDN Deportes</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="teleradioamerica">
                                        <img src={TeleradioamericaLogo} width={'70px'} alt=""/>    
                                        <h5>Teleradio América</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="ame47">
                                        <img src={Ame47Logo} width={'70px'} alt=""/>   
                                        <h5>Amé 47</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="carivision">
                                        <img src={CarivisionLogo} width={'70px'} alt=""/>  
                                        <h5>Carivisión</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="senalestv">
                                        <img src={SenalesTVLogo} width={'70px'} alt=""/>  
                                        <h5>SeñalesTV</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>

                                    <Nav.Item>
                                    <div className="tab-button">
                                        <Nav.Link eventKey="sitv">
                                        <img src={SiTVLogo} width={'70px'} alt=""/>  
                                        <h5>SiTV</h5>
                                        </Nav.Link>
                                    </div>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col sm={9}>
                                <Tab.Content className="video-player-container">
                                    
                                    <Tab.Pane eventKey="teleantillas">
                                        <ReactPlayer
                                            url={liveTvData[0].teleantillas}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(0)}
                                            ref={(el) => (videoRefs.current[0] = el)}
                                            playing={activeTab === 'teleantillas'}
                                            width='90%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://teleantillas.com.do" target="_blank"> https://www.teleantillas.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="certv">
                                        <ReactPlayer
                                            url={liveTvData[1].certv}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(1)}
                                            ref={(el) => (videoRefs.current[1] = el)}
                                            playing={activeTab === "certv"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://rtvd.gob.do" target="_blank">https://www.rtvd.gob.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="telemicro">

                                        <ReactPlayer
                                            url={liveTvData[2].telemicro}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(2)}
                                            ref={(el) => (videoRefs.current[2] = el)}
                                            playing={activeTab === "telemicro"}
                                            width='85%'
                                            height='100%'
                                            //title="Telemicro 5"
                                        />

                                        <div className="button-center">
                                            <Button variant="info" href="https://telemicro.com.do/telemicro-en-vivo/" target="_blank">https://www.telemicro.com.do</Button>
                                        </div>

                                    </Tab.Pane>

                                    <Tab.Pane eventKey="canaldelsol">

                                        <ReactPlayer
                                            url={liveTvData[20].Sol}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(20)}
                                            ref={(el) => (videoRefs.current[20] = el)}
                                            playing={activeTab === "canaldelsol"}
                                            width='85%'
                                            height='100%'
                                        />

                                        <div className="button-center">
                                            <Button variant="info" href="https://canaldelsol.com/canal-en-vivo/" target="_blank">https://www.canaldelsol.com</Button>
                                        </div>

                                    </Tab.Pane>

                                    <Tab.Pane eventKey="antena7">
                                        
                                        <ReactPlayer
                                            url={liveTvData[3].antena7}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(3)}
                                            ref={(el) => (videoRefs.current[3] = el)}
                                            playing={activeTab === "antena7"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://www.antena7.com.do/" target="_blank">https://www.antena7.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                      <Tab.Pane eventKey="colorvision">

                                        <ReactPlayer
                                            url={liveTvData[4].colorvision}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(4)}
                                            ref={(el) => (videoRefs.current[4] = el)}
                                            playing={activeTab === "colorvision"}
                                            width='85%'
                                            height='100%'
                                            /*config={{
                                                dailymotion: {
                                                    params: {
                                                        controls: true,
                                                        //autoplay: false,
                                                        mute: false
                                                    },
                                                preload: true
                                                }
                                            }}*/
                                        />
                                        <div className="button-center-channel9">
                                            <Button variant="info" href="https://colorvision.com.do/" target="_blank">https://www.colorvision.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="telesistema">

                                        <ReactPlayer
                                            url={liveTvData[5].telesistema}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(5)}
                                            ref={(el) => (videoRefs.current[5] = el)}
                                            playing={activeTab === "telesistema"}
                                            width='85%'
                                            height='100%'
                                            //title="Telesistema 11"
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://telesistema11.com.do/" target="_blank">https://www.telesistema11.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="telecentro">

                                        <ReactPlayer
                                            url={liveTvData[6].telecentro}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(6)}
                                            ref={(el) => (videoRefs.current[6] = el)}
                                            playing={activeTab === "telecentro"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://telecentro.com.do/" target="_blank">https://www.telecentro.com.do</Button>
                                        </div>
                                </Tab.Pane>

                                    <Tab.Pane eventKey="digital15">

                                        <ReactPlayer 
                                            url={liveTvData[7].digital15}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(7)}
                                            ref={(el) => (videoRefs.current[7] = el)}
                                            playing={activeTab === "digital15"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://telemicro.com.do/digital-15-en-vivo/" target="_blank">https://www.telemicro.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="cinevision">

                                        <ReactPlayer 
                                            url={liveTvData[8].cinevision}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(8)}
                                            ref={(el) => (videoRefs.current[8] = el)}
                                            playing={activeTab === "cinevision"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://canal19.do/" target="_blank">https://www.canal19.do</Button>
                                        </div>
                                    </Tab.Pane>


                                    <Tab.Pane eventKey="telefuturo23">

                                        <ReactPlayer 
                                            url={liveTvData[9].telefuturo}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(9)}
                                            ref={(el) => (videoRefs.current[9] = el)}
                                            playing={activeTab === "telefuturo23"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="http://telefuturo.com.do/home/" target="_blank">http://www.telefuturo.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="canal25">

                                        <ReactPlayer
                                            url={liveTvData[10].canal25stgo}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(10)}
                                            ref={(el) => (videoRefs.current[10] = el)}
                                            playing={activeTab === "canal25"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://www.canal25rd.com/" target="_blank">https://www.canal25rd.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="teleuniverso">

                                        <ReactPlayer
                                            url={liveTvData[11].teleuniverso}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(11)}
                                            ref={(el) => (videoRefs.current[11] = el)}
                                            playing={activeTab === "teleuniverso"}
                                           width='85%'
                                            height='100%'
                                            //title="Teleuniverso 29"
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://teleuniversotv.com/" target="_blank">https://www.teleuniversotv.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="cdn">
            
                                        <ReactPlayer
                                            url={liveTvData[12].cdn}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(12)}
                                            ref={(el) => (videoRefs.current[12] = el)}
                                            playing={activeTab === "cdn"}
                                            width='85%'
                                            height='100%'
                                            //title="CDN 37"
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://cdn.com.do/" target="_blank">https://www.cdn.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="cdndeportes">

                                        <ReactPlayer
                                            url={liveTvData[13].cdn_deportes}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(13)}
                                            ref={(el) => (videoRefs.current[13] = el)}
                                            playing={activeTab === "cdndeportes"}
                                            width='85%'
                                            height='100%'
                                            //title="CDN Deportes"
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://cdndeportes.com.do/" target="_blank">https://cdndeportes.com.do</Button>
                                        </div>
                                    </Tab.Pane>


                                <Tab.Pane eventKey="teleradioamerica">

                                        <ReactPlayer
                                            url={liveTvData[14].tra}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(14)}
                                            ref={(el) => (videoRefs.current[14] = el)}
                                            playing={activeTab === "teleradioamerica"}
                                            width='85%'
                                            height='100%'
                                            //title="TeleradioAmerica 45"
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://teleradioamerica.com/" target="_blank">https://teleradioamerica.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="ame47">

                                        <ReactPlayer
                                            url={liveTvData[15].ame47}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(15)}
                                            ref={(el) => (videoRefs.current[15] = el)}
                                            playing={activeTab === "ame47"}
                                            width='85%'
                                            height='100%'
                                            //title="Ame 47"
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://amecanal47.com/" target="_blank">https://www.amecanal47.com</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="rnn">

                                        <ReactPlayer
                                            url={liveTvData[16].rnn}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(16)}
                                            ref={(el) => (videoRefs.current[16] = el)}
                                            playing={activeTab === "rnn"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://rnn.com.do/" target="_blank">https://www.rnn.com.do</Button>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="carivision">

                                        <ReactPlayer
                                            url={liveTvData[17].carivision}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(17)}
                                            ref={(el) => (videoRefs.current[17] = el)}
                                            playing={activeTab === "carivision"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="http://carivision.online/" target="_blank">http://www.carivision.online</Button>
                                        </div>
                                </Tab.Pane>


                                    <Tab.Pane eventKey="senalestv">

                                        <ReactPlayer
                                            url={liveTvData[18].senalestv}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(18)}
                                            ref={(el) => (videoRefs.current[18] = el)}
                                            playing={activeTab === "senalestv"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://senalestv.com/" target="_blank">https://www.senalestv.com</Button>
                                        </div>
                                    </Tab.Pane>

                                        <Tab.Pane eventKey="sitv">
                                        <ReactPlayer
                                            url={liveTvData[19].SiTV}
                                            controls={true}
                                            onPlay={() => handleVideoPlay(19)}
                                            ref={(el) => (videoRefs.current[19] = el)}
                                            playing={activeTab === "sitv"}
                                            width='85%'
                                            height='100%'
                                        />
                                        <div className="button-center">
                                            <Button variant="info" href="https://sitv.com.do/" target="_blank">https://www.sitv.com.do</Button>
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

export default ReactVideoPlayer;